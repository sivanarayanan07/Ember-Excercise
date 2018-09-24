import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr("string"),
  content: DS.attr("string"),
  // name: DS.attr("string", {
  //   default: function(){
  //     return "Siva"
  //   }
  // }),
  created_at: DS.attr("string", {
    default: function(){
      return new Date().toDateString();
    }
  })
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      // name: "Anonymous",
      title: "This is a sample post",
      content: "Hello, This is a sample post",
      created_at: "21-09-2018 00:00:"
    }
  ]
});

export default Post;
