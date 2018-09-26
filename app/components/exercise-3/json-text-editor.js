import Ember from 'ember';

export default Ember.Component.extend({
  errorMsg: '',
  masterObject: {
    editableJson: {},
    updatedJson: ""
  },
  jsonText: '{"sample": "text"}',
  updateJsonText: function(){
    try {
       let json = JSON.parse(this.jsonText);
       Ember.set(this.masterObject, 'editableJson', json);
       this.set('errorMsg', "");
    } catch (error) {
      this.set('errorMsg', error);
    }
  }.observes('jsonText').on('init'),

  getUpdatedJson: function(){
    Ember.set(this.masterObject, 'updatedJson', JSON.stringify(this.masterObject.editableJson, undefined, 2));
  }.observes('masterObject.editableJson')

});
