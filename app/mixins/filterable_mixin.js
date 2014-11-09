/**
 * Created by thomas.wbridge on 10/15/14.
 */
import Ember from 'ember';
var get = Ember.get;

export default Ember.Mixin.create(Ember.SortableMixin, {
  // array of filter objects
  /*
   * {
   *   propertyName: string                      // property to filter against
   *   values: [boolean, string, number]         // array of active property values to match during filtering
   *   entries: [{label: 'Audience',isChecked: true}] // array of objects to be looped over when creating filter dom elements
   *   and: boolean                              // should matched values be and-ed together or or-ed together
   * }
   * */
  // the ORDER of the filterProperties is important, doing a recommended filter (top 10, bottom 10) at the start of a chain of filters will give different results from doing it at the end
  filterProperties: [], // overwrite this
  serverSideFiltering: false, // not implemented yet, overwrite this
  filteredContent: function(){
    var filterProperties = this.get('filterProperties');
    return this.filterByProperties(filterProperties);
  }.property('content', 'filterProperties.@each.values'),

  // only change to SortableMixin's arranged content is content binding -> filteredContent
  arrangedContent: Ember.computed('filteredContent', 'sortProperties.@each', function() {
    var content = get(this, 'filteredContent'),
      isSorted = get(this, 'isSorted'),
      sortProperties = get(this, 'sortProperties'),
      self = this;
    if (content && isSorted) {
      content = content.slice();
      content.sort(function(item1, item2) {
        return self.orderBy(item1, item2);
      });
      content.forEach(function(item) {
        sortProperties.forEach(function(sortProperty) {
          Ember.addObserver(item, sortProperty, this, 'contentItemSortPropertyDidChange');
        }, this);
      }, this);
      return Ember.A(content);
    }
    return content;
  }),

  // recieve a set of filterObjects and filter according to them
  filterByProperties: function(filterProperties){
    var content = this.get('content'),
      ret = content.slice(),
      self = this;
    // filter for each filterObject, in order
    filterProperties.forEach(function(filterProp){
      ret = self.filterFunction(filterProp, ret);
    });
    return ret;
  },
  performTypeOfFilters: function (value, itemValue, propertyName){
    if(typeof(itemValue)==='undefined'){
      console.log('The typeof item['+propertyName+'] is undefined');
      return true;
    }
    // string filtering
    else if(typeof(itemValue)==='string'){
      return (itemValue.indexOf(value)>-1);
    }
    // number filtering
    else if(typeof(itemValue)==='number'){
      return (itemValue===value);
    }
    // boolean filtering
    else if(typeof(itemValue)==='boolean'){
      return (itemValue===value);
    }
    // throw error
    else {
      throw new Error('The typeof item['+ propertyName +'] is currently not supported for filtering');
    }
  },
  filterFunction: function(filterProperty, content){
    var self = this,
      propertyName = Ember.get(filterProperty, 'propertyName'),
      values = Ember.getWithDefault(filterProperty, 'values', []),
      and = Ember.getWithDefault(filterProperty, 'and', true);
    // and will be used to determine if an item needs to pass all filter values, or pass just one filter value

    return content.filter(function(item){
      // item.get(propertyName);
      var itemValue = Ember.get(item, propertyName),
        passFilter = false;// set to true so items pass if no filter values are active, otherwise set to false so things have to pass filtering
      // filter for values.@each
      if(and){
        passFilter = values.every(function(value){
          if(typeof(itemValue)==='object' && typeof(itemValue.push)==='function'){
            return itemValue.all(function(itemValueItem){
              return self.performTypeOfFilters(value, itemValueItem, propertyName);
            });
          } else {
            return self.performTypeOfFilters(value, itemValue, propertyName);
          }
        });
      } else {
        passFilter = values.any(function(value){
          if(typeof(itemValue)==='object' && typeof(itemValue.push)==='function'){
            return itemValue.any(function(itemValueItem){
              return self.performTypeOfFilters(value, itemValueItem, propertyName,  and);
            });
          } else {
            return self.performTypeOfFilters(value, itemValue, propertyName,  and);
          }
        });
      }
      return passFilter;
    });
  }
});