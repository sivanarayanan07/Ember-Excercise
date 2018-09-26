import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  pane: Ember.inject.service('swapping-pane'),
  model() {
    return this.get('pane').getAll()
  }
});
