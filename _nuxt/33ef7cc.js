(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{531:function(e,t,n){"use strict";n.r(t);n(31),n(28),n(32),n(16),n(36),n(27),n(37);var r,o,c=n(5),l=n(2),d=n(82),O=n(3);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v={props:["isActive","trueText","falseText","disabled"],methods:{toggle:function(){this.$emit("toggled")}},components:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{ToggleElement:Object(O.c)("span",{isActive:Boolean,isOnSwitch:Boolean})(r||(r=Object(l.a)(["\n  padding: 0.25rem 0.5rem;\n  border-radius: 14px;\n  background: ",";\n  color: ",";\n  font-size: 0.825rem;\n  font-weight: 400;\n"])),(function(e){var t=e.theme,n=e.isActive,r=e.isOnSwitch;return n?r?t.primary1:t.text4:"none"}),(function(e){var t=e.theme,n=e.isActive,r=e.isOnSwitch;return n?r?t.bg1:t.text2:t.text3})),StyledToggle:Object(O.c)("button",{disabled:Boolean,isActive:Boolean})(o||(o=Object(l.a)(["\n  border-radius: 16px;\n  border: 1px solid\n    ",";\n  display: flex;\n  width: fit-content;\n  cursor: ",";\n  outline: none;\n  padding: 0;\n  background-color: transparent;\n"])),(function(e){var t=e.theme;return e.isActive?Object(d.a)(.1,t.primary1):t.text4}),(function(e){return e.disabled?"not-allowed":"pointer"}))})},w=v,h=n(20),component=Object(h.a)(w,(function(){var e=this,t=e._self._c;return t("StyledToggle",{attrs:{disabled:e.disabled,isActive:e.isActive},on:{click:function(t){!e.disabled&&e.toggle()}}},[t("ToggleElement",{attrs:{isActive:e.isActive,isOnSwitch:!0}},[e._v(e._s(e.trueText||"On"))]),e._v(" "),t("ToggleElement",{attrs:{isActive:!e.isActive,isOnSwitch:!1}},[e._v(e._s(e.falseText||"Off"))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);