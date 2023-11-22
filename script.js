'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
};

DomElement.prototype.createElement = function() {
   const name = this.selector.slice(1);
   let newElement;

   if (this.selector[0] === '.') {
      newElement = document.createElement('div');
      newElement.classList.add(name);
   }

   if (this.selector[0] === '#') {
      newElement = document.createElement('p');
      newElement.setAttribute('id', name);
   }

   newElement.style.cssText = `
      height: ${this.height}; 
      width: ${this.width}; 
      background: ${this.bg}; 
      font-size: ${this.fontSize}`;
   
   newElement.textContent = 'Это ' + newElement.tagName;

   document.body.append(newElement);
};

const div = new DomElement('.block', '230px', '500px', 'red', '66px');
const div2 = new DomElement('.block2', '300px', '100', 'green', '20px');
const p = new DomElement('#text', '100px', '50px', 'blue', '16px');
const p1 = new DomElement('#text2', '25px', '50px', 'yellow', '12px');


div.createElement();
p.createElement();
div2.createElement();
p1.createElement();