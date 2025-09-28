import{$ as J1,A as u2,Aa as t4,D as j1,E as G1,F as V1,G as $1,H as l2,Ha as m4,K as B,L as k,M as p2,Ma as G2,N as K1,O as O2,Pa as z4,R as d2,Ra as u4,S as Y1,T as X1,U as Q1,V as e2,W as Q,X as r2,Y as M2,a as _1,aa as Z1,b as D1,ba as c4,c as E1,ca as L2,d as B1,da as U2,e as R2,ea as W2,f as R1,g as I1,j as H1,ja as q2,k as O1,ka as a4,l as U1,la as l4,m as W1,na as e4,o as q1,oa as r4,pa as s4,qa as i4,r as P,s as w,sa as j2,ta as n4,ua as R,v as h,va as x,x as I2,y as H2,ya as o4,za as f4}from"./chunk-ZHESTMHB.js";var n0={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},p4=n0;function Z2(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,l=Array(e);a<e;a++)l[a]=c[a];return l}function o0(c){if(Array.isArray(c))return c}function f0(c){if(Array.isArray(c))return Z2(c)}function t0(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function d4(c,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,$4(l.key),l)}}function m0(c,e,a){return e&&d4(c.prototype,e),a&&d4(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function g2(c,e){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=p1(c))||e&&c&&typeof c.length=="number"){a&&(c=a);var l=0,r=function(){};return{s:r,n:function(){return l>=c.length?{done:!0}:{done:!1,value:c[l++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var o=a.next();return i=o.done,o},e:function(o){n=!0,s=o},f:function(){try{i||a.return==null||a.return()}finally{if(n)throw s}}}}function d(c,e,a){return(e=$4(e))in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function z0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function u0(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var l,r,s,i,n=[],o=!0,t=!1;try{if(s=(a=a.call(c)).next,e===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=s.call(a)).done)&&(n.push(l.value),n.length!==e);o=!0);}catch(z){t=!0,r=z}finally{try{if(!o&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(t)throw r}}return n}}function p0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M4(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);e&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,l)}return a}function f(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?M4(Object(a),!0).forEach(function(l){d(c,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):M4(Object(a)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(a,l))})}return c}function y2(c,e){return o0(c)||u0(c,e)||p1(c,e)||p0()}function F(c){return f0(c)||z0(c)||p1(c)||d0()}function M0(c,e){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var l=a.call(c,e||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function $4(c){var e=M0(c,"string");return typeof e=="symbol"?e:e+""}function S2(c){"@babel/helpers - typeof";return S2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S2(c)}function p1(c,e){if(c){if(typeof c=="string")return Z2(c,e);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Z2(c,e):void 0}}var L4=function(){},d1={},K4={},Y4=null,X4={mark:L4,measure:L4};try{typeof window<"u"&&(d1=window),typeof document<"u"&&(K4=document),typeof MutationObserver<"u"&&(Y4=MutationObserver),typeof performance<"u"&&(X4=performance)}catch{}var L0=d1.navigator||{},v4=L0.userAgent,h4=v4===void 0?"":v4,W=d1,L=K4,g4=Y4,v2=X4,R5=!!W.document,O=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",Q4=~h4.indexOf("MSIE")||~h4.indexOf("Trident/"),V2,v0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,h0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,J4={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},g0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Z4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],S="classic",f2="duotone",c3="sharp",a3="sharp-duotone",l3="chisel",e3="etch",r3="jelly",s3="jelly-duo",i3="jelly-fill",n3="notdog",o3="notdog-duo",f3="slab",t3="slab-press",m3="thumbprint",z3="whiteboard",C0="Classic",x0="Duotone",S0="Sharp",b0="Sharp Duotone",N0="Chisel",y0="Etch",w0="Jelly",k0="Jelly Duo",A0="Jelly Fill",T0="Notdog",F0="Notdog Duo",P0="Slab",_0="Slab Press",D0="Thumbprint",E0="Whiteboard",u3=[S,f2,c3,a3,l3,e3,r3,s3,i3,n3,o3,f3,t3,m3,z3],I5=(V2={},d(d(d(d(d(d(d(d(d(d(V2,S,C0),f2,x0),c3,S0),a3,b0),l3,N0),e3,y0),r3,w0),s3,k0),i3,A0),n3,T0),d(d(d(d(d(V2,o3,F0),f3,P0),t3,_0),m3,D0),z3,E0)),B0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},R0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},I0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),H0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},p3=["fak","fa-kit","fakd","fa-kit-duotone"],C4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},O0=["kit"],U0="kit",W0="kit-duotone",q0="Kit",j0="Kit Duotone",H5=d(d({},U0,q0),W0,j0),G0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},V0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},x4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$2,h2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Y0="classic",X0="duotone",Q0="sharp",J0="sharp-duotone",Z0="chisel",c6="etch",a6="jelly",l6="jelly-duo",e6="jelly-fill",r6="notdog",s6="notdog-duo",i6="slab",n6="slab-press",o6="thumbprint",f6="whiteboard",t6="Classic",m6="Duotone",z6="Sharp",u6="Sharp Duotone",p6="Chisel",d6="Etch",M6="Jelly",L6="Jelly Duo",v6="Jelly Fill",h6="Notdog",g6="Notdog Duo",C6="Slab",x6="Slab Press",S6="Thumbprint",b6="Whiteboard",O5=($2={},d(d(d(d(d(d(d(d(d(d($2,Y0,t6),X0,m6),Q0,z6),J0,u6),Z0,p6),c6,d6),a6,M6),l6,L6),e6,v6),r6,h6),d(d(d(d(d($2,s6,g6),i6,C6),n6,x6),o6,S6),f6,b6)),N6="kit",y6="kit-duotone",w6="Kit",k6="Kit Duotone",U5=d(d({},N6,w6),y6,k6),A6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},T6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},c1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},F6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],d3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(K0,F6),P6=["solid","regular","light","thin","duotone","brands","semibold"],M3=[1,2,3,4,5,6,7,8,9,10],_6=M3.concat([11,12,13,14,15,16,17,18,19,20]),D6=["aw","fw","pull-left","pull-right"],E6=[].concat(F(Object.keys(T6)),P6,D6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",h2.GROUP,h2.SWAP_OPACITY,h2.PRIMARY,h2.SECONDARY]).concat(M3.map(function(c){return"".concat(c,"x")})).concat(_6.map(function(c){return"w-".concat(c)})),B6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",a1=16,L3="fa",v3="svg-inline--fa",$="data-fa-i2svg",l1="data-fa-pseudo-element",R6="data-fa-pseudo-element-pending",M1="data-prefix",L1="data-icon",S4="fontawesome-i2svg",I6="async",H6=["HTML","HEAD","STYLE","SCRIPT"],h3=["::before","::after",":before",":after"],g3=(function(){try{return!0}catch{return!1}})();function t2(c){return new Proxy(c,{get:function(a,l){return l in a?a[l]:a[S]}})}var C3=f({},J4);C3[S]=f(f(f(f({},{"fa-duotone":"duotone"}),J4[S]),C4.kit),C4["kit-duotone"]);var O6=t2(C3),e1=f({},H0);e1[S]=f(f(f(f({},{duotone:"fad"}),e1[S]),x4.kit),x4["kit-duotone"]);var b4=t2(e1),r1=f({},c1);r1[S]=f(f({},r1[S]),$0.kit);var v1=t2(r1),s1=f({},A6);s1[S]=f(f({},s1[S]),G0.kit);var W5=t2(s1),U6=v0,x3="fa-layers-text",W6=h0,q6=f({},B0),q5=t2(q6),j6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K2=g0,G6=[].concat(F(O0),F(E6)),i2=W.FontAwesomeConfig||{};function V6(c){var e=L.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function $6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(N4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],N4.forEach(function(c){var e=y2(c,2),a=e[0],l=e[1],r=$6(V6(a));r!=null&&(i2[l]=r)}));var N4,S3={styleDefault:"solid",familyDefault:S,cssPrefix:L3,replacementClass:v3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i2.familyPrefix&&(i2.cssPrefix=i2.familyPrefix);var c2=f(f({},S3),i2);c2.autoReplaceSvg||(c2.observeMutations=!1);var u={};Object.keys(S3).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){c2[c]=a,n2.forEach(function(l){return l(u)})},get:function(){return c2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){c2.cssPrefix=e,n2.forEach(function(a){return a(u)})},get:function(){return c2.cssPrefix}});W.FontAwesomeConfig=u;var n2=[];function K6(c){return n2.push(c),function(){n2.splice(n2.indexOf(c),1)}}var U=a1,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Y6(c){if(!(!c||!O)){var e=L.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=L.head.childNodes,l=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(l=s)}return L.head.insertBefore(e,l),c}}var X6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function y4(){for(var c=12,e="";c-- >0;)e+=X6[Math.random()*62|0];return e}function a2(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function h1(c){return c.classList?a2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function b3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q6(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(b3(c[a]),'" ')},"").trim()}function w2(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function g1(c){return c.size!==_.size||c.x!==_.x||c.y!==_.y||c.rotate!==_.rotate||c.flipX||c.flipY}function J6(c){var e=c.transform,a=c.containerWidth,l=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),n="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(s," ").concat(i," ").concat(n)},t={transform:"translate(".concat(l/2*-1," -256)")};return{outer:r,inner:o,path:t}}function Z6(c){var e=c.transform,a=c.width,l=a===void 0?a1:a,r=c.height,s=r===void 0?a1:r,i=c.startCentered,n=i===void 0?!1:i,o="";return n&&Q4?o+="translate(".concat(e.x/U-l/2,"em, ").concat(e.y/U-s/2,"em) "):n?o+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):o+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),o+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var c8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function N3(){var c=L3,e=v3,a=u.cssPrefix,l=u.replacementClass,r=c8;if(a!==c||l!==e){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(n,".".concat(l))}return r}var w4=!1;function Y2(){u.autoAddCss&&!w4&&(Y6(N3()),w4=!0)}var a8={mixout:function(){return{dom:{css:N3,insertCss:Y2}}},hooks:function(){return{beforeDOMElementCreation:function(){Y2()},beforeI2svg:function(){Y2()}}}},H=W||{};H[I]||(H[I]={});H[I].styles||(H[I].styles={});H[I].hooks||(H[I].hooks={});H[I].shims||(H[I].shims=[]);var T=H[I],y3=[],w3=function(){L.removeEventListener("DOMContentLoaded",w3),b2=1,y3.map(function(e){return e()})},b2=!1;O&&(b2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),b2||L.addEventListener("DOMContentLoaded",w3));function l8(c){O&&(b2?setTimeout(c,0):y3.push(c))}function m2(c){var e=c.tag,a=c.attributes,l=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?b3(c):"<".concat(e," ").concat(Q6(l),">").concat(s.map(m2).join(""),"</").concat(e,">")}function k4(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var e8=function(e,a){return function(l,r,s,i){return e.call(a,l,r,s,i)}},X2=function(e,a,l,r){var s=Object.keys(e),i=s.length,n=r!==void 0?e8(a,r):a,o,t,z;for(l===void 0?(o=1,z=e[s[0]]):(o=0,z=l);o<i;o++)t=s[o],z=n(z,e[t],t,e);return z};function k3(c){return F(c).length!==1?null:c.codePointAt(0).toString(16)}function A4(c){return Object.keys(c).reduce(function(e,a){var l=c[a],r=!!l.icon;return r?e[l.iconName]=l.icon:e[a]=l,e},{})}function i1(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=a.skipHooks,r=l===void 0?!1:l,s=A4(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(c,A4(e)):T.styles[c]=f(f({},T.styles[c]||{}),s),c==="fas"&&i1("fa",e)}var o2=T.styles,r8=T.shims,A3=Object.keys(v1),s8=A3.reduce(function(c,e){return c[e]=Object.keys(v1[e]),c},{}),C1=null,T3={},F3={},P3={},_3={},D3={};function i8(c){return~G6.indexOf(c)}function n8(c,e){var a=e.split("-"),l=a[0],r=a.slice(1).join("-");return l===c&&r!==""&&!i8(r)?r:null}var E3=function(){var e=function(s){return X2(o2,function(i,n,o){return i[o]=X2(n,s,{}),i},{})};T3=e(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var n=s[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=i})}return r}),F3=e(function(r,s,i){if(r[i]=i,s[2]){var n=s[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=i})}return r}),D3=e(function(r,s,i){var n=s[2];return r[i]=i,n.forEach(function(o){r[o]=i}),r});var a="far"in o2||u.autoFetchSvg,l=X2(r8,function(r,s){var i=s[0],n=s[1],o=s[2];return n==="far"&&!a&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});P3=l.names,_3=l.unicodes,C1=k2(u.styleDefault,{family:u.familyDefault})};K6(function(c){C1=k2(c.styleDefault,{family:u.familyDefault})});E3();function x1(c,e){return(T3[c]||{})[e]}function o8(c,e){return(F3[c]||{})[e]}function V(c,e){return(D3[c]||{})[e]}function B3(c){return P3[c]||{prefix:null,iconName:null}}function f8(c){var e=_3[c],a=x1("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function q(){return C1}var R3=function(){return{prefix:null,iconName:null,rest:[]}};function t8(c){var e=S,a=A3.reduce(function(l,r){return l[r]="".concat(u.cssPrefix,"-").concat(r),l},{});return u3.forEach(function(l){(c.includes(a[l])||c.some(function(r){return s8[l].includes(r)}))&&(e=l)}),e}function k2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,l=a===void 0?S:a,r=O6[l][c];if(l===f2&&!c)return"fad";var s=b4[l][c]||b4[l][r],i=c in T.styles?c:null,n=s||i||null;return n}function m8(c){var e=[],a=null;return c.forEach(function(l){var r=n8(u.cssPrefix,l);r?a=r:l&&e.push(l)}),{iconName:a,rest:e}}function T4(c){return c.sort().filter(function(e,a,l){return l.indexOf(e)===a})}var F4=d3.concat(p3);function A2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,l=a===void 0?!1:a,r=null,s=T4(c.filter(function(p){return F4.includes(p)})),i=T4(c.filter(function(p){return!F4.includes(p)})),n=s.filter(function(p){return r=p,!Z4.includes(p)}),o=y2(n,1),t=o[0],z=t===void 0?null:t,m=t8(s),M=f(f({},m8(i)),{},{prefix:k2(z,{family:m})});return f(f(f({},M),d8({values:c,family:m,styles:o2,config:u,canonical:M,givenPrefix:r})),z8(l,r,M))}function z8(c,e,a){var l=a.prefix,r=a.iconName;if(c||!l||!r)return{prefix:l,iconName:r};var s=e==="fa"?B3(r):{},i=V(l,r);return r=s.iconName||i||r,l=s.prefix||l,l==="far"&&!o2.far&&o2.fas&&!u.autoFetchSvg&&(l="fas"),{prefix:l,iconName:r}}var u8=u3.filter(function(c){return c!==S||c!==f2}),p8=Object.keys(c1).filter(function(c){return c!==S}).map(function(c){return Object.keys(c1[c])}).flat();function d8(c){var e=c.values,a=c.family,l=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,n=i===void 0?{}:i,o=c.config,t=o===void 0?{}:o,z=a===f2,m=e.includes("fa-duotone")||e.includes("fad"),M=t.familyDefault==="duotone",p=l.prefix==="fad"||l.prefix==="fa-duotone";if(!z&&(m||M||p)&&(l.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),!l.prefix&&u8.includes(a)){var g=Object.keys(n).find(function(b){return p8.includes(b)});if(g||t.autoFetchSvg){var v=I0.get(a).defaultShortPrefixId;l.prefix=v,l.iconName=V(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||s==="fa")&&(l.prefix=q()||"fas"),l}var M8=(function(){function c(){t0(this,c),this.definitions={}}return m0(c,[{key:"add",value:function(){for(var a=this,l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){a.definitions[n]=f(f({},a.definitions[n]||{}),i[n]),i1(n,i[n]);var o=v1[S][n];o&&i1(o,i[n]),E3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,l){var r=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(r).map(function(s){var i=r[s],n=i.prefix,o=i.iconName,t=i.icon,z=t[2];a[n]||(a[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[n][m]=t)}),a[n][o]=t}),a}}])})(),P4=[],J={},Z={},L8=Object.keys(Z);function v8(c,e){var a=e.mixoutsTo;return P4=c,J={},Object.keys(Z).forEach(function(l){L8.indexOf(l)===-1&&delete Z[l]}),P4.forEach(function(l){var r=l.mixout?l.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),S2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){a[i]||(a[i]={}),a[i][n]=r[i][n]})}),l.hooks){var s=l.hooks();Object.keys(s).forEach(function(i){J[i]||(J[i]=[]),J[i].push(s[i])})}l.provides&&l.provides(Z)}),a}function n1(c,e){for(var a=arguments.length,l=new Array(a>2?a-2:0),r=2;r<a;r++)l[r-2]=arguments[r];var s=J[c]||[];return s.forEach(function(i){e=i.apply(null,[e].concat(l))}),e}function K(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),l=1;l<e;l++)a[l-1]=arguments[l];var r=J[c]||[];r.forEach(function(s){s.apply(null,a)})}function j(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[c]?Z[c].apply(null,e):void 0}function o1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||q();if(e)return e=V(a,e)||e,k4(I3.definitions,a,e)||k4(T.styles,a,e)}var I3=new M8,h8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,K("noAuto")},g8={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(K("beforeI2svg",e),j("pseudoElements2svg",e),j("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,l8(function(){x8({autoReplaceSvgRoot:a}),K("watch",e)})}},C8={icon:function(e){if(e===null)return null;if(S2(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],l=k2(e[0]);return{prefix:l,iconName:V(l,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(U6))){var r=A2(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||q(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=q();return{prefix:s,iconName:V(s,e)||e}}}},y={noAuto:h8,config:u,dom:g8,parse:C8,library:I3,findIconDefinition:o1,toHtml:m2},x8=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,l=a===void 0?L:a;(Object.keys(T.styles).length>0||u.autoFetchSvg)&&O&&u.autoReplaceSvg&&y.dom.i2svg({node:l})};function T2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(l){return m2(l)})}}),Object.defineProperty(c,"node",{get:function(){if(O){var l=L.createElement("div");return l.innerHTML=c.html,l.children}}}),c}function S8(c){var e=c.children,a=c.main,l=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(g1(i)&&a.found&&!l.found){var n=a.width,o=a.height,t={x:n/o/2,y:.5};r.style=w2(f(f({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function b8(c){var e=c.prefix,a=c.iconName,l=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:l}]}]}function N8(c){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in c})}function S1(c){var e=c.icons,a=e.main,l=e.mask,r=c.prefix,s=c.iconName,i=c.transform,n=c.symbol,o=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=l.found?l:a,p=M.width,g=M.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(E){return t.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(t.classes).join(" "),b={children:[],attributes:f(f({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(g)})};!N8(t.attributes)&&!t.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),m&&(b.attributes[$]="");var C=f(f({},b),{},{prefix:r,iconName:s,main:a,mask:l,maskId:o,transform:i,symbol:n,styles:f({},t.styles)}),N=l.found&&a.found?j("generateAbstractMask",C)||{children:[],attributes:{}}:j("generateAbstractIcon",C)||{children:[],attributes:{}},A=N.children,X=N.attributes;return C.children=A,C.attributes=X,n?b8(C):S8(C)}function _4(c){var e=c.content,a=c.width,l=c.height,r=c.transform,s=c.extra,i=c.watchable,n=i===void 0?!1:i,o=f(f({},s.attributes),{},{class:s.classes.join(" ")});n&&(o[$]="");var t=f({},s.styles);g1(r)&&(t.transform=Z6({transform:r,startCentered:!0,width:a,height:l}),t["-webkit-transform"]=t.transform);var z=w2(t);z.length>0&&(o.style=z);var m=[];return m.push({tag:"span",attributes:o,children:[e]}),m}function y8(c){var e=c.content,a=c.extra,l=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=w2(a.styles);r.length>0&&(l.style=r);var s=[];return s.push({tag:"span",attributes:l,children:[e]}),s}var Q2=T.styles;function f1(c){var e=c[0],a=c[1],l=c.slice(4),r=y2(l,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(K2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(K2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(K2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:a,icon:i}}var w8={found:!1,width:512,height:512};function k8(c,e){!g3&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function t1(c,e){var a=e;return e==="fa"&&u.styleDefault!==null&&(e=q()),new Promise(function(l,r){if(a==="fa"){var s=B3(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&Q2[e]&&Q2[e][c]){var i=Q2[e][c];return l(f1(i))}k8(c,e),l(f(f({},w8),{},{icon:u.showMissingIcons&&c?j("missingIconAbstract")||{}:{}}))})}var D4=function(){},m1=u.measurePerformance&&v2&&v2.mark&&v2.measure?v2:{mark:D4,measure:D4},s2='FA "7.0.1"',A8=function(e){return m1.mark("".concat(s2," ").concat(e," begins")),function(){return H3(e)}},H3=function(e){m1.mark("".concat(s2," ").concat(e," ends")),m1.measure("".concat(s2," ").concat(e),"".concat(s2," ").concat(e," begins"),"".concat(s2," ").concat(e," ends"))},b1={begin:A8,end:H3},C2=function(){};function E4(c){var e=c.getAttribute?c.getAttribute($):null;return typeof e=="string"}function T8(c){var e=c.getAttribute?c.getAttribute(M1):null,a=c.getAttribute?c.getAttribute(L1):null;return e&&a}function F8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function P8(){if(u.autoReplaceSvg===!0)return x2.replace;var c=x2[u.autoReplaceSvg];return c||x2.replace}function _8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function D8(c){return L.createElement(c)}function O3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,l=a===void 0?c.tag==="svg"?_8:D8:a;if(typeof c=="string")return L.createTextNode(c);var r=l(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(O3(i,{ceFn:l}))}),r}function E8(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var x2={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(O3(r),a)}),a.getAttribute($)===null&&u.keepOriginalSource){var l=L.createComment(E8(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(e){var a=e[0],l=e[1];if(~h1(a).indexOf(u.replacementClass))return x2.replace(e);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var s=l[0].attributes.class.split(" ").reduce(function(n,o){return o===u.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});l[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=l.map(function(n){return m2(n)}).join(`
`);a.setAttribute($,""),a.innerHTML=i}};function B4(c){c()}function U3(c,e){var a=typeof e=="function"?e:C2;if(c.length===0)a();else{var l=B4;u.mutateApproach===I6&&(l=W.requestAnimationFrame||B4),l(function(){var r=P8(),s=b1.begin("mutate");c.map(r),s(),a()})}}var N1=!1;function W3(){N1=!0}function z1(){N1=!1}var N2=null;function R4(c){if(g4&&u.observeMutations){var e=c.treeCallback,a=e===void 0?C2:e,l=c.nodeCallback,r=l===void 0?C2:l,s=c.pseudoElementsCallback,i=s===void 0?C2:s,n=c.observeMutationsRoot,o=n===void 0?L:n;N2=new g4(function(t){if(!N1){var z=q();a2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!E4(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&E4(m.target)&&~j6.indexOf(m.attributeName))if(m.attributeName==="class"&&T8(m.target)){var M=A2(h1(m.target)),p=M.prefix,g=M.iconName;m.target.setAttribute(M1,p||z),g&&m.target.setAttribute(L1,g)}else F8(m.target)&&r(m.target)})}}),O&&N2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function B8(){N2&&N2.disconnect()}function R8(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(l,r){var s=r.split(":"),i=s[0],n=s.slice(1);return i&&n.length>0&&(l[i]=n.join(":").trim()),l},{})),a}function I8(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",r=A2(h1(c));return r.prefix||(r.prefix=q()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&l.length>0&&(r.iconName=o8(r.prefix,c.innerText)||x1(r.prefix,k3(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function H8(c){var e=a2(c.attributes).reduce(function(a,l){return a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a},{});return e}function O8(){return{iconName:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function I4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=I8(c),l=a.iconName,r=a.prefix,s=a.rest,i=H8(c),n=n1("parseNodeAttributes",{},c),o=e.styleParser?R8(c):[];return f({iconName:l,prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:i}},n)}var U8=T.styles;function q3(c){var e=u.autoReplaceSvg==="nest"?I4(c,{styleParser:!1}):I4(c);return~e.extra.classes.indexOf(x3)?j("generateLayersText",c,e):j("generateSvgReplacementMutation",c,e)}function W8(){return[].concat(F(p3),F(d3))}function H4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();var a=L.documentElement.classList,l=function(m){return a.add("".concat(S4,"-").concat(m))},r=function(m){return a.remove("".concat(S4,"-").concat(m))},s=u.autoFetchSvg?W8():Z4.concat(Object.keys(U8));s.includes("fa")||s.push("fa");var i=[".".concat(x3,":not([").concat($,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat($,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=a2(c.querySelectorAll(i))}catch{}if(n.length>0)l("pending"),r("complete");else return Promise.resolve();var o=b1.begin("onTree"),t=n.reduce(function(z,m){try{var M=q3(m);M&&z.push(M)}catch(p){g3||p.name==="MissingIcon"&&console.error(p)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){U3(M,function(){l("active"),l("complete"),r("pending"),typeof e=="function"&&e(),o(),z()})}).catch(function(M){o(),m(M)})})}function q8(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q3(c).then(function(a){a&&U3([a],e)})}function j8(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(e||{}).icon?e:o1(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:o1(r||{})),c(l,f(f({},a),{},{mask:r}))}}var G8=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,r=l===void 0?_:l,s=a.symbol,i=s===void 0?!1:s,n=a.mask,o=n===void 0?null:n,t=a.maskId,z=t===void 0?null:t,m=a.classes,M=m===void 0?[]:m,p=a.attributes,g=p===void 0?{}:p,v=a.styles,b=v===void 0?{}:v;if(e){var C=e.prefix,N=e.iconName,A=e.icon;return T2(f({type:"icon"},e),function(){return K("beforeDOMElementCreation",{iconDefinition:e,params:a}),S1({icons:{main:f1(A),mask:o?f1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:f(f({},_),r),symbol:i,maskId:z,extra:{attributes:g,styles:b,classes:M}})})}},V8={mixout:function(){return{icon:j8(G8)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=H4,a.nodeCallback=q8,a}}},provides:function(e){e.i2svg=function(a){var l=a.node,r=l===void 0?L:l,s=a.callback,i=s===void 0?function(){}:s;return H4(r,i)},e.generateSvgReplacementMutation=function(a,l){var r=l.iconName,s=l.prefix,i=l.transform,n=l.symbol,o=l.mask,t=l.maskId,z=l.extra;return new Promise(function(m,M){Promise.all([t1(r,s),o.iconName?t1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=y2(p,2),v=g[0],b=g[1];m([a,S1({icons:{main:v,mask:b},prefix:s,iconName:r,transform:i,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(a){var l=a.children,r=a.attributes,s=a.main,i=a.transform,n=a.styles,o=w2(n);o.length>0&&(r.style=o);var t;return g1(i)&&(t=j("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),l.push(t||s.icon),{children:l,attributes:r}}}},$8={mixout:function(){return{layer:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.classes,s=r===void 0?[]:r;return T2({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:a,params:l});var i=[];return a(function(n){Array.isArray(n)?n.map(function(o){i=i.concat(o.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(F(s)).join(" ")},children:i}]})}}}},K8={mixout:function(){return{counter:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.title,s=r===void 0?null:r,i=l.classes,n=i===void 0?[]:i,o=l.attributes,t=o===void 0?{}:o,z=l.styles,m=z===void 0?{}:z;return T2({type:"counter",content:a},function(){return K("beforeDOMElementCreation",{content:a,params:l}),y8({content:a.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(F(n))}})})}}}},Y8={mixout:function(){return{text:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.transform,s=r===void 0?_:r,i=l.classes,n=i===void 0?[]:i,o=l.attributes,t=o===void 0?{}:o,z=l.styles,m=z===void 0?{}:z;return T2({type:"text",content:a},function(){return K("beforeDOMElementCreation",{content:a,params:l}),_4({content:a,transform:f(f({},_),s),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(F(n))}})})}}},provides:function(e){e.generateLayersText=function(a,l){var r=l.transform,s=l.extra,i=null,n=null;if(Q4){var o=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();i=t.width/o,n=t.height/o}return Promise.resolve([a,_4({content:a.innerHTML,width:i,height:n,transform:r,extra:s,watchable:!0})])}}},j3=new RegExp('"',"ug"),O4=[1105920,1112319],U4=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),R0),B6),V0),u1=Object.keys(U4).reduce(function(c,e){return c[e.toLowerCase()]=U4[e],c},{}),X8=Object.keys(u1).reduce(function(c,e){var a=u1[e];return c[e]=a[900]||F(Object.entries(a))[0][1],c},{});function Q8(c){var e=c.replace(j3,"");return k3(F(e)[0]||"")}function J8(c){var e=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),l=a.replace(j3,""),r=l.codePointAt(0),s=r>=O4[0]&&r<=O4[1],i=l.length===2?l[0]===l[1]:!1;return s||i||e}function Z8(c,e){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(e),r=isNaN(l)?"normal":l;return(u1[a]||{})[r]||X8[a]}function W4(c,e){var a="".concat(R6).concat(e.replace(":","-"));return new Promise(function(l,r){if(c.getAttribute(a)!==null)return l();var s=a2(c.children),i=s.filter(function(E2){return E2.getAttribute(l1)===e})[0],n=W.getComputedStyle(c,e),o=n.getPropertyValue("font-family"),t=o.match(W6),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(i&&!t)return c.removeChild(i),l();if(t&&m!=="none"&&m!==""){var M=n.getPropertyValue("content"),p=Z8(o,z),g=Q8(M),v=t[0].startsWith("FontAwesome"),b=J8(n),C=x1(p,g),N=C;if(v){var A=f8(g);A.iconName&&A.prefix&&(C=A.iconName,p=A.prefix)}if(C&&!b&&(!i||i.getAttribute(M1)!==p||i.getAttribute(L1)!==N)){c.setAttribute(a,N),i&&c.removeChild(i);var X=O8(),E=X.extra;E.attributes[l1]=e,t1(C,p).then(function(E2){var s0=S1(f(f({},X),{},{icons:{main:E2,mask:R3()},prefix:p,iconName:N,extra:E,watchable:!0})),B2=L.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(B2,c.firstChild):c.appendChild(B2),B2.outerHTML=s0.map(function(i0){return m2(i0)}).join(`
`),c.removeAttribute(a),l()}).catch(r)}else l()}else l()})}function c5(c){return Promise.all([W4(c,"::before"),W4(c,"::after")])}function a5(c){return c.parentNode!==document.head&&!~H6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(l1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var l5=function(e){return!!e&&h3.some(function(a){return e.includes(a)})},e5=function(e){if(!e)return[];var a=new Set,l=e.split(/,(?![^()]*\))/).map(function(o){return o.trim()});l=l.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(t){return t.trim()})});var r=g2(l),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(l5(i)){var n=h3.reduce(function(o,t){return o.replace(t,"")},i);n!==""&&n!=="*"&&a.add(n)}}}catch(o){r.e(o)}finally{r.f()}return a};function q4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O){var a;if(e)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var l=new Set,r=g2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var n=g2(i.cssRules),o;try{for(n.s();!(o=n.n()).done;){var t=o.value,z=e5(t.selectorText),m=g2(z),M;try{for(m.s();!(M=m.n()).done;){var p=M.value;l.add(p)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!l.size)return;var g=Array.from(l).join(", ");try{a=c.querySelectorAll(g)}catch{}}return new Promise(function(v,b){var C=a2(a).filter(a5).map(c5),N=b1.begin("searchPseudoElements");W3(),Promise.all(C).then(function(){N(),z1(),v()}).catch(function(){N(),z1(),b()})})}}var r5={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=q4,a}}},provides:function(e){e.pseudoElements2svg=function(a){var l=a.node,r=l===void 0?L:l;u.searchPseudoElements&&q4(r)}}},j4=!1,s5={mixout:function(){return{dom:{unwatch:function(){W3(),j4=!0}}}},hooks:function(){return{bootstrap:function(){R4(n1("mutationObserverCallbacks",{}))},noAuto:function(){B8()},watch:function(a){var l=a.observeMutationsRoot;j4?z1():R4(n1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},G4=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(l,r){var s=r.toLowerCase().split("-"),i=s[0],n=s.slice(1).join("-");if(i&&n==="h")return l.flipX=!0,l;if(i&&n==="v")return l.flipY=!0,l;if(n=parseFloat(n),isNaN(n))return l;switch(i){case"grow":l.size=l.size+n;break;case"shrink":l.size=l.size-n;break;case"left":l.x=l.x-n;break;case"right":l.x=l.x+n;break;case"up":l.y=l.y-n;break;case"down":l.y=l.y+n;break;case"rotate":l.rotate=l.rotate+n;break}return l},a)},i5={mixout:function(){return{parse:{transform:function(a){return G4(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-transform");return r&&(a.transform=G4(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var l=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,n={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(t," ").concat(z)},M={transform:"translate(".concat(i/2*-1," -256)")},p={outer:n,inner:m,path:M};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:f(f({},l.icon.attributes),p.path)}]}]}}}},J2={x:0,y:0,width:"100%",height:"100%"};function V4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function n5(c){return c.tag==="g"?c.children:[c]}var o5={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-mask"),s=r?A2(r.split(" ").map(function(i){return i.trim()})):R3();return s.prefix||(s.prefix=q()),a.mask=s,a.maskId=l.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var l=a.children,r=a.attributes,s=a.main,i=a.mask,n=a.maskId,o=a.transform,t=s.width,z=s.icon,m=i.width,M=i.icon,p=J6({transform:o,containerWidth:m,iconWidth:t}),g={tag:"rect",attributes:f(f({},J2),{},{fill:"white"})},v=z.children?{children:z.children.map(V4)}:{},b={tag:"g",attributes:f({},p.inner),children:[V4(f({tag:z.tag,attributes:f(f({},z.attributes),p.path)},v))]},C={tag:"g",attributes:f({},p.outer),children:[b]},N="mask-".concat(n||y4()),A="clip-".concat(n||y4()),X={tag:"mask",attributes:f(f({},J2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,C]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:n5(M)},X]};return l.push(E,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(N,")")},J2)}),{children:l,attributes:r}}}},f5={provides:function(e){var a=!1;W.matchMedia&&(a=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var l=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:f(f({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),l.push(n),l.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},t5={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},m5=[a8,V8,$8,K8,Y8,r5,s5,i5,o5,f5,t5];v8(m5,{mixoutsTo:y});var j5=y.noAuto,G3=y.config,G5=y.library,V3=y.dom,$3=y.parse,V5=y.findIconDefinition,$5=y.toHtml,K3=y.icon,K5=y.layer,z5=y.text,u5=y.counter;var p5=["*"],d5=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){G3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),M5=(()=>{class c{definitions={};addIcons(...a){for(let l of a){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let r of l.icon[2])typeof r=="string"&&(this.definitions[l.prefix][r]=l)}}addIconPacks(...a){for(let l of a){let r=Object.keys(l).map(s=>l[s]);this.addIcons(...r)}}getIconDefinition(a,l){return a in this.definitions&&l in this.definitions[a]?this.definitions[a][l]:null}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),L5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},v5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},X3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),h5=c=>{let e=X3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(l=>a[l]?l:null).filter(l=>l!=null)},y1=new WeakSet,Y3="fa-auto-css";function g5(c,e){if(!e.autoAddCss||y1.has(c))return;if(c.getElementById(Y3)!=null){e.autoAddCss=!1,y1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",Y3),a.innerHTML=V3.css();let l=c.head.childNodes,r=null;for(let s=l.length-1;s>-1;s--){let i=l[s],n=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}c.head.insertBefore(a,r),e.autoAddCss=!1,y1.add(c)}var C5=c=>c.prefix!==void 0&&c.iconName!==void 0,x5=(c,e)=>C5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},S5=(()=>{class c{stackItemSize=R("1x");size=R();_effect=n4(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(l){return new(l||c)};static \u0275dir=p2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),b5=(()=>{class c{size=R();classes=j2(()=>{let a=this.size(),l=a?{[`fa-${a}`]:!0}:{};return D1(_1({},l),{"fa-stack":!0})});static \u0275fac=function(l){return new(l||c)};static \u0275cmp=B({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(l,r){l&2&&q2(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:p5,decls:1,vars:0,template:function(l,r){l&1&&(U2(),W2(0))},encapsulation:2,changeDetection:0})}return c})(),z2=(()=>{class c{icon=x();title=x();animation=x();mask=x();flip=x();size=x();pull=x();border=x();inverse=x();symbol=x();rotate=x();fixedWidth=x();transform=x();a11yRole=x();renderedIconHTML=j2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return v5(),"";let l=this.findIconDefinition(a);if(!l)return"";let r=this.buildParams();g5(this.document,this.config);let s=K3(l,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=h(u2);sanitizer=h(m4);config=h(d5);iconLibrary=h(M5);stackItem=h(S5,{optional:!0});stack=h(b5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let l=x5(a,this.config.defaultPrefix);if("icon"in l)return l;let r=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return r??(L5(l),null)}buildParams(){let a=this.fixedWidth(),l={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?$3.transform(r):r,i=this.mask(),n=i!=null?this.findIconDefinition(i):null,o={},t=this.a11yRole();t!=null&&(o.role=t);let z={};return l.rotate!=null&&!X3(l.rotate)&&(z["--fa-rotate-angle"]=`${l.rotate}`),{title:this.title(),transform:s,classes:h5(l),mask:n??void 0,symbol:this.symbol(),attributes:o,styles:z}}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=B({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,r){l&2&&(Z1("innerHTML",r.renderedIconHTML(),$1),d2("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(l,r){},encapsulation:2,changeDetection:0})}return c})(),Q3=(()=>{class c extends z2{swapOpacity=R();primaryOpacity=R();secondaryOpacity=R();primaryColor=R();secondaryColor=R();findIconDefinition(a){let l=super.findIconDefinition(a);if(l!=null&&!Array.isArray(l.icon[4]))throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${l.iconName}']" /> or use: <fa-icon icon="${l.iconName}" /> instead.`);return l}buildParams(){let a=super.buildParams(),l=this.swapOpacity();(l===!0||l==="true")&&(Array.isArray(a.classes)?a.classes.push("fa-swap-opacity"):typeof a.classes=="string"?a.classes=[a.classes,"fa-swap-opacity"]:a.classes=["fa-swap-opacity"]),a.styles==null&&(a.styles={});let r=this.primaryOpacity();r!=null&&(a.styles["--fa-primary-opacity"]=r.toString());let s=this.secondaryOpacity();s!=null&&(a.styles["--fa-secondary-opacity"]=s.toString());let i=this.primaryColor();i!=null&&(a.styles["--fa-primary-color"]=i);let n=this.secondaryColor();return n!=null&&(a.styles["--fa-secondary-color"]=n),a}static \u0275fac=(()=>{let a;return function(r){return(a||(a=j1(c)))(r||c)}})();static \u0275cmp=B({type:c,selectors:[["fa-duotone-icon"]],inputs:{swapOpacity:[1,"swapOpacity"],primaryOpacity:[1,"primaryOpacity"],secondaryOpacity:[1,"secondaryOpacity"],primaryColor:[1,"primaryColor"],secondaryColor:[1,"secondaryColor"]},features:[K1],decls:0,vars:0,template:function(l,r){},encapsulation:2,changeDetection:0})}return c})();var w5=()=>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],k5=c=>({"animation-delay":c});function A5(c,e){if(c&1){let a=J1();Q(0,"div",1),c4("mouseenter",function(){I2(a);let r=L2();return H2(r.playHoverSound())})("click",function(){let r=I2(a).$index,s=L2();return H2(s.openChild(""+r,"test-component"))}),Q(1,"div",2),M2(2,"fa-icon",3),r2(),Q(3,"div",4)(4,"h2"),a4(5),s4(6,"translate"),r2()()()}if(c&2){let a=e.$index,l=L2();e2("ngStyle",r4(5,k5,a*.1+"s")),l2(2),e2("icon",l.faIcon()),l2(3),l4(i4(6,3,"system.modules.home.title"))}}var F2=class c{faIcon=x("");soundsReady=!1;tapSound;windowFNS=window.osystemapi;ngOnInit(){document.body.offsetHeight,this.tapSound=new Audio("/assets/sounds/tap-tone.wav"),this.tapSound.volume=.3;let e=()=>{this.soundsReady=!0,this.tapSound.play().catch(a=>console.warn("Tap sound blocked",a)),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};document.addEventListener("click",e),document.addEventListener("keydown",e)}playHoverSound(){this.soundsReady&&this.tapSound&&(this.tapSound.currentTime=0,this.tapSound.play().catch(()=>{}))}openChild(e,a){let l={id:e,route:a};this.windowFNS.openChildWindow(l)}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=B({type:c,selectors:[["app-menu-item"]],inputs:{faIcon:[1,"faIcon"]},outputs:{faIcon:"faIconChange"},standalone:!1,decls:2,vars:1,consts:[[1,"home-menu-item-card",3,"ngStyle"],[1,"home-menu-item-card",3,"mouseenter","click","ngStyle"],[1,"img-icon"],[3,"icon"],[1,"menu-item-title"]],template:function(a,l){a&1&&X1(0,A5,7,7,"div",0,Y1),a&2&&Q1(e4(0,w5))},dependencies:[o4,z2,z4],styles:[".home-menu-item-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;gap:12px;text-shadow:0 0 8px cyan;border:1px solid rgba(0,255,255,.4);animation:zoomIn .5s ease-in-out;transition:all .3s ease}.home-menu-item-card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#e0ffff;font-size:30px}.home-menu-item-card[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:0 0 10px #0ff9,0 0 10px #0ff6;transform:scale(1)}"]})};var P2=class c{faHome=p4;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=B({type:c,selectors:[["app-home"]],standalone:!1,decls:4,vars:1,consts:[[1,"home-container"],[1,"home-content"],[1,"items"],[3,"faIcon"]],template:function(a,l){a&1&&(Q(0,"div",0)(1,"div",1)(2,"div",2),M2(3,"app-menu-item",3),r2()()()),a&2&&(l2(3),e2("faIcon",l.faHome))},dependencies:[F2],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.home-container[_ngcontent-%COMP%]{padding:50px 16px;width:100%}.home-content[_ngcontent-%COMP%]{width:100%}.home-content[_ngcontent-%COMP%]   app-menu-item[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));grid-gap:16px}"]})};var F5=[{path:"",component:P2}],_2=class c{static \u0275fac=function(a){return new(a||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[G2.forChild(F5),G2]})};var w1;try{w1=typeof Intl<"u"&&Intl.v8BreakIterator}catch{w1=!1}var D2=(()=>{class c{_platformId=h(G1);isBrowser=this._platformId?t4(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||w1)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function k1(c){return Array.isArray(c)?c:[c]}var J3=new Set,Y,P5=(()=>{class c{_platform=h(D2);_nonce=h(V1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):D5}matchMedia(a){return(this._platform.WEBKIT||this._platform.BLINK)&&_5(a,this._nonce),this._matchMedia(a)}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function _5(c,e){if(!J3.has(c))try{Y||(Y=document.createElement("style"),e&&Y.setAttribute("nonce",e),Y.setAttribute("type","text/css"),document.head.appendChild(Y)),Y.sheet&&(Y.sheet.insertRule(`@media ${c} {body{ }}`,0),J3.add(c))}catch(a){console.error(a)}}function D5(c){return{matches:c==="all"||c==="",media:c,addListener:()=>{},removeListener:()=>{}}}var c0=(()=>{class c{_mediaMatcher=h(P5);_zone=h(O2);_queries=new Map;_destroySubject=new B1;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(a){return Z3(k1(a)).some(r=>this._registerQuery(r).mql.matches)}observe(a){let r=Z3(k1(a)).map(i=>this._registerQuery(i).observable),s=R1(r);return s=I1(s.pipe(O1(1)),s.pipe(U1(1),H1(0))),s.pipe(R2(i=>{let n={matches:!1,breakpoints:{}};return i.forEach(({matches:o,query:t})=>{n.matches=n.matches||o,n.breakpoints[t]=o}),n}))}_registerQuery(a){if(this._queries.has(a))return this._queries.get(a);let l=this._mediaMatcher.matchMedia(a),s={observable:new E1(i=>{let n=o=>this._zone.run(()=>i.next(o));return l.addListener(n),()=>{l.removeListener(n)}}).pipe(W1(l),R2(({matches:i})=>({query:a,matches:i})),q1(this._destroySubject)),mql:l};return this._queries.set(a,s),s}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function Z3(c){return c.map(e=>e.split(",")).reduce((e,a)=>e.concat(a)).map(e=>e.trim())}var G=(function(c){return c[c.NONE=0]="NONE",c[c.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",c[c.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",c})(G||{}),a0="cdk-high-contrast-black-on-white",l0="cdk-high-contrast-white-on-black",A1="cdk-high-contrast-active",T1=(()=>{class c{_platform=h(D2);_hasCheckedHighContrastMode;_document=h(u2);_breakpointSubscription;constructor(){this._breakpointSubscription=h(c0).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return G.NONE;let a=this._document.createElement("div");a.style.backgroundColor="rgb(1,2,3)",a.style.position="absolute",this._document.body.appendChild(a);let l=this._document.defaultView||window,r=l&&l.getComputedStyle?l.getComputedStyle(a):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(a.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return G.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return G.BLACK_ON_WHITE}return G.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let a=this._document.body.classList;a.remove(A1,a0,l0),this._hasCheckedHighContrastMode=!0;let l=this.getHighContrastMode();l===G.BLACK_ON_WHITE?a.add(A1,a0):l===G.WHITE_ON_BLACK&&a.add(A1,l0)}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=P({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var F1=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=k({type:c});static \u0275inj=w({})}return c})();var P1=(()=>{class c{constructor(){h(T1)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(l){return new(l||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[F1,F1]})}return c})();var e0=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[P1,P1]})}return c})();var r0=class c{static \u0275fac=function(a){return new(a||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[f4,_2,e0,z2,Q3,u4]})};export{r0 as HomeModule};
