import Ember from 'ember';

export default Ember.Controller.extend({
  dataCentre: Ember.inject.service('data-centre'),
  isGettingData: false,
  init() {
      this._super(...arguments);
      this.set('rows', this.get('dataCentre').getData(0, 15));
  },
  actions: {
    onScrollEnd(){
      var self = this;
      self.set('isGettingData', true);

      // Intentionally put the timeout to see how it works in real time
      Ember.run.later(function(){
        console.log("row length = ", self.rows.length);
        console.log("row length + 10= ", self.rows.length + 10);

        let rows = self.get('dataCentre').getData(self.rows.length, self.rows.length + 10);
        rows.forEach(function(item){
          self.rows.pushObject(item);
          self.set('isGettingData', false);
        });
      }, 500);
    }
  }

});
