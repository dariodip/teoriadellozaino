/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-touchevents-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */(function(e,t){/*!
{
  "name": "Touch Events",
  "property": "touchevents",
  "caniuse" : "touch",
  "tags": ["media", "attribute"],
  "notes": [{
    "name": "Touch Events spec",
    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
  }],
  "warnings": [
    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
  ],
  "knownBugs": [
    "False-positive on some configurations of Nokia N900",
    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
  ]
}
!*/var s,o=[],i=[];define(["tests"],function(e){var t={_version:"__VERSION__",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(t,n,s){e.push({name:t,fn:n,options:s})},addAsyncTest:function(t){e.push({name:null,fn:t})}};return t}),define(function(){function e(e,t){return typeof e===t}return e}),define(["tests","Modernizr","classes","is"],function(e,t,n,s){function o(){var o,i,a,r,c,l,d,u;for(u in e)if(e.hasOwnProperty(u)){if(a=[],o=e[u],o.name&&(a.push(o.name.toLowerCase()),o.options&&o.options.aliases&&o.options.aliases.length))for(r=0;r<o.options.aliases.length;r++)a.push(o.options.aliases[r].toLowerCase());c=s(o.fn,"function")?o.fn():o.fn;for(l=0;l<a.length;l++)d=a[l],i=d.split("."),i.length===1?t[i[0]]=c:((!t[i[0]]||t[i[0]]&&!(t[i[0]]instanceof Boolean))&&(t[i[0]]=new Boolean(t[i[0]])),t[i[0]][i[1]]=c),n.push((c?"":"no-")+i.join("-"))}}return o}),define(function(){var e=t.documentElement;return e}),define(["docElement"],function(e){var t=e.nodeName.toLowerCase()==="svg";return t}),define(["Modernizr","docElement","isSVG"],function(e,t,n){function s(s){var a,o=t.className,i=e._config.classPrefix||"";n&&(o=o.baseVal),e._config.enableJSClass&&(a=new RegExp("(^|\\s)"+i+"no-js(\\s|$)"),o=o.replace(a,"$1"+i+"js$2")),e._config.enableClasses&&(s.length>0&&(o+=" "+i+s.join(" "+i)),n?t.className.baseVal=o:t.className=o)}return s}),define(["ModernizrProto"],function(e){var t=e._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];return e._prefixes=t,t}),define(["isSVG"],function(e){function n(){return typeof t.createElement!="function"?t.createElement(arguments[0]):e?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}return n}),define(["createElement","isSVG"],function(e,n){function s(){var s=t.body;return s||(s=e(n?"svg":"body"),s.fake=!0),s}return s}),define(["ModernizrProto","docElement","createElement","getBody"],function(e,n,s,o){function i(e,i,a,r){var l,h,m,f,u="modernizr",d=s("div"),c=o();if(parseInt(a,10))for(;a--;)h=s("div"),h.id=r?r[a]:u+(a+1),d.appendChild(h);return l=s("style"),l.type="text/css",l.id="s"+u,(c.fake?c:d).appendChild(l),c.appendChild(d),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(t.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=n.style.overflow,n.style.overflow="hidden",n.appendChild(c)),m=i(d,e),c.fake&&c.parentNode?(c.parentNode.removeChild(c),n.style.overflow=f,n.offsetHeight):d.parentNode.removeChild(d),!!m}return i}),define(["ModernizrProto","injectElementWithStyles"],function(e,t){var n=e.testStyles=t;return n}),Modernizr.addTest("touchevents",function(){if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var n,s=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(s,function(e){n=e.offsetTop===9})}return n}),testRunner(),setClasses(o),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(s=0;s<Modernizr._q.length;s++)Modernizr._q[s]();e.Modernizr=Modernizr})(window,document)