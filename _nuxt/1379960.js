(window.webpackJsonp=window.webpackJsonp||[]).push([[33,7,8,9,15,20,21,22,23],{409:function(t,n,e){"use strict";e.r(n),e.d(n,"TextStyled",(function(){return f})),e.d(n,"LinkStyledButton",(function(){return h})),e.d(n,"Scrollbar",(function(){return m}));var r,o,c,l=e(2),d=(e(168),e(3)),f=Object(d.c)("div",{fontWeight:Number,fontSize:Number,header:Boolean,color:String,error:Boolean,lineHeight:String})(r||(r=Object(l.a)(["\n    font-weight: ",";\n    font-size: ","px;\n    color: ",";\n    box-sizing: border-box;\n    margin: 0px;\n    min-width: 0px;\n    line-height: ",";\n"])),(function(t){return t.fontWeight}),(function(t){return t.fontSize}),(function(t){var n=t.theme,header=t.header,e=t.color,r=t.error;return e||(r?n.red1:header?n.text1:n.text2)}),(function(t){var n=t.lineHeight;return n||"1rem"})),h=Object(d.c)("button",{disabled:Boolean})(o||(o=Object(l.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",";\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(t){return t.disabled?"default":"pointer"}),(function(t){var n=t.theme;return t.disabled?n.text2:n.primary1}),(function(t){return t.disabled?null:"underline"}),(function(t){return t.disabled?null:"underline"})),m=Object(d.b)(c||(c=Object(l.a)(["\n::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n  border-radius: 3px;\n}\n\n::-webkit-scrollbar-corner {\n  display: none;\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(0,0,0,0);\n}\n\n::-webkit-scrollbar-thumb {\n  background: ",";\n  border-radius: 3px;\n}\n"])),(function(t){return t.theme.primary1}))},410:function(t,n,e){var content=e(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(102).default)("7e6cd903",content,!0,{sourceMap:!1})},442:function(t,n,e){"use strict";e.r(n);e(31),e(28),e(32),e(16),e(36),e(27),e(37);var r,o,c,l,d,f,h=e(5),m=e(2),x=e(3),v=e(409);function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var O={components:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){Object(h.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},{HeroButtonsSection:x.c.div(r||(r=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  gap: 26px;\n"]))),LaunchButton:x.c.div(o||(o=Object(m.a)(["\n  cursor: pointer;\n  height: fit-content;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 28px;\n  border-radius: 8px;\n  outline: none;\n  border: 1px solid transparent;\n  background: ",";\n  background-clip: padding-box;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    z-index: -1;\n    margin: -1px;\n    border-radius: inherit;\n    background: ",";\n  }\n"])),(function(t){return t.theme.bg1}),(function(t){return t.theme.gradient1()})),LaunchText:Object(x.c)(v.TextStyled)(c||(c=Object(m.a)(["\n  padding: 1px 0;\n  font-family: 'Inter';\n  font-size: 14px;\n  font-weight: 600;\n  background: ",";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])),(function(t){return t.theme.gradient1()})),TwitterButton:x.c.button(l||(l=Object(m.a)(["\n  cursor: pointer;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 12px 16px;\n  border-radius: 8px;\n  outline: none;\n  border: 1px solid ",";\n  background: ",";\n"])),(function(t){return t.theme.text1}),(function(t){return t.theme.bg1})),TwitterButtonImage:x.c.svg(d||(d=Object(m.a)(["\n  width: 16px;\n  height: 16px;\n"]))),TwitterText:Object(x.c)(v.TextStyled)(f||(f=Object(m.a)(["\n  font-family: 'Inter';\n  font-size: 14px;\n  font-weight: 600;\n  margin-left: 16px;\n  color: ",";\n"])),(function(t){return t.theme.text1}))}),methods:{launchApp:function(){window.location="/#/editor"},openTwitter:function(){window.open("https://twitter.com/idhatthat")}}},j=O,y=e(20),component=Object(y.a)(j,(function(){var t=this,n=t._self._c;return n("HeroButtonsSection",[n("LaunchButton",{on:{click:function(n){return t.launchApp()}}},[n("LaunchText",[t._v(" Launch Editor ")])],1),t._v(" "),n("TwitterButton",{on:{click:function(n){return t.openTwitter()}}},[n("TwitterButtonImage",{attrs:{width:"1200",height:"1227",viewBox:"0 0 1200 1227",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",fill:t.theme.text1}})]),t._v(" "),n("TwitterText",[t._v("Twitter")])],1)],1)}),[],!1,null,null,null);n.default=component.exports},445:function(t,n,e){"use strict";var r=e(6),o=e(446);r({target:"String",proto:!0,forced:e(447)("link")},{link:function(t){return o(this,"a","href",t)}})},446:function(t,n,e){"use strict";var r=e(8),o=e(33),c=e(18),l=/"/g,d=r("".replace);t.exports=function(t,n,e,r){var f=c(o(t)),h="<"+n;return""!==e&&(h+=" "+e+'="'+d(c(r),l,"&quot;")+'"'),h+">"+f+"</"+n+">"}},447:function(t,n,e){"use strict";var r=e(7);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},448:function(t,n,e){"use strict";e(410)},449:function(t,n,e){var r=e(101)((function(i){return i[1]}));r.push([t.i,".slider[data-v-0507873c],.slider img[data-v-0507873c]{height:auto;width:340px}",""]),r.locals={},t.exports=r},457:function(t,n,e){"use strict";e.r(n);var r,o,c,l,d,f=e(5),h=e(2),m=(e(445),e(31),e(28),e(32),e(16),e(36),e(27),e(37),e(3));function x(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var v={components:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?x(Object(e),!0).forEach((function(n){Object(f.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},{Wrapper:m.c.div(r||(r=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n"]))),HeroTextSection:m.c.div(o||(o=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),HeroHeader:m.c.div(c||(c=Object(h.a)(["\n  font-size: 2.5rem;\n  font-weight: 600;\n  ",";\n"])),(function(t){return t.theme.text1})),HeroSubheader:m.c.div(l||(l=Object(h.a)(["\n  width: 300px;\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: -.02rem;\n  color: ",";\n"])),(function(t){return t.theme.text2})),CoinLink:m.c.a(d||(d=Object(h.a)(["\n  text-decoration: underline;\n  color: ",";;\n"])),(function(t){return t.theme.link}))})},w=v,O=e(20),component=Object(O.a)(w,(function(){var t=this,n=t._self._c;return n("Wrapper",[n("HeroTextSection",[n("HeroHeader",[t._v("I'd Hat That")]),t._v(" "),n("HeroSubheader",[t._v("An in-browser image editor for making "),n("CoinLink",{attrs:{target:"_blank",href:"https://dexscreener.com/solana/ep2ib6dydeeqd8mfe2ezhcxx3kp3k2elkkirfpm5eymx"}},[t._v("$wif")]),t._v(" and "),n("CoinLink",{attrs:{target:"_blank",href:"https://dexscreener.com/solana/bszedbevwrqvksaf558eppwcm16avepyhm2hgsq9wzyy"}},[t._v("$sc")]),t._v(" memes"),n("br"),n("br"),t._v("More coming soon! 👀")],1)],1),t._v(" "),n("HeroButtons")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HeroButtons:e(442).default})},458:function(t,n,e){"use strict";e.r(n);var r={},o=(e(448),e(20)),component=Object(o.a)(r,(function(){var t=this._self._c;return t("img-comparison-slider",{staticClass:"slider",staticStyle:{"border-radius":"8px"},attrs:{value:50,hover:!0}},[t("img",{attrs:{slot:"first",src:"/cz_brian_new.png"},slot:"first"}),this._v(" "),t("img",{attrs:{slot:"second",src:"/cz_brian_new_wifhats.png"},slot:"second"})])}),[],!1,null,"0507873c",null);n.default=component.exports},459:function(t,n,e){"use strict";e.r(n);e(31),e(28),e(32),e(16),e(36),e(27),e(37);var r,o,c,l,d,f,h,m,x=e(12),v=e(5),w=e(2),O=(e(55),e(3)),j=e(90);function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}var _=j.a.launchBlogPostURL,k={components:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){Object(v.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},{Wrapper:O.c.div(r||(r=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Header:O.c.div(o||(o=Object(w.a)(["\n  color: ",";\n  font-size: 3.5rem;\n  font-weight: 600;\n\n  ",";\n\n  ",";\n"])),(function(t){return t.theme.text1}),(function(t){return t.theme.mediaWidth.upToMedium(c||(c=Object(w.a)(["\n    font-size: 3rem;\n  "])))}),(function(t){return t.theme.mediaWidth.upToSmall(l||(l=Object(w.a)(["\n    font-size: 2.5rem;\n    line-height: 3rem;\n  "])))})),Description:O.c.div(d||(d=Object(w.a)(["\n  font-size: 16.5px;\n  font-weight: 400;\n  line-height: 25px;\n  letter-spacing: -.04rem;\n  color: ",";\n\n  ",";\n"])),(function(t){return t.theme.text2}),(function(t){return t.theme.mediaWidth.upToMedium(f||(f=Object(w.a)(["\n    font-size: 14px;\n    line-height: 22px;\n  "])))})),GradientText:O.c.span(h||(h=Object(w.a)(["\n  background: ",";\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"])),(function(t){return t.theme.gradient3()})),CopyAddress:O.c.span(m||(m=Object(w.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n"])))}),data:function(){return{donate:j.a.donate}},methods:{learnMore:function(){window.open(_)},openSupport:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.openModal({modalName:"support"});case 1:case"end":return n.stop()}}),n)})))()}}},T=k,H=e(20),component=Object(H.a)(T,(function(){var t=this,n=t._self._c;return n("Wrapper",[n("Header",[t._v("About")]),t._v(" "),n("Description",[t._v("My people: the day has finally come!"),n("br"),n("br"),t._v("For so long, photoshopping hats onto figures has been a privilege reserved for the elites."),n("br"),n("br"),t._v("But no longer! Like Promwifeus, I deliver you fire, straight from the ivory towers of the gods 🔥.")]),t._v(" "),n("Description",[n("h2",[t._v("What is this?")]),n("b",[t._v("I'd hat that 🐶🧢🦈🐱")]),t._v(" is a simple app for making Dogwifhat and Shark Cat memes"),n("br"),t._v("Just upload an image, add hats, dogs, cats, and sharks, then download the result!"),n("br"),n("br")]),t._v(" "),n("Description",[n("h2",[t._v("Who are you?")]),t._v("Just a group of meme lovers who want to bring the best memes to every corner of the internet."),n("br"),n("br")]),t._v(" "),n("Description",[n("h2",[t._v("What's next?")]),t._v("We have a long way to go on our mission! We'll be adding much more functionality in the future, so stay tuned!"),n("br"),n("br")]),t._v(" "),t.donate?n("Description",[n("h2",[t._v("How can I help?")]),t._v("This tool is completely free, but was honestly a ton of work. If you had fun using it, please consider "),n("CopyAddress",{ref:"copyAddress",on:{click:function(n){return t.openSupport()}}},[t._v("supporting me")]),t._v(". Any amount would be very appreciated 🙏!"),n("br"),n("br"),t._v("Feedback and suggestions via twitter are also welcome!")],1):n("Description",[n("h2",[t._v("How can I help?")]),t._v("Feedback and suggestions via twitter DMs are encouraged! I plan on adding a lot more functionality here")])],1)}),[],!1,null,null,null);n.default=component.exports},481:function(t,n,e){"use strict";e.r(n);var r,o,c,l=e(2),d=e(3),f=e(133),h={components:{Wrapper:Object(d.c)(f.RowBetween)(r||(r=Object(l.a)(["\n  width: 90%;\n  position: relative;\n  max-width: 912px;\n  padding: 100px 0;\n  min-height: 75vh;\n  flex-wrap: wrap;\n  row-gap: 96px;\n\n  ","\n"])),(function(t){return t.theme.mediaWidth.upToExtraSmall(o||(o=Object(l.a)(["\n      padding-top: 10px;\n  "])))})),TextWrapper:d.c.div(c||(c=Object(l.a)(["\n  display: flex;\n  height: fit-content;\n  align-items: center;\n"])))}},m=e(20),component=Object(m.a)(h,(function(){var t=this._self._c;return t("Wrapper",[t("TextWrapper",[t("HeroText")],1),this._v(" "),t("HeroGraphic")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{HeroText:e(457).default,HeroGraphic:e(458).default})},482:function(t,n,e){"use strict";e.r(n);var r,o,c,l,d=e(2),f=e(169),h=e(3),m=h.c.div(r||(r=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),x=h.c.div(o||(o=Object(d.a)(["\n  padding: 4px 8px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  cursor: pointer;\n  border: 1px solid ",";\n"])),(function(t){return t.theme.text1})),v={components:{Wrapper:m,ChevronDown:Object(h.c)(f.b)(c||(c=Object(d.a)(["\n  width: 14px;\n  height: 14px;\n"]))),ButtonWrapper:x,AboutText:h.c.p(l||(l=Object(d.a)(["\n  margin: 0;\n  font-size: 14px;\n"])))},methods:{about:function(){this.$emit("scroll-to-about")}}},w=e(20),component=Object(w.a)(v,(function(){var t=this,n=t._self._c;return n("Wrapper",[n("ButtonWrapper",{on:{click:t.about}},[n("ChevronDown"),t._v(" "),n("AboutText",[t._v("About")])],1)],1)}),[],!1,null,null,null);n.default=component.exports},483:function(t,n,e){"use strict";e.r(n);var r,o,c,l=e(2),d=e(3),f=e(133),h={components:{Wrapper:Object(d.c)(f.RowBetween)(r||(r=Object(l.a)(["\n  align-items: flex-start;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 75%;\n  max-width: 1000px;\n  padding: 28px 56px 36px 56px;\n  margin-bottom: 146px;\n  margin-top: 60px;\n\n  ",";\n\n  ",";\n"])),(function(t){return t.theme.mediaWidth.upToLarge(o||(o=Object(l.a)(["\n    padding: 24px 0 0 0;\n  "])))}),(function(t){return t.theme.mediaWidth.upToMedium(c||(c=Object(l.a)(["\n    width: 90%;\n  "])))}))}},m=e(20),component=Object(m.a)(h,(function(){var t=this._self._c;return t("Wrapper",[t("AboutContent")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{AboutContent:e(459).default})},527:function(t,n,e){"use strict";e.r(n);var r,o=e(2),c={layout:"default",components:{Wrapper:e(3).c.div(r||(r=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))},methods:{scrollToAbout:function(){document.getElementById("about").scrollIntoView()}}},l=e(20),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("Wrapper",[n("Hero"),t._v(" "),n("MainnetLaunch"),t._v(" "),n("AboutButton",{on:{"scroll-to-about":t.scrollToAbout}}),t._v(" "),n("About",{attrs:{id:"about"}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Hero:e(481).default,AboutButton:e(482).default,About:e(483).default})}}]);