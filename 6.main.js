(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(21),u=n(64),a=n.n(u),s=n(20),i=0,f=n(39);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),O(d(t=r.call(this,e)),"updateMessage",(function(e){t.setState(b(b({},t.state),{},{message:e}))})),O(d(t),"sendMessage",(function(){t.socket.emit(f.b,t.state.message),t.setState({message:""})})),t.state={message:""},t.socket=a()(f.a),t.initListeners(),t}return t=c,(n=[{key:"initListeners",value:function(){var e=this;this.socket.on(f.b,(function(t){e.props.sendMessage(t)}))}},{key:"render",value:function(){var e=this,t=this.props.messages;return o.a.createElement("div",null,o.a.createElement("div",null,t.map((function(e){return o.a.createElement("div",{key:"chat-".concat(e.id)},e.message)}))),o.a.createElement("div",null,o.a.createElement("input",{onChange:function(t){return e.updateMessage(t.target.value)},value:this.state.message}),o.a.createElement("button",{className:"add-todo",onClick:function(){return e.sendMessage()}},"Send Message")))}}])&&y(t.prototype,n),c}(r.Component);t.default=Object(c.b)((function(e){return{messages:e.chat.messageList}}),{sendMessage:function(e){return{type:s.a,payload:{id:++i,message:e}}}})(v)},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="https://clack-chat-app.herokuapp.com/",o="send_message"},74:function(e,t){}}]);