import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['searchFor'],
  // title: null,

  filteredPost: Ember.computed('searchFor', function(){
    let searchFor = this.searchFor;
    let posts = this.get('model');

    if(searchFor) {
        let searchedPost = posts.filter(function(post) {
          return post.get('title').toLowerCase().indexOf(searchFor.toLowerCase()) !== -1;
        });

        return searchedPost;
    } else {
      return posts;
    }
  }),

  actions: {
    addPost: function(){
      var postText = this.get('postText');
      var title = this.get('title');

      if(Ember.isBlank(title) || Ember.isBlank(postText)) {
        alert("Title and Content fields are mandatory!. Space are not valid.");
        return;
      }

      var post = this.store.createRecord('post', {
        id: Math.random(),
        title: title,
        content: postText
      });

      post.save();
      this.set('postText', '');
      this.set('title', '');
    },

    removePost: function(id){
      this.store.findRecord('post', id).then(function(post){
        post.destroyRecord();
      });
    },

    clearAll: function(){
      this.store.unloadAll();
    }

  }
});
