"use strict";

class Rectangle {
  constructor(height, width) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps(){
    console.log(`Text ${this.text}, ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'Red');
div.showMyProps();

console.log(div.calcArea());


const square = new Rectangle(1000, 1000);
console.log(square.calcArea());
