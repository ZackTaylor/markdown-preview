function Controller() {
}

Controller.prototype.updateInput = function(model, text) {
  model.input = text;
  model.transfrom();
};

$(function() {
    var model = new Model();
    var view = new View();
    var controller = new Controller();

    $("#input").keyup(function(){
      var inputValue = $(this).val();
      controller.updateInput(model, inputValue);
      view.showPreview(model.preview);
    });
});
