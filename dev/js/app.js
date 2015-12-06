require(["itemModel", "itemView"], function(ItemModel, ItemView){

  var broccoli = new ItemModel({img_src: 'broccoli.jpg', img_alt: 'broccoli', caption: 'Delicious broccoli'});
  var steak = new ItemModel({img_src: 'steak.png', img_alt: 'steak', caption: 'Juicy Steak'});
  var tofu = new ItemModel({img_src: 'tofu.jpg', img_alt: 'tofu', caption: 'Seared Tofu'});

  broccoli_view = new ItemView({model: [broccoli, steak, tofu]});

  broccoli_view.render();
});