(this["webpackJsonpionic-app"]=this["webpackJsonpionic-app"]||[]).push([[43],{90:function(o,t,a){"use strict";a.r(t),a.d(t,"ion_backdrop",(function(){return c}));var n=a(13),i=a(14),r=a(29),c=function(){function o(o){Object(n.o)(this,o),this.ionBackdropTap=Object(n.g)(this,"ionBackdropTap",7),this.blocker=r.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return o.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},o.prototype.disconnectedCallback=function(){this.blocker.unblock()},o.prototype.onMouseDown=function(o){this.emitTap(o)},o.prototype.emitTap=function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},o.prototype.render=function(){var o,t=Object(i.b)(this);return Object(n.j)(n.c,{tabindex:"-1","aria-hidden":"true",class:(o={},o[t]=!0,o["backdrop-hide"]=!this.visible,o["backdrop-no-tappable"]=!this.tappable,o)})},o}();c.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
//# sourceMappingURL=43.1acaf27e.chunk.js.map