import{a as d4}from"./chunk-2JOGHCU5.js";import{$ as c4,A as u2,D as V1,E as $1,Ea as z4,F as K1,G as Y1,H as e2,Ja as $2,K as T,L as k,M as p2,Ma as u4,N as X1,O as W2,Oa as p4,R as d2,S as Q1,T as J1,U as Z1,V as r2,W as U,X as $,Y as M2,a as E1,aa as a4,b as B1,ba as l4,c as R1,ca as L2,d as I1,da as q2,e as H2,ea as j2,f as H1,g as O1,ga as G2,ha as v2,ia as e4,j as U1,k as W1,ka as r4,l as q1,la as s4,m as j1,ma as i4,na as n4,o as G1,pa as V2,qa as o4,r as D,ra as R,s as w,sa as x,v as h,va as f4,wa as t4,x as O2,xa as m4,y as U2}from"./chunk-I3GED7ZE.js";var t0={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},M4=t0;function a1(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,l=Array(e);a<e;a++)l[a]=c[a];return l}function m0(c){if(Array.isArray(c))return c}function z0(c){if(Array.isArray(c))return a1(c)}function u0(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function L4(c,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,Y4(l.key),l)}}function p0(c,e,a){return e&&L4(c.prototype,e),a&&L4(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function C2(c,e){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=M1(c))||e&&c&&typeof c.length=="number"){a&&(c=a);var l=0,r=function(){};return{s:r,n:function(){return l>=c.length?{done:!0}:{done:!1,value:c[l++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var o=a.next();return i=o.done,o},e:function(o){n=!0,s=o},f:function(){try{i||a.return==null||a.return()}finally{if(n)throw s}}}}function d(c,e,a){return(e=Y4(e))in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function d0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function M0(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var l,r,s,i,n=[],o=!0,t=!1;try{if(s=(a=a.call(c)).next,e===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=s.call(a)).done)&&(n.push(l.value),n.length!==e);o=!0);}catch(z){t=!0,r=z}finally{try{if(!o&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(t)throw r}}return n}}function L0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v4(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);e&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,l)}return a}function f(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?v4(Object(a),!0).forEach(function(l){d(c,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):v4(Object(a)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(a,l))})}return c}function w2(c,e){return m0(c)||M0(c,e)||M1(c,e)||L0()}function P(c){return z0(c)||d0(c)||M1(c)||v0()}function h0(c,e){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var l=a.call(c,e||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function Y4(c){var e=h0(c,"string");return typeof e=="symbol"?e:e+""}function b2(c){"@babel/helpers - typeof";return b2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b2(c)}function M1(c,e){if(c){if(typeof c=="string")return a1(c,e);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?a1(c,e):void 0}}var h4=function(){},L1={},X4={},Q4=null,J4={mark:h4,measure:h4};try{typeof window<"u"&&(L1=window),typeof document<"u"&&(X4=document),typeof MutationObserver<"u"&&(Q4=MutationObserver),typeof performance<"u"&&(J4=performance)}catch{}var g0=L1.navigator||{},g4=g0.userAgent,C4=g4===void 0?"":g4,q=L1,L=X4,x4=Q4,h2=J4,H5=!!q.document,O=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",Z4=~C4.indexOf("MSIE")||~C4.indexOf("Trident/"),K2,C0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,x0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,c3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},S0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],S="classic",f2="duotone",l3="sharp",e3="sharp-duotone",r3="chisel",s3="etch",i3="jelly",n3="jelly-duo",o3="jelly-fill",f3="notdog",t3="notdog-duo",m3="slab",z3="slab-press",u3="thumbprint",p3="whiteboard",b0="Classic",N0="Duotone",y0="Sharp",w0="Sharp Duotone",k0="Chisel",A0="Etch",T0="Jelly",F0="Jelly Duo",P0="Jelly Fill",_0="Notdog",D0="Notdog Duo",E0="Slab",B0="Slab Press",R0="Thumbprint",I0="Whiteboard",d3=[S,f2,l3,e3,r3,s3,i3,n3,o3,f3,t3,m3,z3,u3,p3],O5=(K2={},d(d(d(d(d(d(d(d(d(d(K2,S,b0),f2,N0),l3,y0),e3,w0),r3,k0),s3,A0),i3,T0),n3,F0),o3,P0),f3,_0),d(d(d(d(d(K2,t3,D0),m3,E0),z3,B0),u3,R0),p3,I0)),H0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},O0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},U0=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),W0={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},M3=["fak","fa-kit","fakd","fa-kit-duotone"],S4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},q0=["kit"],j0="kit",G0="kit-duotone",V0="Kit",$0="Kit Duotone",U5=d(d({},j0,V0),G0,$0),K0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Y0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},X0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},b4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Y2,g2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Q0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],J0="classic",Z0="duotone",c6="sharp",a6="sharp-duotone",l6="chisel",e6="etch",r6="jelly",s6="jelly-duo",i6="jelly-fill",n6="notdog",o6="notdog-duo",f6="slab",t6="slab-press",m6="thumbprint",z6="whiteboard",u6="Classic",p6="Duotone",d6="Sharp",M6="Sharp Duotone",L6="Chisel",v6="Etch",h6="Jelly",g6="Jelly Duo",C6="Jelly Fill",x6="Notdog",S6="Notdog Duo",b6="Slab",N6="Slab Press",y6="Thumbprint",w6="Whiteboard",W5=(Y2={},d(d(d(d(d(d(d(d(d(d(Y2,J0,u6),Z0,p6),c6,d6),a6,M6),l6,L6),e6,v6),r6,h6),s6,g6),i6,C6),n6,x6),d(d(d(d(d(Y2,o6,S6),f6,b6),t6,N6),m6,y6),z6,w6)),k6="kit",A6="kit-duotone",T6="Kit",F6="Kit Duotone",q5=d(d({},k6,T6),A6,F6),P6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},_6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},l1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},D6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],L3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Q0,D6),E6=["solid","regular","light","thin","duotone","brands","semibold"],v3=[1,2,3,4,5,6,7,8,9,10],B6=v3.concat([11,12,13,14,15,16,17,18,19,20]),R6=["aw","fw","pull-left","pull-right"],I6=[].concat(P(Object.keys(_6)),E6,R6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",g2.GROUP,g2.SWAP_OPACITY,g2.PRIMARY,g2.SECONDARY]).concat(v3.map(function(c){return"".concat(c,"x")})).concat(B6.map(function(c){return"w-".concat(c)})),H6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},I="___FONT_AWESOME___",e1=16,h3="fa",g3="svg-inline--fa",Y="data-fa-i2svg",r1="data-fa-pseudo-element",O6="data-fa-pseudo-element-pending",v1="data-prefix",h1="data-icon",N4="fontawesome-i2svg",U6="async",W6=["HTML","HEAD","STYLE","SCRIPT"],C3=["::before","::after",":before",":after"],x3=(function(){try{return!0}catch{return!1}})();function t2(c){return new Proxy(c,{get:function(a,l){return l in a?a[l]:a[S]}})}var S3=f({},c3);S3[S]=f(f(f(f({},{"fa-duotone":"duotone"}),c3[S]),S4.kit),S4["kit-duotone"]);var q6=t2(S3),s1=f({},W0);s1[S]=f(f(f(f({},{duotone:"fad"}),s1[S]),b4.kit),b4["kit-duotone"]);var y4=t2(s1),i1=f({},l1);i1[S]=f(f({},i1[S]),X0.kit);var g1=t2(i1),n1=f({},P6);n1[S]=f(f({},n1[S]),K0.kit);var j5=t2(n1),j6=C0,b3="fa-layers-text",G6=x0,V6=f({},H0),G5=t2(V6),$6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],X2=S0,K6=[].concat(P(q0),P(I6)),i2=q.FontAwesomeConfig||{};function Y6(c){var e=L.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function X6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(w4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],w4.forEach(function(c){var e=w2(c,2),a=e[0],l=e[1],r=X6(Y6(a));r!=null&&(i2[l]=r)}));var w4,N3={styleDefault:"solid",familyDefault:S,cssPrefix:h3,replacementClass:g3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};i2.familyPrefix&&(i2.cssPrefix=i2.familyPrefix);var a2=f(f({},N3),i2);a2.autoReplaceSvg||(a2.observeMutations=!1);var u={};Object.keys(N3).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){a2[c]=a,n2.forEach(function(l){return l(u)})},get:function(){return a2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){a2.cssPrefix=e,n2.forEach(function(a){return a(u)})},get:function(){return a2.cssPrefix}});q.FontAwesomeConfig=u;var n2=[];function Q6(c){return n2.push(c),function(){n2.splice(n2.indexOf(c),1)}}var W=e1,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function J6(c){if(!(!c||!O)){var e=L.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=L.head.childNodes,l=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(l=s)}return L.head.insertBefore(e,l),c}}var Z6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function k4(){for(var c=12,e="";c-- >0;)e+=Z6[Math.random()*62|0];return e}function l2(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function C1(c){return c.classList?l2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function y3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function c8(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(y3(c[a]),'" ')},"").trim()}function k2(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function x1(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function a8(c){var e=c.transform,a=c.containerWidth,l=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),n="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(s," ").concat(i," ").concat(n)},t={transform:"translate(".concat(l/2*-1," -256)")};return{outer:r,inner:o,path:t}}function l8(c){var e=c.transform,a=c.width,l=a===void 0?e1:a,r=c.height,s=r===void 0?e1:r,i=c.startCentered,n=i===void 0?!1:i,o="";return n&&Z4?o+="translate(".concat(e.x/W-l/2,"em, ").concat(e.y/W-s/2,"em) "):n?o+="translate(calc(-50% + ".concat(e.x/W,"em), calc(-50% + ").concat(e.y/W,"em)) "):o+="translate(".concat(e.x/W,"em, ").concat(e.y/W,"em) "),o+="scale(".concat(e.size/W*(e.flipX?-1:1),", ").concat(e.size/W*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var e8=`:root, :host {
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
}`;function w3(){var c=h3,e=g3,a=u.cssPrefix,l=u.replacementClass,r=e8;if(a!==c||l!==e){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(n,".".concat(l))}return r}var A4=!1;function Q2(){u.autoAddCss&&!A4&&(J6(w3()),A4=!0)}var r8={mixout:function(){return{dom:{css:w3,insertCss:Q2}}},hooks:function(){return{beforeDOMElementCreation:function(){Q2()},beforeI2svg:function(){Q2()}}}},H=q||{};H[I]||(H[I]={});H[I].styles||(H[I].styles={});H[I].hooks||(H[I].hooks={});H[I].shims||(H[I].shims=[]);var F=H[I],k3=[],A3=function(){L.removeEventListener("DOMContentLoaded",A3),N2=1,k3.map(function(e){return e()})},N2=!1;O&&(N2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),N2||L.addEventListener("DOMContentLoaded",A3));function s8(c){O&&(N2?setTimeout(c,0):k3.push(c))}function m2(c){var e=c.tag,a=c.attributes,l=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?y3(c):"<".concat(e," ").concat(c8(l),">").concat(s.map(m2).join(""),"</").concat(e,">")}function T4(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var i8=function(e,a){return function(l,r,s,i){return e.call(a,l,r,s,i)}},J2=function(e,a,l,r){var s=Object.keys(e),i=s.length,n=r!==void 0?i8(a,r):a,o,t,z;for(l===void 0?(o=1,z=e[s[0]]):(o=0,z=l);o<i;o++)t=s[o],z=n(z,e[t],t,e);return z};function T3(c){return P(c).length!==1?null:c.codePointAt(0).toString(16)}function F4(c){return Object.keys(c).reduce(function(e,a){var l=c[a],r=!!l.icon;return r?e[l.iconName]=l.icon:e[a]=l,e},{})}function o1(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=a.skipHooks,r=l===void 0?!1:l,s=F4(e);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(c,F4(e)):F.styles[c]=f(f({},F.styles[c]||{}),s),c==="fas"&&o1("fa",e)}var o2=F.styles,n8=F.shims,F3=Object.keys(g1),o8=F3.reduce(function(c,e){return c[e]=Object.keys(g1[e]),c},{}),S1=null,P3={},_3={},D3={},E3={},B3={};function f8(c){return~K6.indexOf(c)}function t8(c,e){var a=e.split("-"),l=a[0],r=a.slice(1).join("-");return l===c&&r!==""&&!f8(r)?r:null}var R3=function(){var e=function(s){return J2(o2,function(i,n,o){return i[o]=J2(n,s,{}),i},{})};P3=e(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var n=s[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=i})}return r}),_3=e(function(r,s,i){if(r[i]=i,s[2]){var n=s[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=i})}return r}),B3=e(function(r,s,i){var n=s[2];return r[i]=i,n.forEach(function(o){r[o]=i}),r});var a="far"in o2||u.autoFetchSvg,l=J2(n8,function(r,s){var i=s[0],n=s[1],o=s[2];return n==="far"&&!a&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});D3=l.names,E3=l.unicodes,S1=A2(u.styleDefault,{family:u.familyDefault})};Q6(function(c){S1=A2(c.styleDefault,{family:u.familyDefault})});R3();function b1(c,e){return(P3[c]||{})[e]}function m8(c,e){return(_3[c]||{})[e]}function K(c,e){return(B3[c]||{})[e]}function I3(c){return D3[c]||{prefix:null,iconName:null}}function z8(c){var e=E3[c],a=b1("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function j(){return S1}var H3=function(){return{prefix:null,iconName:null,rest:[]}};function u8(c){var e=S,a=F3.reduce(function(l,r){return l[r]="".concat(u.cssPrefix,"-").concat(r),l},{});return d3.forEach(function(l){(c.includes(a[l])||c.some(function(r){return o8[l].includes(r)}))&&(e=l)}),e}function A2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,l=a===void 0?S:a,r=q6[l][c];if(l===f2&&!c)return"fad";var s=y4[l][c]||y4[l][r],i=c in F.styles?c:null,n=s||i||null;return n}function p8(c){var e=[],a=null;return c.forEach(function(l){var r=t8(u.cssPrefix,l);r?a=r:l&&e.push(l)}),{iconName:a,rest:e}}function P4(c){return c.sort().filter(function(e,a,l){return l.indexOf(e)===a})}var _4=L3.concat(M3);function T2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,l=a===void 0?!1:a,r=null,s=P4(c.filter(function(p){return _4.includes(p)})),i=P4(c.filter(function(p){return!_4.includes(p)})),n=s.filter(function(p){return r=p,!a3.includes(p)}),o=w2(n,1),t=o[0],z=t===void 0?null:t,m=u8(s),M=f(f({},p8(i)),{},{prefix:A2(z,{family:m})});return f(f(f({},M),v8({values:c,family:m,styles:o2,config:u,canonical:M,givenPrefix:r})),d8(l,r,M))}function d8(c,e,a){var l=a.prefix,r=a.iconName;if(c||!l||!r)return{prefix:l,iconName:r};var s=e==="fa"?I3(r):{},i=K(l,r);return r=s.iconName||i||r,l=s.prefix||l,l==="far"&&!o2.far&&o2.fas&&!u.autoFetchSvg&&(l="fas"),{prefix:l,iconName:r}}var M8=d3.filter(function(c){return c!==S||c!==f2}),L8=Object.keys(l1).filter(function(c){return c!==S}).map(function(c){return Object.keys(l1[c])}).flat();function v8(c){var e=c.values,a=c.family,l=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,n=i===void 0?{}:i,o=c.config,t=o===void 0?{}:o,z=a===f2,m=e.includes("fa-duotone")||e.includes("fad"),M=t.familyDefault==="duotone",p=l.prefix==="fad"||l.prefix==="fa-duotone";if(!z&&(m||M||p)&&(l.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),!l.prefix&&M8.includes(a)){var g=Object.keys(n).find(function(b){return L8.includes(b)});if(g||t.autoFetchSvg){var v=U0.get(a).defaultShortPrefixId;l.prefix=v,l.iconName=K(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||s==="fa")&&(l.prefix=j()||"fas"),l}var h8=(function(){function c(){u0(this,c),this.definitions={}}return p0(c,[{key:"add",value:function(){for(var a=this,l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){a.definitions[n]=f(f({},a.definitions[n]||{}),i[n]),o1(n,i[n]);var o=g1[S][n];o&&o1(o,i[n]),R3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,l){var r=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(r).map(function(s){var i=r[s],n=i.prefix,o=i.iconName,t=i.icon,z=t[2];a[n]||(a[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[n][m]=t)}),a[n][o]=t}),a}}])})(),D4=[],Z={},c2={},g8=Object.keys(c2);function C8(c,e){var a=e.mixoutsTo;return D4=c,Z={},Object.keys(c2).forEach(function(l){g8.indexOf(l)===-1&&delete c2[l]}),D4.forEach(function(l){var r=l.mixout?l.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),b2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){a[i]||(a[i]={}),a[i][n]=r[i][n]})}),l.hooks){var s=l.hooks();Object.keys(s).forEach(function(i){Z[i]||(Z[i]=[]),Z[i].push(s[i])})}l.provides&&l.provides(c2)}),a}function f1(c,e){for(var a=arguments.length,l=new Array(a>2?a-2:0),r=2;r<a;r++)l[r-2]=arguments[r];var s=Z[c]||[];return s.forEach(function(i){e=i.apply(null,[e].concat(l))}),e}function X(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),l=1;l<e;l++)a[l-1]=arguments[l];var r=Z[c]||[];r.forEach(function(s){s.apply(null,a)})}function G(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return c2[c]?c2[c].apply(null,e):void 0}function t1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||j();if(e)return e=K(a,e)||e,T4(O3.definitions,a,e)||T4(F.styles,a,e)}var O3=new h8,x8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,X("noAuto")},S8={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(X("beforeI2svg",e),G("pseudoElements2svg",e),G("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,s8(function(){N8({autoReplaceSvgRoot:a}),X("watch",e)})}},b8={icon:function(e){if(e===null)return null;if(b2(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],l=A2(e[0]);return{prefix:l,iconName:K(l,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(j6))){var r=T2(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||j(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=j();return{prefix:s,iconName:K(s,e)||e}}}},y={noAuto:x8,config:u,dom:S8,parse:b8,library:O3,findIconDefinition:t1,toHtml:m2},N8=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,l=a===void 0?L:a;(Object.keys(F.styles).length>0||u.autoFetchSvg)&&O&&u.autoReplaceSvg&&y.dom.i2svg({node:l})};function F2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(l){return m2(l)})}}),Object.defineProperty(c,"node",{get:function(){if(O){var l=L.createElement("div");return l.innerHTML=c.html,l.children}}}),c}function y8(c){var e=c.children,a=c.main,l=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(x1(i)&&a.found&&!l.found){var n=a.width,o=a.height,t={x:n/o/2,y:.5};r.style=k2(f(f({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function w8(c){var e=c.prefix,a=c.iconName,l=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:l}]}]}function k8(c){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in c})}function N1(c){var e=c.icons,a=e.main,l=e.mask,r=c.prefix,s=c.iconName,i=c.transform,n=c.symbol,o=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=l.found?l:a,p=M.width,g=M.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(B){return t.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(t.classes).join(" "),b={children:[],attributes:f(f({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(g)})};!k8(t.attributes)&&!t.attributes["aria-hidden"]&&(b.attributes["aria-hidden"]="true"),m&&(b.attributes[Y]="");var C=f(f({},b),{},{prefix:r,iconName:s,main:a,mask:l,maskId:o,transform:i,symbol:n,styles:f({},t.styles)}),N=l.found&&a.found?G("generateAbstractMask",C)||{children:[],attributes:{}}:G("generateAbstractIcon",C)||{children:[],attributes:{}},A=N.children,J=N.attributes;return C.children=A,C.attributes=J,n?w8(C):y8(C)}function E4(c){var e=c.content,a=c.width,l=c.height,r=c.transform,s=c.extra,i=c.watchable,n=i===void 0?!1:i,o=f(f({},s.attributes),{},{class:s.classes.join(" ")});n&&(o[Y]="");var t=f({},s.styles);x1(r)&&(t.transform=l8({transform:r,startCentered:!0,width:a,height:l}),t["-webkit-transform"]=t.transform);var z=k2(t);z.length>0&&(o.style=z);var m=[];return m.push({tag:"span",attributes:o,children:[e]}),m}function A8(c){var e=c.content,a=c.extra,l=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=k2(a.styles);r.length>0&&(l.style=r);var s=[];return s.push({tag:"span",attributes:l,children:[e]}),s}var Z2=F.styles;function m1(c){var e=c[0],a=c[1],l=c.slice(4),r=w2(l,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(X2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(X2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(X2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:a,icon:i}}var T8={found:!1,width:512,height:512};function F8(c,e){!x3&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function z1(c,e){var a=e;return e==="fa"&&u.styleDefault!==null&&(e=j()),new Promise(function(l,r){if(a==="fa"){var s=I3(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&Z2[e]&&Z2[e][c]){var i=Z2[e][c];return l(m1(i))}F8(c,e),l(f(f({},T8),{},{icon:u.showMissingIcons&&c?G("missingIconAbstract")||{}:{}}))})}var B4=function(){},u1=u.measurePerformance&&h2&&h2.mark&&h2.measure?h2:{mark:B4,measure:B4},s2='FA "7.0.1"',P8=function(e){return u1.mark("".concat(s2," ").concat(e," begins")),function(){return U3(e)}},U3=function(e){u1.mark("".concat(s2," ").concat(e," ends")),u1.measure("".concat(s2," ").concat(e),"".concat(s2," ").concat(e," begins"),"".concat(s2," ").concat(e," ends"))},y1={begin:P8,end:U3},x2=function(){};function R4(c){var e=c.getAttribute?c.getAttribute(Y):null;return typeof e=="string"}function _8(c){var e=c.getAttribute?c.getAttribute(v1):null,a=c.getAttribute?c.getAttribute(h1):null;return e&&a}function D8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function E8(){if(u.autoReplaceSvg===!0)return S2.replace;var c=S2[u.autoReplaceSvg];return c||S2.replace}function B8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function R8(c){return L.createElement(c)}function W3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,l=a===void 0?c.tag==="svg"?B8:R8:a;if(typeof c=="string")return L.createTextNode(c);var r=l(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(W3(i,{ceFn:l}))}),r}function I8(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var S2={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(W3(r),a)}),a.getAttribute(Y)===null&&u.keepOriginalSource){var l=L.createComment(I8(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(e){var a=e[0],l=e[1];if(~C1(a).indexOf(u.replacementClass))return S2.replace(e);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var s=l[0].attributes.class.split(" ").reduce(function(n,o){return o===u.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});l[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=l.map(function(n){return m2(n)}).join(`
`);a.setAttribute(Y,""),a.innerHTML=i}};function I4(c){c()}function q3(c,e){var a=typeof e=="function"?e:x2;if(c.length===0)a();else{var l=I4;u.mutateApproach===U6&&(l=q.requestAnimationFrame||I4),l(function(){var r=E8(),s=y1.begin("mutate");c.map(r),s(),a()})}}var w1=!1;function j3(){w1=!0}function p1(){w1=!1}var y2=null;function H4(c){if(x4&&u.observeMutations){var e=c.treeCallback,a=e===void 0?x2:e,l=c.nodeCallback,r=l===void 0?x2:l,s=c.pseudoElementsCallback,i=s===void 0?x2:s,n=c.observeMutationsRoot,o=n===void 0?L:n;y2=new x4(function(t){if(!w1){var z=j();l2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!R4(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&R4(m.target)&&~$6.indexOf(m.attributeName))if(m.attributeName==="class"&&_8(m.target)){var M=T2(C1(m.target)),p=M.prefix,g=M.iconName;m.target.setAttribute(v1,p||z),g&&m.target.setAttribute(h1,g)}else D8(m.target)&&r(m.target)})}}),O&&y2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function H8(){y2&&y2.disconnect()}function O8(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(l,r){var s=r.split(":"),i=s[0],n=s.slice(1);return i&&n.length>0&&(l[i]=n.join(":").trim()),l},{})),a}function U8(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",r=T2(C1(c));return r.prefix||(r.prefix=j()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&l.length>0&&(r.iconName=m8(r.prefix,c.innerText)||b1(r.prefix,T3(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function W8(c){var e=l2(c.attributes).reduce(function(a,l){return a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a},{});return e}function q8(){return{iconName:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=U8(c),l=a.iconName,r=a.prefix,s=a.rest,i=W8(c),n=f1("parseNodeAttributes",{},c),o=e.styleParser?O8(c):[];return f({iconName:l,prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:i}},n)}var j8=F.styles;function G3(c){var e=u.autoReplaceSvg==="nest"?O4(c,{styleParser:!1}):O4(c);return~e.extra.classes.indexOf(b3)?G("generateLayersText",c,e):G("generateSvgReplacementMutation",c,e)}function G8(){return[].concat(P(M3),P(L3))}function U4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();var a=L.documentElement.classList,l=function(m){return a.add("".concat(N4,"-").concat(m))},r=function(m){return a.remove("".concat(N4,"-").concat(m))},s=u.autoFetchSvg?G8():a3.concat(Object.keys(j8));s.includes("fa")||s.push("fa");var i=[".".concat(b3,":not([").concat(Y,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(Y,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=l2(c.querySelectorAll(i))}catch{}if(n.length>0)l("pending"),r("complete");else return Promise.resolve();var o=y1.begin("onTree"),t=n.reduce(function(z,m){try{var M=G3(m);M&&z.push(M)}catch(p){x3||p.name==="MissingIcon"&&console.error(p)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){q3(M,function(){l("active"),l("complete"),r("pending"),typeof e=="function"&&e(),o(),z()})}).catch(function(M){o(),m(M)})})}function V8(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;G3(c).then(function(a){a&&q3([a],e)})}function $8(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(e||{}).icon?e:t1(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:t1(r||{})),c(l,f(f({},a),{},{mask:r}))}}var K8=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,r=l===void 0?E:l,s=a.symbol,i=s===void 0?!1:s,n=a.mask,o=n===void 0?null:n,t=a.maskId,z=t===void 0?null:t,m=a.classes,M=m===void 0?[]:m,p=a.attributes,g=p===void 0?{}:p,v=a.styles,b=v===void 0?{}:v;if(e){var C=e.prefix,N=e.iconName,A=e.icon;return F2(f({type:"icon"},e),function(){return X("beforeDOMElementCreation",{iconDefinition:e,params:a}),N1({icons:{main:m1(A),mask:o?m1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:f(f({},E),r),symbol:i,maskId:z,extra:{attributes:g,styles:b,classes:M}})})}},Y8={mixout:function(){return{icon:$8(K8)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=U4,a.nodeCallback=V8,a}}},provides:function(e){e.i2svg=function(a){var l=a.node,r=l===void 0?L:l,s=a.callback,i=s===void 0?function(){}:s;return U4(r,i)},e.generateSvgReplacementMutation=function(a,l){var r=l.iconName,s=l.prefix,i=l.transform,n=l.symbol,o=l.mask,t=l.maskId,z=l.extra;return new Promise(function(m,M){Promise.all([z1(r,s),o.iconName?z1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var g=w2(p,2),v=g[0],b=g[1];m([a,N1({icons:{main:v,mask:b},prefix:s,iconName:r,transform:i,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},e.generateAbstractIcon=function(a){var l=a.children,r=a.attributes,s=a.main,i=a.transform,n=a.styles,o=k2(n);o.length>0&&(r.style=o);var t;return x1(i)&&(t=G("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),l.push(t||s.icon),{children:l,attributes:r}}}},X8={mixout:function(){return{layer:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.classes,s=r===void 0?[]:r;return F2({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:a,params:l});var i=[];return a(function(n){Array.isArray(n)?n.map(function(o){i=i.concat(o.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(P(s)).join(" ")},children:i}]})}}}},Q8={mixout:function(){return{counter:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.title,s=r===void 0?null:r,i=l.classes,n=i===void 0?[]:i,o=l.attributes,t=o===void 0?{}:o,z=l.styles,m=z===void 0?{}:z;return F2({type:"counter",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:l}),A8({content:a.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(P(n))}})})}}}},J8={mixout:function(){return{text:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.transform,s=r===void 0?E:r,i=l.classes,n=i===void 0?[]:i,o=l.attributes,t=o===void 0?{}:o,z=l.styles,m=z===void 0?{}:z;return F2({type:"text",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:l}),E4({content:a,transform:f(f({},E),s),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(P(n))}})})}}},provides:function(e){e.generateLayersText=function(a,l){var r=l.transform,s=l.extra,i=null,n=null;if(Z4){var o=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();i=t.width/o,n=t.height/o}return Promise.resolve([a,E4({content:a.innerHTML,width:i,height:n,transform:r,extra:s,watchable:!0})])}}},V3=new RegExp('"',"ug"),W4=[1105920,1112319],q4=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),O0),H6),Y0),d1=Object.keys(q4).reduce(function(c,e){return c[e.toLowerCase()]=q4[e],c},{}),Z8=Object.keys(d1).reduce(function(c,e){var a=d1[e];return c[e]=a[900]||P(Object.entries(a))[0][1],c},{});function c5(c){var e=c.replace(V3,"");return T3(P(e)[0]||"")}function a5(c){var e=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),l=a.replace(V3,""),r=l.codePointAt(0),s=r>=W4[0]&&r<=W4[1],i=l.length===2?l[0]===l[1]:!1;return s||i||e}function l5(c,e){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(e),r=isNaN(l)?"normal":l;return(d1[a]||{})[r]||Z8[a]}function j4(c,e){var a="".concat(O6).concat(e.replace(":","-"));return new Promise(function(l,r){if(c.getAttribute(a)!==null)return l();var s=l2(c.children),i=s.filter(function(R2){return R2.getAttribute(r1)===e})[0],n=q.getComputedStyle(c,e),o=n.getPropertyValue("font-family"),t=o.match(G6),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(i&&!t)return c.removeChild(i),l();if(t&&m!=="none"&&m!==""){var M=n.getPropertyValue("content"),p=l5(o,z),g=c5(M),v=t[0].startsWith("FontAwesome"),b=a5(n),C=b1(p,g),N=C;if(v){var A=z8(g);A.iconName&&A.prefix&&(C=A.iconName,p=A.prefix)}if(C&&!b&&(!i||i.getAttribute(v1)!==p||i.getAttribute(h1)!==N)){c.setAttribute(a,N),i&&c.removeChild(i);var J=q8(),B=J.extra;B.attributes[r1]=e,z1(C,p).then(function(R2){var o0=N1(f(f({},J),{},{icons:{main:R2,mask:H3()},prefix:p,iconName:N,extra:B,watchable:!0})),I2=L.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(I2,c.firstChild):c.appendChild(I2),I2.outerHTML=o0.map(function(f0){return m2(f0)}).join(`
`),c.removeAttribute(a),l()}).catch(r)}else l()}else l()})}function e5(c){return Promise.all([j4(c,"::before"),j4(c,"::after")])}function r5(c){return c.parentNode!==document.head&&!~W6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(r1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var s5=function(e){return!!e&&C3.some(function(a){return e.includes(a)})},i5=function(e){if(!e)return[];var a=new Set,l=e.split(/,(?![^()]*\))/).map(function(o){return o.trim()});l=l.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(t){return t.trim()})});var r=C2(l),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(s5(i)){var n=C3.reduce(function(o,t){return o.replace(t,"")},i);n!==""&&n!=="*"&&a.add(n)}}}catch(o){r.e(o)}finally{r.f()}return a};function G4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O){var a;if(e)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var l=new Set,r=C2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var n=C2(i.cssRules),o;try{for(n.s();!(o=n.n()).done;){var t=o.value,z=i5(t.selectorText),m=C2(z),M;try{for(m.s();!(M=m.n()).done;){var p=M.value;l.add(p)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!l.size)return;var g=Array.from(l).join(", ");try{a=c.querySelectorAll(g)}catch{}}return new Promise(function(v,b){var C=l2(a).filter(r5).map(e5),N=y1.begin("searchPseudoElements");j3(),Promise.all(C).then(function(){N(),p1(),v()}).catch(function(){N(),p1(),b()})})}}var n5={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=G4,a}}},provides:function(e){e.pseudoElements2svg=function(a){var l=a.node,r=l===void 0?L:l;u.searchPseudoElements&&G4(r)}}},V4=!1,o5={mixout:function(){return{dom:{unwatch:function(){j3(),V4=!0}}}},hooks:function(){return{bootstrap:function(){H4(f1("mutationObserverCallbacks",{}))},noAuto:function(){H8()},watch:function(a){var l=a.observeMutationsRoot;V4?p1():H4(f1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},$4=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(l,r){var s=r.toLowerCase().split("-"),i=s[0],n=s.slice(1).join("-");if(i&&n==="h")return l.flipX=!0,l;if(i&&n==="v")return l.flipY=!0,l;if(n=parseFloat(n),isNaN(n))return l;switch(i){case"grow":l.size=l.size+n;break;case"shrink":l.size=l.size-n;break;case"left":l.x=l.x-n;break;case"right":l.x=l.x+n;break;case"up":l.y=l.y-n;break;case"down":l.y=l.y+n;break;case"rotate":l.rotate=l.rotate+n;break}return l},a)},f5={mixout:function(){return{parse:{transform:function(a){return $4(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-transform");return r&&(a.transform=$4(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var l=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,n={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(t," ").concat(z)},M={transform:"translate(".concat(i/2*-1," -256)")},p={outer:n,inner:m,path:M};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:f(f({},l.icon.attributes),p.path)}]}]}}}},c1={x:0,y:0,width:"100%",height:"100%"};function K4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function t5(c){return c.tag==="g"?c.children:[c]}var m5={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-mask"),s=r?T2(r.split(" ").map(function(i){return i.trim()})):H3();return s.prefix||(s.prefix=j()),a.mask=s,a.maskId=l.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var l=a.children,r=a.attributes,s=a.main,i=a.mask,n=a.maskId,o=a.transform,t=s.width,z=s.icon,m=i.width,M=i.icon,p=a8({transform:o,containerWidth:m,iconWidth:t}),g={tag:"rect",attributes:f(f({},c1),{},{fill:"white"})},v=z.children?{children:z.children.map(K4)}:{},b={tag:"g",attributes:f({},p.inner),children:[K4(f({tag:z.tag,attributes:f(f({},z.attributes),p.path)},v))]},C={tag:"g",attributes:f({},p.outer),children:[b]},N="mask-".concat(n||k4()),A="clip-".concat(n||k4()),J={tag:"mask",attributes:f(f({},c1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,C]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:t5(M)},J]};return l.push(B,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(N,")")},c1)}),{children:l,attributes:r}}}},z5={provides:function(e){var a=!1;q.matchMedia&&(a=q.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var l=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:f(f({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),l.push(n),l.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},u5={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},p5=[r8,Y8,X8,Q8,J8,n5,o5,f5,m5,z5,u5];C8(p5,{mixoutsTo:y});var V5=y.noAuto,$3=y.config,$5=y.library,K3=y.dom,Y3=y.parse,K5=y.findIconDefinition,Y5=y.toHtml,X3=y.icon,X5=y.layer,d5=y.text,M5=y.counter;var L5=["*"],v5=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){$3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(l){return new(l||c)};static \u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),h5=(()=>{class c{definitions={};addIcons(...a){for(let l of a){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let r of l.icon[2])typeof r=="string"&&(this.definitions[l.prefix][r]=l)}}addIconPacks(...a){for(let l of a){let r=Object.keys(l).map(s=>l[s]);this.addIcons(...r)}}getIconDefinition(a,l){return a in this.definitions&&l in this.definitions[a]?this.definitions[a][l]:null}static \u0275fac=function(l){return new(l||c)};static \u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),g5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},C5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},J3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),x5=c=>{let e=J3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(l=>a[l]?l:null).filter(l=>l!=null)},k1=new WeakSet,Q3="fa-auto-css";function S5(c,e){if(!e.autoAddCss||k1.has(c))return;if(c.getElementById(Q3)!=null){e.autoAddCss=!1,k1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",Q3),a.innerHTML=K3.css();let l=c.head.childNodes,r=null;for(let s=l.length-1;s>-1;s--){let i=l[s],n=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}c.head.insertBefore(a,r),e.autoAddCss=!1,k1.add(c)}var b5=c=>c.prefix!==void 0&&c.iconName!==void 0,N5=(c,e)=>b5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},y5=(()=>{class c{stackItemSize=R("1x");size=R();_effect=o4(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(l){return new(l||c)};static \u0275dir=p2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),w5=(()=>{class c{size=R();classes=V2(()=>{let a=this.size(),l=a?{[`fa-${a}`]:!0}:{};return B1(E1({},l),{"fa-stack":!0})});static \u0275fac=function(l){return new(l||c)};static \u0275cmp=T({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(l,r){l&2&&G2(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:L5,decls:1,vars:0,template:function(l,r){l&1&&(q2(),j2(0))},encapsulation:2,changeDetection:0})}return c})(),z2=(()=>{class c{icon=x();title=x();animation=x();mask=x();flip=x();size=x();pull=x();border=x();inverse=x();symbol=x();rotate=x();fixedWidth=x();transform=x();a11yRole=x();renderedIconHTML=V2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return C5(),"";let l=this.findIconDefinition(a);if(!l)return"";let r=this.buildParams();S5(this.document,this.config);let s=X3(l,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=h(u2);sanitizer=h(z4);config=h(v5);iconLibrary=h(h5);stackItem=h(y5,{optional:!0});stack=h(w5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let l=N5(a,this.config.defaultPrefix);if("icon"in l)return l;let r=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return r??(g5(l),null)}buildParams(){let a=this.fixedWidth(),l={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?Y3.transform(r):r,i=this.mask(),n=i!=null?this.findIconDefinition(i):null,o={},t=this.a11yRole();t!=null&&(o.role=t);let z={};return l.rotate!=null&&!J3(l.rotate)&&(z["--fa-rotate-angle"]=`${l.rotate}`),{title:this.title(),transform:s,classes:x5(l),mask:n??void 0,symbol:this.symbol(),attributes:o,styles:z}}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=T({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,r){l&2&&(a4("innerHTML",r.renderedIconHTML(),Y1),d2("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(l,r){},encapsulation:2,changeDetection:0})}return c})(),Z3=(()=>{class c extends z2{swapOpacity=R();primaryOpacity=R();secondaryOpacity=R();primaryColor=R();secondaryColor=R();findIconDefinition(a){let l=super.findIconDefinition(a);if(l!=null&&!Array.isArray(l.icon[4]))throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${l.iconName}']" /> or use: <fa-icon icon="${l.iconName}" /> instead.`);return l}buildParams(){let a=super.buildParams(),l=this.swapOpacity();(l===!0||l==="true")&&(Array.isArray(a.classes)?a.classes.push("fa-swap-opacity"):typeof a.classes=="string"?a.classes=[a.classes,"fa-swap-opacity"]:a.classes=["fa-swap-opacity"]),a.styles==null&&(a.styles={});let r=this.primaryOpacity();r!=null&&(a.styles["--fa-primary-opacity"]=r.toString());let s=this.secondaryOpacity();s!=null&&(a.styles["--fa-secondary-opacity"]=s.toString());let i=this.primaryColor();i!=null&&(a.styles["--fa-primary-color"]=i);let n=this.secondaryColor();return n!=null&&(a.styles["--fa-secondary-color"]=n),a}static \u0275fac=(()=>{let a;return function(r){return(a||(a=V1(c)))(r||c)}})();static \u0275cmp=T({type:c,selectors:[["fa-duotone-icon"]],inputs:{swapOpacity:[1,"swapOpacity"],primaryOpacity:[1,"primaryOpacity"],secondaryOpacity:[1,"secondaryOpacity"],primaryColor:[1,"primaryColor"],secondaryColor:[1,"secondaryColor"]},features:[X1],decls:0,vars:0,template:function(l,r){},encapsulation:2,changeDetection:0})}return c})();var A5=()=>[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],T5=c=>({"animation-delay":c});function F5(c,e){if(c&1){let a=c4();U(0,"div",1),l4("mouseenter",function(){O2(a);let r=L2();return U2(r.playHoverSound())})("click",function(){let r=O2(a).$index,s=L2();return U2(s.openChild("window-"+r,"/home/test-component"))}),U(1,"div",2),M2(2,"fa-icon",3),$(),U(3,"div",4)(4,"h2"),v2(5),i4(6,"translate"),$()()()}if(c&2){let a=e.$index,l=L2();r2("ngStyle",s4(5,T5,a*.1+"s")),e2(2),r2("icon",l.faIcon()),e2(3),e4(n4(6,3,"system.modules.home.title"))}}var P2=class c{faIcon=x("");soundsReady=!1;tapSound;electron=h(d4);ngOnInit(){document.body.offsetHeight,this.tapSound=new Audio("/assets/sounds/tap-tone.wav"),this.tapSound.volume=.3;let e=()=>{this.soundsReady=!0,this.tapSound.play().catch(a=>console.warn("Tap sound blocked",a)),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};document.addEventListener("click",e),document.addEventListener("keydown",e)}playHoverSound(){this.soundsReady&&this.tapSound&&(this.tapSound.currentTime=0,this.tapSound.play().catch(()=>{}))}openChild(e,a){this.electron.openChildWindow(e,a)}static \u0275fac=function(a){return new(a||c)};static \u0275cmp=T({type:c,selectors:[["app-menu-item"]],inputs:{faIcon:[1,"faIcon"]},outputs:{faIcon:"faIconChange"},standalone:!1,decls:2,vars:1,consts:[[1,"home-menu-item-card",3,"ngStyle"],[1,"home-menu-item-card",3,"mouseenter","click","ngStyle"],[1,"img-icon"],[3,"icon"],[1,"menu-item-title"]],template:function(a,l){a&1&&J1(0,F5,7,7,"div",0,Q1),a&2&&Z1(r4(0,A5))},dependencies:[f4,z2,u4],styles:[".home-menu-item-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;gap:12px;text-shadow:0 0 8px cyan;border:1px solid rgba(0,255,255,.4);animation:zoomIn .5s ease-in-out;transition:all .3s ease}.home-menu-item-card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#e0ffff;font-size:30px}.home-menu-item-card[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:0 0 10px #0ff9,0 0 10px #0ff6;transform:scale(1)}"]})};var _2=class c{faHome=M4;static \u0275fac=function(a){return new(a||c)};static \u0275cmp=T({type:c,selectors:[["app-home"]],standalone:!1,decls:4,vars:1,consts:[[1,"home-container"],[1,"home-content"],[1,"items"],[3,"faIcon"]],template:function(a,l){a&1&&(U(0,"div",0)(1,"div",1)(2,"div",2),M2(3,"app-menu-item",3),$()()()),a&2&&(e2(3),r2("faIcon",l.faHome))},dependencies:[P2],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.home-container[_ngcontent-%COMP%]{padding:50px 16px;width:100%}.home-content[_ngcontent-%COMP%]{width:100%}.home-content[_ngcontent-%COMP%]   app-menu-item[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));grid-gap:16px}"]})};var D2=class c{static \u0275fac=function(a){return new(a||c)};static \u0275cmp=T({type:c,selectors:[["app-test-component"]],standalone:!1,decls:2,vars:0,template:function(a,l){a&1&&(U(0,"p"),v2(1,"test-component works!"),$())},encapsulation:2})};var _5=[{path:"",component:_2},{path:"test-component",component:D2}],E2=class c{static \u0275fac=function(a){return new(a||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[$2.forChild(_5),$2]})};var A1;try{A1=typeof Intl<"u"&&Intl.v8BreakIterator}catch{A1=!1}var B2=(()=>{class c{_platformId=h($1);isBrowser=this._platformId?m4(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||A1)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(l){return new(l||c)};static \u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function T1(c){return Array.isArray(c)?c:[c]}var a0=new Set,Q,D5=(()=>{class c{_platform=h(B2);_nonce=h(K1,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):B5}matchMedia(a){return(this._platform.WEBKIT||this._platform.BLINK)&&E5(a,this._nonce),this._matchMedia(a)}static \u0275fac=function(l){return new(l||c)};static \u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function E5(c,e){if(!a0.has(c))try{Q||(Q=document.createElement("style"),e&&Q.setAttribute("nonce",e),Q.setAttribute("type","text/css"),document.head.appendChild(Q)),Q.sheet&&(Q.sheet.insertRule(`@media ${c} {body{ }}`,0),a0.add(c))}catch(a){console.error(a)}}function B5(c){return{matches:c==="all"||c==="",media:c,addListener:()=>{},removeListener:()=>{}}}var e0=(()=>{class c{_mediaMatcher=h(D5);_zone=h(W2);_queries=new Map;_destroySubject=new I1;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(a){return l0(T1(a)).some(r=>this._registerQuery(r).mql.matches)}observe(a){let r=l0(T1(a)).map(i=>this._registerQuery(i).observable),s=H1(r);return s=O1(s.pipe(W1(1)),s.pipe(q1(1),U1(0))),s.pipe(H2(i=>{let n={matches:!1,breakpoints:{}};return i.forEach(({matches:o,query:t})=>{n.matches=n.matches||o,n.breakpoints[t]=o}),n}))}_registerQuery(a){if(this._queries.has(a))return this._queries.get(a);let l=this._mediaMatcher.matchMedia(a),s={observable:new R1(i=>{let n=o=>this._zone.run(()=>i.next(o));return l.addListener(n),()=>{l.removeListener(n)}}).pipe(j1(l),H2(({matches:i})=>({query:a,matches:i})),G1(this._destroySubject)),mql:l};return this._queries.set(a,s),s}static \u0275fac=function(l){return new(l||c)};static \u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();function l0(c){return c.map(e=>e.split(",")).reduce((e,a)=>e.concat(a)).map(e=>e.trim())}var V=(function(c){return c[c.NONE=0]="NONE",c[c.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",c[c.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",c})(V||{}),r0="cdk-high-contrast-black-on-white",s0="cdk-high-contrast-white-on-black",F1="cdk-high-contrast-active",P1=(()=>{class c{_platform=h(B2);_hasCheckedHighContrastMode;_document=h(u2);_breakpointSubscription;constructor(){this._breakpointSubscription=h(e0).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return V.NONE;let a=this._document.createElement("div");a.style.backgroundColor="rgb(1,2,3)",a.style.position="absolute",this._document.body.appendChild(a);let l=this._document.defaultView||window,r=l&&l.getComputedStyle?l.getComputedStyle(a):null,s=(r&&r.backgroundColor||"").replace(/ /g,"");switch(a.remove(),s){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return V.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return V.BLACK_ON_WHITE}return V.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let a=this._document.body.classList;a.remove(F1,r0,s0),this._hasCheckedHighContrastMode=!0;let l=this.getHighContrastMode();l===V.BLACK_ON_WHITE?a.add(F1,r0):l===V.WHITE_ON_BLACK&&a.add(F1,s0)}}static \u0275fac=function(l){return new(l||c)};static \u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var _1=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=k({type:c});static \u0275inj=w({})}return c})();var D1=(()=>{class c{constructor(){h(P1)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(l){return new(l||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[_1,_1]})}return c})();var i0=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[D1,D1]})}return c})();var n0=class c{static \u0275fac=function(a){return new(a||c)};static \u0275mod=k({type:c});static \u0275inj=w({imports:[t4,E2,i0,z2,Z3,p4]})};export{n0 as HomeModule};
