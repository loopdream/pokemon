(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,e,t){n.exports=t.p+"static/media/pokemon-logo.3cfd5e85.svg"},19:function(n,e,t){n.exports=t(32)},25:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(3),i=t.n(o),c=(t(25),t(4)),u=t.n(c),l=t(9),s=t(10),m=t(11),p=t(16),f=t(12),d=t(17),h=t(13),v=t.n(h),g=t(1),b=t(2);function w(){var n=Object(g.a)(["\n  color: white;\n  font-style: normal;\n  text-shadow: 1px 1px 1px #4d4b8c; \n  margin-bottom: 0;\n"]);return w=function(){return n},n}function x(){var n=Object(g.a)(["\n  width: 100%;\n  display: block;\n"]);return x=function(){return n},n}function k(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 20px;\n  min-height: 20vh;\n  > div {\n    /* width: 90px;\n    transition: width .2s ease-in-out; */\n    img:first-child {\n      display: none;\n    }\n  }\n  &:hover {\n    cursor: pointer;\n    > div {\n      /* width: 100px; */\n      img:first-child {\n        display: block;\n      }\n      img:last-child {\n        display: none;\n      }\n    }\n    img {\n      \n    }\n    h3 {\n      text-shadow: 1px 1px 1px #434354; \n    }\n  }  \n"]);return k=function(){return n},n}function j(){var n=Object(g.a)(["\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return j=function(){return n},n}function y(){var n=Object(g.a)([""]);return y=function(){return n},n}function O(){var n=Object(g.a)(["\n  width: 90%;\n  margin: 0 auto;\n"]);return O=function(){return n},n}function E(){var n=Object(g.a)(["\n  width: 100%;\n  text-align: center;\n  padding: 3rem 0; \n"]);return E=function(){return n},n}function I(){var n=Object(g.a)(["\n  /* height: 100%; */\n"]);return I=function(){return n},n}var P=b.a.div(I()),_=b.a.header(E()),z=b.a.main(O()),B=b.a.img(y()),C=b.a.ul(j()),J=b.a.li(k()),W=b.a.img(x()),A=b.a.h3(w()),D="https://pokeapi.co/api/v2",M=function(n){function e(n){var t;return Object(s.a)(this,e),(t=Object(p.a)(this,Object(f.a)(e).call(this,n))).getPokemon=Object(l.a)(u.a.mark(function n(){var e,a,r,o,i,c,l,s=arguments;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:20,a=s.length>1&&void 0!==s[1]?s[1]:20,n.next=4,fetch("".concat(D,"/pokemon/?offset=").concat(e,"0&limit=").concat(a)).then(function(n){return n.json()});case 4:return r=n.sent,o=r.results,i=o.reduce(function(n,e){var t=e.url;return n.push(fetch(t).then(function(n){return n.json()})),n},[]),n.next=9,Promise.all(i);case 9:c=n.sent,l=c.map(function(n){var e=n.name,t=n.base_experience,a=n.sprites;return{name:e,experience:t,frontImage:a.front_default,backImage:a.back_default}}),t.setState({pokemon:l});case 12:case"end":return n.stop()}},n)})),t.capitalize=function(n){return n.charAt(0).toUpperCase()+n.slice(1)},t.state={pokemon:[]},t}return Object(d.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){this.getPokemon()}},{key:"render",value:function(){var n=this;return r.a.createElement(P,null,r.a.createElement(_,null,r.a.createElement(B,{src:v.a,alt:"logo"})),r.a.createElement(z,null,r.a.createElement(C,null,this.state.pokemon.map(function(e){var t=e.name,a=e.frontImage,o=e.backImage;return r.a.createElement(J,{key:t},r.a.createElement("div",null,r.a.createElement(W,{src:a,alt:"front avatar"}),r.a.createElement(W,{src:o,alt:"back avatar"})),r.a.createElement(A,null,n.capitalize(t)))}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.00055e74.chunk.js.map