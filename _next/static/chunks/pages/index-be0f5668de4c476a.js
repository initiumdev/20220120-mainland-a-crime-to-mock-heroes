(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1948)}])},1948:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return V},default:function(){return Z}});var n=i(5893),o=i(9008),r=i(7294),l=i(5697),a=i.n(l),_=i(8863),s=i.n(_),c=i(9613),d=i.n(c);function m(e){var t=e.desc,i=e.title,o=e.imageUrl,r=e.date,l=e.themeColor,a=e.updateDate,_=e.caption,c=new Date(a);return(0,n.jsx)("div",{className:d().hero,children:(0,n.jsxs)("div",{className:"wrapper",children:[(0,n.jsx)("div",{className:d().hero__bg,style:{backgroundImage:"url(".concat(o,")")},children:(0,n.jsx)("div",{className:d().hero__footer,children:_})}),(0,n.jsx)("div",{className:d().hero__text__wrapper,children:(0,n.jsxs)("div",{className:d().hero__text,children:[(0,n.jsx)("h2",{className:"h2 ".concat(d().hero__title," margin-top-xl margin-bottom-sm"),children:i}),(0,n.jsx)("div",{className:d().hero__desc,children:(0,n.jsx)(s(),{blocks:t})}),(0,n.jsxs)("div",{className:d().hero__datewrapper,children:[(0,n.jsxs)("div",{className:d().hero__date,children:["\u767c\u4f48\uff1a",r,"\xa0"]}),(0,n.jsx)("span",{style:{backgroundColor:l}}),(0,n.jsxs)("div",{className:d().hero__date,children:["\u66f4\u65b0\uff1a",c.getFullYear()+"-"+a.split("-")[1]+"-"+a.split("-")[2].split("T")[0]+" "+c.getHours()+":"+c.getMinutes()]})]})]})})]})})}m.propTypes={imageUrl:a().string.isRequired};var u=i(5675),C=i(7737),v=i.n(C),p=i(7400),h=i(9729),g=i.n(h)()({projectId:"7f0tqd7k",dataset:"production",useCdn:!0}),f=i(6803),x=i.n(f),j=i(2108),w=i.n(j),N=x()(g);var b=function(e,t){var i=new Date(e),n=e.split("-")[1],o=e.split("-")[2].split("T")[0],r=i.getHours(),l=i.getMinutes();return"start_time"!==t?n+"/"+o:n+"/"+o+" "+r+":"+l},k=function(e){var t=[];return null===e||void 0===e||e.forEach((function(e){t.push(e.value)})),t};function y(e){var t=e.themeColor,i=e.components,o={link:function(e){var i=e.children,o=e.mark;return(null===o||void 0===o?void 0:o.blank)?(0,n.jsx)("a",{href:null===o||void 0===o?void 0:o.href,className:"text-lightThemeColors-buttonColor",target:"_blank",rel:"noreferrer",style:{color:t},children:i}):(0,n.jsx)("a",{style:{color:t},href:null===o||void 0===o?void 0:o.href,children:i})},strong:function(e){var i=e.children;return(0,n.jsx)("strong",{style:{backgroundColor:t,color:"#000"},children:i})},em:function(e){var i=e.children;return(0,n.jsx)("strong",{style:{color:t},children:i})}},l=(0,r.useState)(["\u5168\u90e8"])[0],a=(0,r.useState)("\u5168\u90e8"),_=a[0],s=a[1],c=(0,r.useState)(["\u5168\u90e8"])[0],d=(0,r.useState)("\u5168\u90e8"),m=d[0],C=d[1],h=(0,r.useState)(-1),g=h[0],f=h[1];return(0,r.useEffect)((function(){null===i||void 0===i||i.forEach((function(e){!function(e){var t=e.split("-")[0],i=e.split("-")[1];l.includes(t+"/"+i)||l.push(t+"/"+i)}("start_date"===e.date_format?e.start_date:e.start_time)}));var e=function(){var e=0;null===i||void 0===i||i.forEach((function(t,i){var n=document.querySelector("#item"+i),o=2*-window.innerHeight/3+n.getBoundingClientRect().top;e+=o>0||o===2*-window.innerHeight/3?0:1})),f(e-1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),(0,n.jsxs)("div",{className:w().timeline,children:[(0,n.jsx)("div",{className:w().timeline__filter,children:(0,n.jsxs)("div",{className:w().timeline__filterwrapper,children:[(0,n.jsx)("div",{className:w().timeline__yearfilter,children:(0,n.jsx)(p.Z,{options:l,value:_,onChange:function(e){return t=e.value,void s(t);var t}})}),(0,n.jsx)("div",{className:w().timeline__tagfilter,children:(0,n.jsx)("div",{className:w().timeline__tagwrapper,children:(0,n.jsx)("div",{className:w().timeline__tagmax,children:function(){var e=[];return null===i||void 0===i||i.forEach((function(t){var i;null===(i=t.tags)||void 0===i||i.forEach((function(e){c.includes(e.value)||c.push(e.value)})),e=c})),e}().map((function(e,i){return(0,n.jsx)("span",{className:"".concat(w().timeline__tag," ").concat(m===e?w().active:""),style:{borderColor:t,backgroundColor:t},onClick:function(){return C(e)},children:e},i)}))})})})]})}),(0,n.jsx)("div",{className:"wrapper ".concat(w().timeline__wrapper),onScroll:function(){return handleScroll()},children:null===i||void 0===i?void 0:i.map((function(e,i){var r,l;return(0,n.jsxs)("div",{className:"".concat(w().item," ").concat(g===i?w().highlighted:""),id:"item"+i,style:{display:(l="start_date"===e.date_format?e.start_date:e.start_time,l.split("-")[0]+"/"+l.split("-")[1]!==_&&"\u5168\u90e8"!==_||!k(e.tags).includes(m)&&"\u5168\u90e8"!==m?"none":"flex")},children:[(0,n.jsxs)("div",{className:w().item__bullet,children:[(0,n.jsx)("span",{style:{backgroundColor:t}}),b("start_date"===e.date_format?e.start_date:e.start_time,e.date_format),e.end_date?" - ".concat(b(e.end_date)):""]}),(0,n.jsx)("div",{className:w().item__content__wrapper,children:(0,n.jsxs)("div",{className:w().item__content,children:[e.tags&&(0,n.jsx)("div",{className:w().item__tag,children:null===(r=e.tags)||void 0===r?void 0:r.map((function(e,i){return(0,n.jsx)("span",{className:"".concat(w().timeline__tag," ").concat(m===e.value?w().active:""),style:{borderColor:t,backgroundColor:t},children:e.value},i)}))}),e.title&&(0,n.jsx)("h2",{children:e.title}),e.description&&(0,n.jsx)("div",{className:w().item__desc,children:(0,n.jsx)(v(),{content:e.description,serializers:o})}),e.item_image&&(0,n.jsx)("div",{className:w().item__image__wrapper,children:e.item_image.map((function(e,t){var i,o,r;return e.asset&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.default,{alt:"profile",src:null===(o=null===(r=e.asset,i=N.image(r))||void 0===i?void 0:i.width(1400))||void 0===o?void 0:o.url(),layout:"fill",className:w().item__image},t),(0,n.jsx)("div",{className:w().item__caption,children:e.caption&&e.caption})]})}))}),e.link&&(0,n.jsxs)("a",{className:w().item__link,style:{backgroundColor:t,color:"#000"},href:e.link,target:"_blank",rel:"noreferrer",children:[e.Text?e.Text:"\u5ef6\u4f38\u95b1\u8b80"," \u2192"]})]})})]},i)}))})]})}y.propTypes={components:a().array.isRequired};var T=i(214),H=i.n(T),S=x()(g),E=i(9325);function M(e){return S.image(e)}var V=!0;function Z(e){var t,i,l,a,_,s,c,d,u,C,v=e.data,p=e.slug,h=E.Converter({from:"hk",to:"cn"}),g=JSON.parse(h(JSON.stringify(v))),f=(0,r.useState)("tc"),x=f[0],j=f[1],w=(0,r.useState)(v),N=w[0],b=w[1];(0,r.useEffect)((function(){var e=localStorage.getItem("lang")?localStorage.getItem("lang"):"tc";j(e),console.log(v)}),[]);return(0,n.jsxs)("div",{className:"container",style:{backgroundColor:"#202020",color:"#fff"},children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:null===N||void 0===N?void 0:N.cover_component.title}),(0,n.jsx)("meta",{name:"description",content:null===N||void 0===N?void 0:N.cover_component.description}),(0,n.jsx)("meta",{name:"keywords",content:"\u7aef\u50b3\u5a92,\u7aef,\u5a92\u9ad4,Initium,media,Initium Media,\u9999\u6e2f,\u53f0\u7063,\u4e2d\u570b,\u50b3\u5a92,\u65b0\u805e,\u9999\u6e2f\u5a92\u9ad4,\u7db2\u4e0a\u5a92\u9ad4,\u7db2\u7d61\u5a92\u9ad4,\u65b0\u5a92\u9ad4,\u9999\u6e2f\u65b0\u805e,\u53f0\u7063\u65b0\u805e,news,Hong Kong News,\u672c\u5730,\u570b\u969b,\u653f\u6cbb,\u6587\u5316,\u5169\u5cb8,\u6df1\u5ea6\u65b0\u805e,\u7126\u9ede\u65b0\u805e,\u6e2f\u805e,\u71b1\u9580\u65b0\u805e,\u6700\u65b0"}),(0,n.jsx)("meta",{property:"og:title",content:null===N||void 0===N?void 0:N.cover_component.title}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://theinitium.com/project/"+p}),(0,n.jsx)("meta",{property:"og:image",content:M(null===N||void 0===N||null===(t=N.cover_component)||void 0===t||null===(i=t.bd_image)||void 0===i?void 0:i.asset)}),(0,n.jsx)("meta",{property:"og:description",content:"5\u670831\u65e5\uff0c\u4ec7\u67d0\u660e\u88ab\u5224\u8655\u6709\u671f\u5f92\u5211\u516b\u500b\u6708\uff0c\u662f\u4fb5\u5bb3\u82f1\u96c4\u70c8\u58eb\u540d\u8b7d\u3001\u69ae\u8b7d\u7f6a\u6210\u70ba\u65b0\u7f6a\u540d\u5f8c\u7684\u5168\u570b\u9996\u4f8b\u3002\u4ed6\u5011\u767c\u8868\u4e86\u4ec0\u9ebc\u8a00\u8ad6\uff1f\u5728\u600e\u6a23\u7684\u60c5\u6cc1\u4e0b\u88ab\u8209\u5831\uff1f\u53c8\u906d\u53d7\u4e86\u4ec0\u9ebc\u61f2\u8655\uff1f\u6211\u5011\u76e4\u9ede\u4e86\u76f8\u95dc\u4e8b\u4ef6\uff0c\u4f9b\u8b80\u8005\u53c3\u95b2\u3002"}),(0,n.jsx)("meta",{name:"twitter:title",content:null===N||void 0===N?void 0:N.cover_component.title}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@initiumnews"}),(0,n.jsx)("meta",{name:"twitter:url",content:"https://theinitium.com/project/"+p}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:image",content:M(null===N||void 0===N||null===(l=N.cover_component)||void 0===l||null===(a=l.bd_image)||void 0===a?void 0:a.asset)}),(0,n.jsx)("meta",{name:"twitter:description",content:"5\u670831\u65e5\uff0c\u4ec7\u67d0\u660e\u88ab\u5224\u8655\u6709\u671f\u5f92\u5211\u516b\u500b\u6708\uff0c\u662f\u4fb5\u5bb3\u82f1\u96c4\u70c8\u58eb\u540d\u8b7d\u3001\u69ae\u8b7d\u7f6a\u6210\u70ba\u65b0\u7f6a\u540d\u5f8c\u7684\u5168\u570b\u9996\u4f8b\u3002\u4ed6\u5011\u767c\u8868\u4e86\u4ec0\u9ebc\u8a00\u8ad6\uff1f\u5728\u600e\u6a23\u7684\u60c5\u6cc1\u4e0b\u88ab\u8209\u5831\uff1f\u53c8\u906d\u53d7\u4e86\u4ec0\u9ebc\u61f2\u8655\uff1f\u6211\u5011\u76e4\u9ede\u4e86\u76f8\u95dc\u4e8b\u4ef6\uff0c\u4f9b\u8b80\u8005\u53c3\u95b2\u3002"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"./logo192.png"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(null===N||void 0===N||null===(_=N.cover_component)||void 0===_?void 0:_.bd_image)&&(0,n.jsx)(m,{title:null===N||void 0===N?void 0:N.cover_component.title,desc:null===N||void 0===N?void 0:N.cover_component.description,imageUrl:null===(u=null===(d=M(null===N||void 0===N||null===(s=N.cover_component)||void 0===s||null===(c=s.bd_image)||void 0===c?void 0:c.asset))||void 0===d?void 0:d.width(1400))||void 0===u?void 0:u.url(),date:null===N||void 0===N?void 0:N.cover_component.date,themeColor:null===N||void 0===N?void 0:N.theme_color,updateDate:null===N||void 0===N?void 0:N._updatedAt,caption:null===N||void 0===N||null===(C=N.cover_component)||void 0===C?void 0:C.caption}),(0,n.jsx)(y,{components:null===N||void 0===N?void 0:N.main_component,themeColor:null===N||void 0===N?void 0:N.theme_color}),(0,n.jsx)("button",{className:H().button,onClick:function(){"tc"===x?(j("sc"),b(g),localStorage.setItem("lang","sc")):(j("tc"),b(v),localStorage.setItem("lang","tc"))},children:"sc"===x?"\u7e41":"\u7b80"}),(0,n.jsx)("a",{className:H().logo,href:"https://theinitium.com",children:(0,n.jsxs)("svg",{viewBox:"0 0 56 56",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56ZM28 1.47656C13.3515 1.47656 1.47656 13.3515 1.47656 28C1.47656 42.6485 13.3515 54.5234 28 54.5234C42.6485 54.5234 54.5234 42.6485 54.5234 28C54.5234 13.3515 42.6485 1.47656 28 1.47656Z"}),(0,n.jsx)("path",{d:"M28.0765 6.69878C28.0765 8.02052 28.1316 9.03695 28.0765 10.4506C28.0658 10.7416 28.0518 10.9226 27.9387 11.0349C27.7747 11.1999 27.3348 11.1729 26.8391 11.1729C25.4417 11.1729 24.7165 11.1381 23.1564 11.1381C22.0138 11.1381 20.7266 11.1729 19.4751 11.1729C18.948 11.1729 18.5696 11.1663 18.4424 10.9667C18.3063 10.7524 18.3745 9.89209 18.3745 9.5556V5.90838C18.3745 5.62822 18.3454 5.33159 18.4078 5.21938C18.4498 5.1462 18.6365 5.06625 18.7527 5.04815H18.8208C19.1786 4.97596 19.7648 4.97891 19.9225 5.21938C20.0411 5.40181 19.9915 5.86945 19.9915 6.25226V8.45502C19.9915 8.79977 19.9311 9.34002 20.0257 9.48659C20.165 9.70452 21.3475 9.65256 21.8488 9.62473C21.9622 9.61718 22.0311 9.61078 22.1248 9.59011C22.2241 9.5673 22.3233 9.56419 22.3652 9.52115C22.5236 9.3561 22.4516 8.91931 22.4343 8.48941C22.3934 7.52697 22.4343 7.15477 22.4343 6.2178C22.4343 5.80169 22.3923 5.36397 22.5377 5.18607C22.7114 4.97033 23.6426 4.91323 23.8787 5.15041C24.1753 5.45032 23.993 6.74067 23.9822 7.28541C23.9782 7.53435 23.9822 8.03102 23.9822 8.4193C23.9822 8.81606 23.9228 9.3164 24.0514 9.48659C24.0933 9.54275 24.2043 9.56621 24.2918 9.59011C24.6184 9.67652 25.4289 9.64852 25.8754 9.62473C26.1136 9.61171 26.3183 9.60187 26.3905 9.52115C26.521 9.37568 26.4597 8.9442 26.4597 8.45502C26.4597 7.5892 26.4111 6.61582 26.4597 5.66699C26.4682 5.49664 26.4746 5.29495 26.4793 5.18749C26.4839 5.08484 26.5696 5.05887 26.661 5.0476C26.8419 5.02491 26.9791 5.01036 27.32 5.01353C27.4925 5.01555 27.6378 5.00691 27.7671 5.04815C27.876 5.08255 28.0097 5.15807 28.0433 5.21938C28.1608 5.44463 28.0765 6.24586 28.0765 6.69878ZM12.6965 26.4173C13.1825 26.4173 13.5018 26.2881 13.6256 26.6924C13.7132 26.9789 13.6957 27.6894 13.5223 27.862C13.2634 28.122 12.1262 27.9999 11.5612 27.9999H7.36363C6.91295 27.9999 5.63348 28.0932 5.43721 27.862C5.33363 27.7402 5.38635 27.0833 5.3834 26.7316C5.38291 26.6818 5.38635 26.5995 5.43623 26.5381C5.48397 26.4788 5.52307 26.4543 5.59159 26.4385C5.72126 26.4082 6.03101 26.4226 6.26173 26.4173C6.47294 26.412 6.70596 26.4325 6.91623 26.3483C6.94205 26.3375 7.05858 26.273 7.05405 26.2792C7.13695 26.1597 7.11458 25.544 7.12323 25.2121C7.17698 22.9255 7.12323 20.7714 7.12323 18.3993C7.12323 18.0456 7.16933 17.4657 7.05405 17.3334C6.84066 17.0863 5.75943 17.3751 5.50601 17.1248C5.39603 17.0194 5.39948 16.8005 5.40243 16.5073C5.40352 16.3242 5.37022 16.1256 5.43721 15.991C5.44345 15.9748 5.46193 15.9446 5.46816 15.9315C5.47363 15.9166 5.49425 15.8992 5.50601 15.8874C5.69375 15.6741 6.67162 15.7493 7.22565 15.7493H12.7998C12.8227 15.7493 12.8451 15.7503 12.8691 15.7493C12.9996 15.7429 13.4278 15.7136 13.5156 15.8309C13.5592 15.8889 13.575 15.9091 13.5913 15.9565C13.6992 16.2669 13.6968 17.0582 13.4535 17.1951C13.3013 17.2803 12.9917 17.2254 12.7309 17.2296C12.4947 17.2328 12.1792 17.194 12.0431 17.2975C11.8168 17.47 11.9051 18.4898 11.9051 19.1907C11.9051 21.221 11.8651 23.2747 11.9397 25.1431C11.9538 25.4923 11.872 26.0993 12.0087 26.2792C12.1304 26.44 12.4098 26.4173 12.6965 26.4173ZM10.2872 17.3334C10.1329 17.176 9.17728 17.2533 8.99802 17.2587C8.90762 17.2593 8.80765 17.2705 8.77243 17.3026C8.73021 17.3415 8.70205 17.3908 8.68439 17.4845C8.66683 17.6986 8.67126 18.0222 8.67126 18.296V21.8061C8.67126 23.1864 8.66574 24.0057 8.70473 25.2811C8.72179 25.792 8.67345 26.2318 8.80809 26.3483C8.97078 26.4874 10.1179 26.4788 10.2872 26.2792C10.4145 26.1306 10.3918 25.6627 10.3918 25.2465V19.5347C10.3918 19.0798 10.5112 17.5566 10.2872 17.3334ZM9.46095 11.4297C7.61858 11.4297 6.12502 9.93612 6.12502 8.09375C6.12502 6.25138 7.61858 4.75781 9.46095 4.75781C11.3033 4.75781 12.7969 6.25138 12.7969 8.09375C12.7969 9.93612 11.3033 11.4297 9.46095 11.4297ZM18.4078 21.1519C18.4078 20.4965 18.3398 19.526 18.6639 19.1334C18.8344 18.9271 19.1932 18.99 20.5068 18.9837C20.9045 18.982 21.4407 18.9871 21.8939 18.99C22.0567 18.9909 22.2845 18.9815 22.3652 18.9149C22.5161 18.792 22.555 18.0382 22.5032 17.6427C22.4516 17.2569 22.3802 17.2524 21.9522 17.2296C21.518 17.2061 20.8603 17.2296 20.4386 17.2296C19.7435 17.2296 18.7637 17.3539 18.5114 17.1248C18.3863 17.013 18.3961 16.7819 18.4078 16.4717C18.4144 16.3274 18.3809 16.1624 18.4078 16.0588C18.4108 16.0493 18.5416 15.8432 18.5802 15.8184C18.7452 15.7084 19.2001 15.7493 19.6464 15.7493H26.3905C26.7895 15.7493 27.1486 15.6977 27.5269 15.7148C27.5692 15.7171 27.7564 15.6741 27.8706 15.7493C28.1251 15.9177 28.1897 16.9557 27.9052 17.1607C27.6994 17.3073 27.2454 17.2296 26.976 17.2296C26.0853 17.2296 25.4871 17.2007 24.5329 17.2296C24.1236 17.2415 24.0016 17.2351 23.9478 17.608C23.9015 17.9197 23.907 18.7369 24.0514 18.8814C24.2561 19.0862 25.5497 18.9837 25.9789 18.9837C26.2827 18.9837 26.6256 18.9901 26.976 18.9837C27.1268 18.9815 27.3455 18.9773 27.4584 18.9773C28.0773 18.9784 28.0452 19.2642 28.0452 20.0446C28.0452 22.2862 28.0765 24.561 28.0765 26.7949C28.0765 27.2424 28.0839 27.7757 28.0016 27.8779C27.932 27.9644 27.7623 27.9979 27.5654 28.009V28.0093L27.5594 28.0095C27.4816 28.0136 27.4 28.0142 27.3184 28.0132L27.2526 28.0143C26.9372 28.0143 26.8689 28.0021 26.762 27.9542C26.7004 27.9267 26.6527 27.8917 26.6294 27.8141C26.6068 27.739 26.5943 27.6939 26.5843 27.5588C26.5721 27.394 26.5674 26.6102 26.5638 26.1843C26.5493 24.4874 26.5737 23.192 26.5582 21.3848C26.556 21.1403 26.5685 20.9101 26.5168 20.7132C26.456 20.4818 26.2115 20.4568 25.9975 20.4541C25.9699 20.4551 25.9411 20.4557 25.9104 20.4555C25.677 20.4539 25.483 20.4679 25.3917 20.5628C25.2451 20.7154 25.2898 22.0414 25.2898 22.3906C25.2898 23.4397 25.3183 25.4643 25.3183 26.5586C25.3183 27.1503 25.3418 27.7224 25.2568 27.8662C25.1995 27.9627 25.0488 27.9689 24.5325 27.9658L24.5324 27.9642C24.0759 27.9649 24.009 27.9727 23.9261 27.8568C23.8309 27.7244 23.8205 27.3731 23.8211 27.0043C23.8245 25.1302 23.8269 23.4295 23.8149 21.4652C23.8128 21.1268 23.8502 20.7212 23.776 20.604C23.685 20.4629 22.7952 20.4224 22.6882 20.5941C22.6081 20.7373 22.6085 20.921 22.6055 22.287C22.6019 23.9535 22.587 25.3101 22.6055 27.0373C22.61 27.3598 22.6382 27.6625 22.5066 27.8363C22.3882 27.9922 22.112 27.9668 21.8142 27.9657C21.464 27.9631 21.3059 27.9547 21.2034 27.7997C21.102 27.6464 21.1385 27.3424 21.1385 26.9277C21.1385 26.0043 21.1285 25.099 21.1305 24.1742C21.1321 23.4965 21.1266 22.9276 21.1266 22.287C21.1266 21.1223 21.1438 20.7769 21.0295 20.5835C20.9565 20.4602 20.8183 20.4486 20.2318 20.464C20.0061 20.4698 19.964 20.5322 19.9638 20.7125C19.9627 21.843 19.9649 23.166 19.9649 24.2839C19.9649 25.0849 19.9466 26.201 19.9649 27.0922C19.9677 27.3008 19.9724 27.5659 19.8958 27.7471C19.776 28.0306 19.1623 28.0863 18.7182 27.9657C18.6396 27.9439 18.4949 27.8996 18.4424 27.8277C18.3333 27.6746 18.3738 27.1939 18.3745 26.7612C18.3767 24.7951 18.4089 23.1839 18.4078 21.1519Z"})]})})]})}},9613:function(e){e.exports={hero:"Hero_hero__Pg0He",hero__bg:"Hero_hero__bg__Th0S0",hero__title:"Hero_hero__title__dJC0o",hero__text__wrapper:"Hero_hero__text__wrapper__1duaB",hero__text:"Hero_hero__text__oKFak",hero__desc:"Hero_hero__desc__l6qzy",hero__datewrapper:"Hero_hero__datewrapper__FgjWs",hero__date:"Hero_hero__date__Rx_HQ",hero__footer:"Hero_hero__footer__eEn55"}},2108:function(e){e.exports={timeline:"Timeline_timeline__pPS1b",item:"Timeline_item__qz2r7",highlighted:"Timeline_highlighted__V_8D9",item__bullet:"Timeline_item__bullet__KeaWi",item__tag:"Timeline_item__tag__fYSVG",item__content__wrapper:"Timeline_item__content__wrapper__g3O7Q",item__content:"Timeline_item__content__wYJSd",item__image:"Timeline_item__image__iBZ3_",item__image__wrapper:"Timeline_item__image__wrapper__dQcfV",item__caption:"Timeline_item__caption__tFZUK",item__link:"Timeline_item__link__t6aAO",timeline__filter:"Timeline_timeline__filter__VDzqu",timeline__filterwrapper:"Timeline_timeline__filterwrapper__D9MAP",timeline__yearfilter:"Timeline_timeline__yearfilter__xw3ge",timeline__tagfilter:"Timeline_timeline__tagfilter__PyzDg",timeline__tagwrapper:"Timeline_timeline__tagwrapper__mVt02",timeline__tagmax:"Timeline_timeline__tagmax__PpkzL",timeline__tag:"Timeline_timeline__tag__PuEEq",active:"Timeline_active__uHKVk",timeline__wrapper:"Timeline_timeline__wrapper__MNReB",item__desc:"Timeline_item__desc__8f_7E"}},214:function(e){e.exports={logo:"Home_logo__27_tb",button:"Home_button__Zs7A2",grid:"Home_grid__GxQ85"}}},function(e){e.O(0,[181,231,774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);