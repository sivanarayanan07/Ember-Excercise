import Ember from 'ember';

export default Ember.Service.extend({
  data: null,
  init() {
    this._super(...arguments);
    this.set('data', this.loadData());
  },

  loadData() {
    let data = [];
    for(let index = 1; index <= 10000; index++)
    {
      data.pushObject('Row ' + index)
    }

    return data;
  },

  getData(offset, limit){
    return this.data.slice(offset, limit);
  }

});
