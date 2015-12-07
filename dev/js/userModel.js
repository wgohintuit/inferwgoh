// Define a Student Model with defaults and an initializer
var Student = Backbone.Model.extend({
  defaults: {
    college: "CU Denver",
    state: "Colorado"
  },
  initialize: function(){
    console.log("Attributes: " + JSON.stringify(this.attributes));
  }
});