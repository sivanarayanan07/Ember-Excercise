import Ember from 'ember';

export default Ember.Service.extend({
  paneData: null,
  init(){
    this._super(...arguments);
    this.set('paneData', {});
    this.set('paneData.paneA', [{id:1, data:"Content 1 in PaneA", isSelected: false},{id:2, data:"Content 2 in PaneA", isSelected: false}]);
    this.set('paneData.paneB', [{id:1, data:"Content 1 in PaneB", isSelected: false}, {id:2, data:"Content 2 in PaneB", isSelected: false}]);
  },

  getAll: function(){
      return this.get('paneData');
  },

  moveToRight: function(items) {
    var tempObj = this.get('paneData.paneB');
    items.forEach(function(item){
      if(item.isSelected) {
        Ember.set(item, 'isSelected', false);
      }

      tempObj.pushObject(item);
    });

    this.removeItems(items, "paneA");
  },

  moveToLeft: function(items) {
    var tempObj = this.get('paneData.paneA');
    items.forEach(function(item){
      if(item.isSelected) {
        Ember.set(item, 'isSelected', false);
      }

      tempObj.pushObject(item);
    });

    this.removeItems(items, "paneB");
  },

  moveAll: function(to){
    if(to === 'left') {
      this.moveToLeft(this.get('paneData.paneB'));
    } else {
      this.moveToRight(this.get('paneData.paneA'));
    }
  },

  removeItems: function(items, isFrom) {
    let temp = this.get('paneData');

    if(items.length === temp[isFrom].length){
      Ember.set(temp, isFrom, []);
    } else {
      items.forEach(function(item) {
        Ember.get(temp, isFrom).removeObject(item);
      });
    }
  }

});
