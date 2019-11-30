var textToImg = {};

textToImg = function(options) {
  var self = this;
  self.imageData = null;
  this.init = function() {
    var junction_font = new FontFace(
      options.customFont.name,
      `url(${options.customFont.url})`
    );
    junction_font
      .load()
      .then(function(loaded_face) {
        document.fonts.add(loaded_face);
        self.generateImage(options);
      })
      .catch(function(error) {
        throw "textToImg: parameter font is not valid";
      });
  };
  this.formatInput = function(options) {
    if (!options || options == undefined) {
      throw "textToImg: parameter is not valid";
    }
    if (!options.font) {
      throw "textToImg: parameter font is required";
    }
    if (!options.textString) {
      throw "textToImg: parameter textString is required";
    }
    if (typeof options.font === "string") {
      return options;
    }
    options.font = options.font || ["12px", "Arial"];
    options.font = options.font.join(" ");
    options.fillStyle = options.color || "black";
    options.textString = options.textString || "textToImg !";
    options.paddingX = options.paddingX || 0;
    options.paddingY = options.paddingY || 0;

    return options;
  };

  this.generateImage = function(options) {
    options = this.formatInput(options);
    var uniquetime = new Date().getUTCMilliseconds();
    var canvasSelectorDom = document.createElement("CANVAS");
    canvasSelectorDom.setAttribute("width", options.width);
    canvasSelectorDom.setAttribute("height", options.height);
    canvasSelectorDom.setAttribute("id", "textToImg-" + uniquetime);
    var context = canvasSelectorDom.getContext("2d");
    context.font = options.font;
    context.fillStyle = options.fillStyle;
    context.fillText(options.textString, options.paddingX, options.paddingY);

    var dataUrl = canvasSelectorDom.toDataURL();
    self.imageData = dataUrl;

    var img = document.createElement("img");
    img.setAttribute("src", dataUrl);
    img.setAttribute("textToImg-timestamp", uniquetime);
    img.setAttribute("id", "textToImg-" + uniquetime);

    if (options.canvasTargetDomId) {
      let targetDom = document.getElementById(options.canvasTargetDomId);

      targetDom.innerHTML = "";
      targetDom.appendChild(img);
    } else {
      window.open(dataUrl, "textToImg image", "width=600, height=200");
    }
  };
  this.getImageData = function() {
    return self.imageData;
  };
  this.init();
};

module.exports = textToImg;
