import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSelectingItems: function(index, isFrom) {
      let tempObj = this.list[index];
      Ember.set(tempObj, "isSelected", !tempObj.isSelected);
      this.onSelectingItems(isFrom, this.list);
    }
  }
});
