import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let infiniteField = this.$('#infinite-field')[0];
    infiniteField.addEventListener('scroll', this.onScroll.bind(this, infiniteField));
  },
  //
  onScroll(infiniteField) {
    if (infiniteField.scrollTop + infiniteField.clientHeight >= infiniteField.scrollHeight) {
      this.onScrollEnd();
    }
  }
});
