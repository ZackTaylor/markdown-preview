function Model() {
  this.input = "";
  this.preview = "";
  this.matchers = {
    "**": {
      regex: /(\*\*)/ig,
      element: "strong"
    },
    "*": {
      regex: /(\*)/ig,
      element: "i"
    },
    "_": {
      regex: /(\_)/,
      element: "i"
  }
  };
}

Model.prototype.transfrom = function functionName() {
  this.preview = this.mark();
};

Model.prototype.mark = function() {
  // var bolded = this.generateMarkup(this.input, 'strong', this.matchers.bold);
  preview = this.input;
  for (var markupItem in this.matchers) {
    preview = this.generateMarkup(preview, markupItem, this.matchers[markupItem]);
  }
  return preview;
};

Model.prototype.generateMarkup = function(string, searchFor, matchObject) {
  var markupArray = string.split(matchObject.regex);
  var count = 0;

  markupArray.forEach(function(item) {
    var tag = ((count % 2) === 0) ? "<" + matchObject.element + ">" : "</" + matchObject.element + ">";
    if (item == searchFor) {
      markupArray[markupArray.indexOf(item)] = tag;
      count++;
    }
  });
  return markupArray.join("");
};
