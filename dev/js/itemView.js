define([], function(){
  // Define an Item View
  var ItemView = Backbone.View.extend({
    el: '.target',
    template: _.template($('#item-tpl').html()),

    render: function(){
      for (var i = 0; i < this.model.length; i++){
        var item_tpl = this.template(this.model[i].toJSON());
        this.$el.append(item_tpl);
      }
      return this;
    }
  });

  return ItemView;
});