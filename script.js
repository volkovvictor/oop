'use strict';

document.addEventListener('DOMContentLoaded', function() {
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
         font-size: ${this.fontSize};
         position: absolute`;
      
      newElement.textContent = 'Это ' + newElement.tagName;

      document.body.append(newElement);
   };
   
   const div = new DomElement('.block', '100px', '100px', 'red', '16px');
   
   div.createElement();

   const sqrt = document.querySelector(div.selector);

   window.addEventListener('keydown', function(e) {
      if (e.key === "ArrowUp") {
         sqrt.style.top = +sqrt.style.top.replace('px', '') - 10 + 'px';
      }
      if (e.key === "ArrowDown") {
         sqrt.style.top = +sqrt.style.top.replace('px', '') + 10 + 'px';
      }
      if (e.key === "ArrowLeft") {
         sqrt.style.left = +sqrt.style.left.replace('px', '') - 10 + 'px';
      }
      if (e.key === "ArrowRight") {
         sqrt.style.left = +sqrt.style.left.replace('px', '') + 10 + 'px';
      }
   });

});