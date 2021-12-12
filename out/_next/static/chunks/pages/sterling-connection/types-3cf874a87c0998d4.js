(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{2855:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sterling-connection/types",function(){return t(1807)}])},1807:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(5893),r=t(620),s=t(3805),c=t(7845),o=t(1151);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}function l(e){var n=void 0===e?{}:e,t=function(){var e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h4:"h4",ul:"ul",li:"li",pre:"pre",a:"a"},(0,o.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{children:"Types"}),"\n",(0,i.jsxs)(e.p,{children:["The TypeScript types listed on this page describe the shape of some common\nelements used in messages sent between the ",(0,i.jsx)(e.code,{children:"sterling-connection"})," middleware and\ndata providers."]}),"\n",(0,i.jsx)(e.h2,{children:(0,i.jsx)(e.code,{children:"Button"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"Button"})," type describes a button displayed in the Sterling interface."]}),"\n",(0,i.jsx)(e.h4,{children:"Fields"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"id"})," - A unique identifier."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"text"})," - The string to display in the button."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{children:"Types"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"{\n  id: string;\n  text: string;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{children:(0,i.jsx)(e.code,{children:"Datum"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"Datum"})," type describes an individual datum displayed in Sterling, along with\nsome metadata that describes a few choice UI components that are associated with\nthat datum."]}),"\n",(0,i.jsx)(e.h4,{children:"Fields"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"id"})," - A unique identifier."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"data"})," - The raw data, in a supported ",(0,i.jsx)(e.a,{href:"./formats",children:"format"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["(optional) ",(0,i.jsx)(e.code,{children:"actions"})," - An array of buttons that will be displayed with this\ndatum. When one of these buttons is clicked, an ",(0,i.jsx)(e.a,{href:"./send#action",children:(0,i.jsx)(e.code,{children:"action"})}),"\nmessage will be sent to the provider with the button's ",(0,i.jsx)(e.code,{children:"id"})," as payload. No\nactions are provided by default."]}),"\n",(0,i.jsxs)(e.li,{children:["(optional) ",(0,i.jsx)(e.code,{children:"evaluator"})," - A boolean indicating whether REPL functionality is\navailable for this datum. Defaults to false."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{children:"Types"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"{\n  id: string;\n  data: string;\n  actions?: Button[];\n  evaluator?: boolean;\n}\n"})}),"\n",(0,i.jsx)(e.h2,{children:(0,i.jsx)(e.code,{children:"DatumMeta"})}),"\n",(0,i.jsxs)(e.p,{children:["This type is identical to the ",(0,i.jsx)(e.a,{href:"#datum",children:(0,i.jsx)(e.code,{children:"Datum"})})," type with the exception of the\n",(0,i.jsx)(e.code,{children:"data"})," field, which is omitted."]}),"\n",(0,i.jsx)(e.h4,{children:"Types"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"Omit<Datum, 'data'>;\n"})})]})},r=Object.assign({},(0,o.ah)(),n.components).wrapper;return r?(0,i.jsx)(r,d({},n,{children:(0,i.jsx)(t,{})})):t()}var h=(0,i.jsx)(l,{});function u(e){return(0,s.withSSG)((0,r.Z)({filename:"types.mdx",route:"/sterling-connection/types",meta:{},pageMap:[{name:"index",route:"/",frontMatter:{title:"Sterling Docs",headeronly:!0}},{name:"meta.json",meta:{index:"Introduction","sterling-connection":"Sterling Connection"}},{name:"sterling-connection",children:[{name:"formats",route:"/sterling-connection/formats"},{name:"introduction",route:"/sterling-connection/introduction"},{name:"meta.json",meta:{introduction:"Introduction",receive:"Provider -> Sterling",send:"Sterling -> Provider",types:"Types",formats:"Data Formats"}},{name:"receive",route:"/sterling-connection/receive"},{name:"send",route:"/sterling-connection/send"},{name:"types",route:"/sterling-connection/types"}],route:"/sterling-connection"}]},c.Z))(d({},e,{children:h}))}}},function(e){e.O(0,[284,830,774,888,179],(function(){return n=2855,e(e.s=n);var n}));var n=e.O();_N_E=n}]);