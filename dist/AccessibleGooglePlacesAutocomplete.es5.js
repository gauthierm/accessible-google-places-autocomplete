module.exports=function(t){var e={};function s(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(o,r,function(e){return t[e]}.bind(null,r));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])};return function(e,s){function o(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}(),r=this&&this.__assign||Object.assign||function(t){for(var e,s=1,o=arguments.length;s<o;s++)for(var r in e=arguments[s])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t};Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s(2),u=s(3),a=s(4);function c(t,e){var s=a({addressAutoComplete:{noResults:"Address not found",statusNoResults:"No matching addresses",statusResults:"%{smart_count} matching address is available |||| %{smart_count} matching addresses are available",statusSelectedOption:"You’ve selected %{option}"}},t);if(!e)return s;if(!s)return t;void 0!==e.smart_count&&(s=s.split("||||")[1===e.smart_count?0:1].trim());return s.replace(/%\{(.*?)\}/g,function(t,s){return void 0===e[s]?t:"string"==typeof e[s]?e[s].replace(/\$/g,"$$"):e[s]})}var p=function(t){function e(e){var s=t.call(this,e)||this;return s.onAutoCompleteSelect=function(t){s.predictions.forEach(function(e){e.description===t&&new google.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:e.place_id},function(t,e){"OK"===e&&s.props.onConfirm(t)})})},s.state={apiLoaded:!1},s.autocompleteService=null,s.predictions=[],s.currentStatusMessage="",s.onApiLoad=s.onApiLoad.bind(s),s.getSuggestions=s.getSuggestions.bind(s),s.getNoResultsMessage=s.getNoResultsMessage.bind(s),s.getStatusResultsMessage=s.getStatusResultsMessage.bind(s),s.getStatusSelectedOptionMessage=s.getStatusSelectedOptionMessage.bind(s),s.getStatusNoResultsMessage=s.getStatusNoResultsMessage.bind(s),s}return o(e,t),e.prototype.onApiLoad=function(){this.setState(function(){return{apiLoaded:!0}}),this.autocompleteService=new google.maps.places.AutocompleteService},e.prototype.getNoResultsMessage=function(){var t=this.props.t;return(void 0===t?c:t)("addressAutoComplete.noResults")},e.prototype.getStatusSelectedOptionMessage=function(t){var e=this.props.t;return(void 0===e?c:e)("addressAutoComplete.statusSelectedOption",{option:t})},e.prototype.getStatusNoResultsMessage=function(){var t=this.props.t,e=(void 0===t?c:t)("addressAutoComplete.statusNoResults");return this.currentStatusMessage===e?"":(this.currentStatusMessage=e,e)},e.prototype.getStatusResultsMessage=function(t,e){var s=this.props.t,o=void 0===s?c:s;if(e)return"";var r=o("addressAutoComplete.statusResults",{smart_count:t});return this.currentStatusMessage===r?"":(this.currentStatusMessage=r,r)},e.prototype.getSuggestions=function(t,e){var s=this,o=this.props.googlePlacesOptions,n=r({},void 0===o?{}:o,{input:t});this.autocompleteService.getPlacePredictions(n,function(t,o){if(o===google.maps.places.PlacesServiceStatus.OK){s.predictions=t;var r=t.map(function(t){return t.description});e(r)}else e([])})},e.prototype.render=function(){var t=this.props,e=t.googlePlacesApiKey,s=t.id,o=t.minLength,r=void 0===o?4:o,a=this.state.apiLoaded,c="https://maps.googleapis.com/maps/api/js?key="+encodeURIComponent(e)+"&libraries=places";return a?n.createElement(u.default,{id:s,source:this.getSuggestions,minLength:r,required:!0,displayMenu:"overlay",tNoResults:this.getNoResultsMessage,tStatusSelectedOption:this.getStatusSelectedOptionMessage,tStatusNoResults:this.getStatusNoResultsMessage,tStatusResults:this.getStatusResultsMessage,onConfirm:this.onAutoCompleteSelect}):n.createElement(i,{url:c,onLoad:this.onApiLoad})},e}(n.Component);e.AccessibleGooglePlacesAutocomplete=p},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-load-script")},function(t,e){t.exports=require("accessible-autocomplete/react")},function(t,e){t.exports=require("get-value")}]);
//# sourceMappingURL=AccessibleGooglePlacesAutocomplete.es5.js.map