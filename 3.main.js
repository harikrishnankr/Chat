(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{112:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(2),i=r(43),p=r(47),c=r(80);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r(51),r(54);var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,r,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=n.call(this,e)).state={goToSignUp:!1,errorMessages:{username:"",password:""}},t.goToSignUp=t.goToSignUp.bind(h(t)),t.schema=Object(c.a)().shape({username:Object(c.b)().required("Enter an email or username"),password:Object(c.b)().required("Enter a password")}),t}return t=u,(r=[{key:"goToSignUp",value:function(){this.setState({goToSignUp:!0})}},{key:"validate",value:function(){var e=this;return this.schema.validate({username:this.username.value,password:this.password.value},{abortEarly:!1}).catch((function(t){var r={};t.inner.forEach((function(e){r[e.path]=e.message})),e.setState(l(l({},e.state),{},{errorMessages:r}))}))}},{key:"login",value:function(){var e=this;this.validate().then((function(){p.a.post({url:"user/authenticate",body:{username:e.username.value,password:e.password.value}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},this.state.goToSignUp?o.a.createElement(a.a,{to:"/sign-up"}):"",o.a.createElement("div",{className:"form-wrapper"},o.a.createElement("div",{className:"logo"}),o.a.createElement("div",{className:"sign-in-form"},o.a.createElement("h2",null,"Sign In"),o.a.createElement("form",{noValidate:!0},o.a.createElement("div",{className:"form-group"},o.a.createElement(i.a,{className:"login-input",placeholder:"Email",autofocus:"true",errorMessage:this.state.errorMessages.username,inputRef:function(t){return e.username=t}})),o.a.createElement("div",{className:"form-group"},o.a.createElement(i.a,{type:"password",className:"login-input",placeholder:"Password",errorMessage:this.state.errorMessages.password,inputRef:function(t){return e.password=t}})),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{className:"c-button primary",type:"submit",onClick:function(){return e.login()}},"Login")),o.a.createElement("div",{className:"button-group"},o.a.createElement("button",{className:"c-button",type:"button",onClick:function(){return e.goToSignUp()}},"Don't have an account?"))))))}}])&&d(t.prototype,r),u}(n.Component);t.default=y},39:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n="https://clack-chat-app.herokuapp.com/",o="send_message"},43:function(e,t,r){"use strict";var n=r(0),o=r.n(n);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r(44);var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(a,e);var t,r,n=c(a);function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n.call(this,e)}return t=a,(r=[{key:"componentDidMount",value:function(){this.props.autofocus&&this._input.focus()}},{key:"render",value:function(){var e=this,t=this.props,r=t.isRequired,n=void 0===r||r,a=t.type,i=void 0===a?"text":a,p=t.errorMessage,c=t.isSuccess,u=t.isWarning,s=(t.isDisabled,t.className),l=t.placeholder,f=(t.autofocus,t.size),d=void 0===f?"large":f,b=t.inputRef,m=["app-input"],h=["input-wrapper",d];return p&&m.push("error"),c&&m.push("success"),u&&m.push("warning"),s&&m.push(s),o.a.createElement("div",{className:"app-input-wrapper"},o.a.createElement("div",{className:h.join(" ")},o.a.createElement("input",{type:i,required:n,className:m.join(" "),ref:function(t){return function(t){b&&b(t),e._input=t}(t)}}),o.a.createElement("span",{className:"placeholder"},l)),p?o.a.createElement("div",{className:"error-message"},o.a.createElement("span",{className:"fa fa-exclamation-circle"}),o.a.createElement("span",{className:"message-text"},p)):"")}}])&&i(t.prototype,r),a}(n.Component);t.a=l},44:function(e,t,r){var n=r(45);"string"==typeof n&&(n=[[e.i,n,""]]);r(36)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},45:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".app-input-wrapper .input-wrapper{position:relative;display:flex;align-items:center;margin:7px;background:#fff}.app-input-wrapper .input-wrapper .placeholder{position:absolute;left:14px;background:#fff;color:#7f7f7f;z-index:1;font-size:14px}.app-input-wrapper .input-wrapper .app-input{height:34px;min-width:100px;width:100%;margin:3px;padding:3px;padding-left:10px;border-radius:4px;border:1px solid #7f7f7f;outline:none;z-index:2;background:transparent}.app-input-wrapper .input-wrapper .app-input:focus+.placeholder,.app-input-wrapper .input-wrapper .app-input:valid+.placeholder{padding:3px;z-index:3;color:#7542F0;font-weight:bold;font-size:14px;top:-7px}.app-input-wrapper .input-wrapper .app-input:focus,.app-input-wrapper .input-wrapper .app-input:valid{border:2px solid #7542F0}.app-input-wrapper .input-wrapper .app-input.success{border:2px solid #0d9e0d !important}.app-input-wrapper .input-wrapper .app-input.success+.placeholder{color:#0d9e0d !important}.app-input-wrapper .input-wrapper .app-input.error{border:2px solid #ea2c2c !important}.app-input-wrapper .input-wrapper .app-input.error+.placeholder{color:#ea2c2c !important}.app-input-wrapper .input-wrapper .app-input.warning{border:2px solid #ff0 !important}.app-input-wrapper .input-wrapper .app-input.warning+.placeholder{color:#ff0 !important}.app-input-wrapper .input-wrapper.small .app-input{height:30px}.app-input-wrapper .error-message{color:#ea2c2c !important;font-size:14px;margin-left:12px;text-align:left}.app-input-wrapper .error-message .message-text{margin-left:4px}\n",""])},47:function(e,t,r){"use strict";var n=r(39);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"getHeader",(function(e){return a(a({},t.commonHeader),e)})),p(this,"callApi",(function(e,r,n,o){return new Promise((function(a,i){return fetch("".concat(t.baseUrl).concat(r),{method:"".concat(e),headers:t.getHeader(o),body:JSON.stringify(n||{})}).then((function(e){e.json?200===e.status?e.json().then((function(e){return a(e)})):e.json().then((function(e){return i(e)})):i({message:"Something went wrong"})}))}))})),this.baseUrl=n.a,this.commonHeader={Accept:"application/json","Content-Type":"application/json"}}var t,r;return t=e,(r=[{key:"get",value:function(e){var t=e.url,r=e.header,n=e.body;return this.callApi("get",t,n,r)}},{key:"post",value:function(e){var t=e.url,r=e.header,n=e.body;return this.callApi("post",t,n,r)}}])&&i(t.prototype,r),e}());t.a=c},51:function(e,t,r){var n=r(52);"string"==typeof n&&(n=[[e.i,n,""]]);r(36)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},52:function(e,t,r){t=e.exports=r(35)(!1);var n=r(63)(r(53));t.push([e.i,".container{display:flex;justify-content:center;align-items:center;min-height:100vh}.container .logo{height:90px;width:90px;background:url("+n+") no-repeat center;margin:0 auto;background-size:100%}.container .form-wrapper{width:300px;text-align:center}.container .form-wrapper .sign-in-form h2{text-align:center}.container .form-wrapper .sign-in-form .button-group{display:flex;justify-content:center}.container .form-wrapper .sign-in-form .button-group button{width:100%}\n",""])},53:function(e,t,r){e.exports=r.p+"67bbb9d241b332616a709e8509f181b1.png"},54:function(e,t,r){var n=r(55);"string"==typeof n&&(n=[[e.i,n,""]]);r(36)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},55:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".c-button{height:36px;background:#fff;border:1px solid #7542F0;border-radius:4px;color:#7542F0;display:inline-block;margin:10px;outline:none;cursor:pointer;min-width:36px}.c-button.gray{border-color:#7f7f7f;color:#919191;background:#f5f4f9}.c-button.primary{background:#7542F0;color:#fff}.c-button.success{border:1px solid #0d9e0d;color:#0d9e0d}.c-button.error{border:1px solid #ea2c2c;color:#ea2c2c}.c-button.warning{border:1px solid #ff0;color:#ff0}\n",""])}}]);