# textToImg
Convert text with font specification to image format

![](https://rezanehzati.com/text2img/img/text2img-demo.png)

How to use　

```javascript
var optionsParameter = {
      width: 700,
      height: 220,
      paddingX: 20,
      paddingY: 100,
      canvasTargetDomId: "canvasTargetDom",
      font: ["50px", "Homemade Apple"],
      color: "black",
      textString: 'reza nehzati',
      customFont: {
        name: "Homemade Apple",
        url:
          "https://fonts.gstatic.com/s/homemadeapple/v10/Qw3EZQFXECDrI2q789EKQZJob0x6XH0.ttf"
      }
    };
    let textSignature =  new TextSignature(optionsParameter);
```

HTML target element

```html
<div id="canvasTargetDom" />
```

