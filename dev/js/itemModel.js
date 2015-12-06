define([], function(){
    
  // Define an Item Model
  var ItemModel = Backbone.Model.extend({
    defaults: {
      img_src: 'placeholder.gif'
    },
  });

  return ItemModel;
});