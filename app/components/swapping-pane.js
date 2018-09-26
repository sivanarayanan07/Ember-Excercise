import Ember from 'ember';

export default Ember.Component.extend({
  pane: Ember.inject.service('swapping-pane'),
  list: null,

  init() {
    this._super(...arguments);
    this.set('list', this.get('pane').getAll());
  },


  isThereAnythingToMove: function(data) {
    return data.isAny('isSelected', true);
  },

  actions: {
    updateSelectedItems: function(isFrom, updatedData) {
      if(isFrom.toLowerCase() === "panea") {
        Ember.set(this.list,'paneA', updatedData);
      } else {
        Ember.set(this.list, 'paneB', updatedData);
      }
    },

    moveToRight: function(){
      let paneData = this.list.paneA;
      if(!this.isThereAnythingToMove(paneData)) {
        alert('Please select row/rows from PaneA and move to right.');
        return;
      }

      let shouldBeMoved = paneData.filter(function(item) {
        return item.isSelected === true;
      });

      this.get('pane').moveToRight(shouldBeMoved);
    },

    moveToLeft: function(){
      let paneData = this.list.paneB;
      if(!this.isThereAnythingToMove(paneData)) {
        alert('Please select row/rows from PaneA and move to right.');
        return;
      }

      let shouldBeMoved = paneData.filter(function(item) {
        return item.isSelected === true;
      });

      this.get('pane').moveToLeft(shouldBeMoved);
    },

    moveAll: function(to) {
      this.get('pane').moveAll(to);
    }

  }
});
