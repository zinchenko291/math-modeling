"use strict";function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,e=function(){};return{s:e,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return a=r.done,r},e:function(r){i=!0,o=r},f:function(){try{a||null==t.return||t.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Map"===(t="Object"===t&&r.constructor?r.constructor.name:t)||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function onEntry(r){r.forEach(function(r){r.isIntersecting&&r.target.classList.add("element-show")})}var _step,options={threshold:[.3]},observer=new IntersectionObserver(onEntry,options),elements=document.querySelectorAll(".element-animation"),_iterator=_createForOfIteratorHelper(elements);try{for(_iterator.s();!(_step=_iterator.n()).done;){var elm=_step.value;observer.observe(elm)}}catch(r){_iterator.e(r)}finally{_iterator.f()}
//# sourceMappingURL=animation.js.map
