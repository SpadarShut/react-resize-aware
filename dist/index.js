var e=require("react"),t={display:"block",opacity:0,position:"absolute",top:0,left:0,height:"100%",width:"100%",overflow:"hidden",pointerEvents:"none",zIndex:-1},n=function(n){var r=n.onResize,i=e.useRef();return function(t,n){e.useEffect(function(){var e=t.current&&t.current.contentDocument&&t.current.contentDocument.defaultView;return n(),e&&e.addEventListener("resize",n),function(){e&&"function"==typeof e.removeEventListener&&e.removeEventListener("resize",n)}},[])}(i,function(){return r(i)}),e.createElement("iframe",{style:t,src:"about:blank",ref:i,"aria-hidden":!0,"aria-label":"resize-listener",tabIndex:-1,frameBorder:"0"})},r=function(e){return{width:null!=e?e.offsetWidth:null,height:null!=e?e.offsetHeight:null}};module.exports=function(t){void 0===t&&(t=r);var i=e.useState({width:null,height:null}),u=i[0],o=i[1],l=e.useCallback(function(e){return o(t(e.current))},[t]);return[e.useMemo(function(){return e.createElement(n,{onResize:l})},[l]),u]};
//# sourceMappingURL=index.js.map
