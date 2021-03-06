(this.webpackJsonpschedule=this.webpackJsonpschedule||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(15),i=n.n(r),c=n(4),s=n(2);function a(){var e=(new Date).getDate();return 6===e||7===e?0:e-1}var m,l,d,u,h={body:"#d6f3ff",sideBar:"#00bcd4",button:"#f55b73",text:"#252525",item:"#ffc107",itemTime:"#ff9800",itemHover:"#F25C05",clock:"#637780",toggleBorder:"#091236",btnToggle:"#00bcd4",btnToggleColor:"#fafafa"},b={body:"#152c40",sideBar:"#364959",button:"#d96b2b",text:"#FAFAFA",item:"#f25c05",itemTime:"#ff6f00",itemHover:"#F25C05",clock:"#637780",toggleBorder:"#FAFAFA",btnToggle:"#FAFAFA",btnToggleColor:"#252525"},g=n(3),j=Object(s.b)(m||(m=Object(g.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n    background-color: #152c40;\n  }\n\n  body {\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    background: ",";\n    color: ",";\n    margin: 0;\n    padding: 0;\n    transition: all 0.5s linear;\n  }\n\n  img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n      font-weight: 700;\n       margin: 0;\n  }\n\n  p {\n      margin: 0;\n  }\n\n  .DayBox{\n    background-color: ",";\n  }\n\n  .LessonItem{\n    background-color: ",";\n  }\n\n  .LessonItem:hover{\n    background-color: ",";\n  }\n  \n  .ClockBox{\n    background-color: ",";\n  }\n\n  .TimeBoxLesson{\n    background-color: ",";\n  }\n\n  .LessonUrl{\n    color: ",";\n  }\n\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.sideBar}),(function(e){return e.theme.item}),(function(e){return e.theme.itemTime}),(function(e){return e.theme.clock}),(function(e){return e.theme.itemTime}),(function(e){return e.theme.text})),p=s.c.button(l||(l=Object(g.a)(["\n    background: ",";\n    border: none;\n    /* border: 2px solid ","; */\n    border-radius: 30px;\n    cursor: pointer;\n    font-size: 0.5rem;\n    margin: 5px 1em 0 auto;\n    overflow: hidden;\n    padding: 0.5rem;\n    width: 8rem;\n    height: 4rem;\n    outline: none;\n\n    h1 {\n        color: ",";\n        font-size: 2rem;\n        margin: 0 auto;\n    }\n"])),(function(e){return e.theme.btnToggle}),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.btnToggleColor})),f=n(0),x=function(e){var t=e.theme,n=e.toggleTheme;return Object(f.jsx)(p,{onClick:n,children:Object(f.jsx)("h1",{children:"light"===t?"light":"dark"})})},O=(n(26),function(e){var t=e.children;return Object(f.jsx)("div",{className:"Layout",children:t})}),v=n(6),k=n(7),S=n(10),w=n(9),y=(n(27),o.Component,s.c.button(d||(d=Object(g.a)(["\n    border: none;\n    text-transform: uppercase;\n    width: 8rem;\n    height: 8rem;\n    text-align: center;\n    background: ",";\n    color: white;\n    background-size: cover;\n    transition: 0.5s;\n    margin: 1rem;\n    display: inline-block;\n    border-radius: 5px;\n    font-size: 2.5rem;\n    margin-bottom: 5rem;\n    cursor: pointer;\n    transition: 0.5s;\n"])),(function(e){return e.theme.button}))),N=Object(s.c)(y)(u||(u=Object(g.a)(["\n    opacity: 0.825;\n    ","\n"])),(function(e){return e.active&&"\n    opacity: 1;\n    outline: none;\n    width: 10rem;\n    height: 10rem;\n    transition: 0.5s;\n  "}));function T(e){var t=e.getActiveIdx,n=e.items,r=Object(o.useState)(n[0]),i=Object(c.a)(r,2),s=i[0],a=i[1];return Object(f.jsx)(f.Fragment,{children:n.map((function(e,n){return Object(f.jsx)(N,{active:s===e,onClick:function(){a(e),t(n)},children:e.shortName},e.id)}))})}var A=n(19),E=(n(31),n(8)),z=function(e){Object(S.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={activeIdx:a()},e.setActiveTabIdx=function(t){e.setState({activeIdx:t})},e}return Object(k.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return t.activeIdx!==this.state.activeIdx}},{key:"render",value:function(){var e=this.props.items[this.state.activeIdx];return Object(f.jsxs)("section",{className:"SectionSchedule",children:[Object(f.jsxs)("div",{className:"DayBox",children:[Object(f.jsx)("a",{className:"Logo",rel:"noopener noreferrer",href:"https://sa-vo.github.io/SaVo/",target:"_blank",children:Object(f.jsxs)("div",{className:"LogoBox",children:[Object(f.jsx)("p",{className:"logo-text",children:"SaVo"}),Object(f.jsx)("p",{className:"logo-text--big",children:"DEV"})]})}),Object(f.jsx)(T,{getActiveIdx:this.setActiveTabIdx,items:E})]}),Object(f.jsxs)("article",{className:"DayContent",children:[Object(f.jsxs)("h2",{className:"Day",children:["\u0420\u043e\u0437\u043a\u043b\u0430\u0434 \u043d\u0430 ",e.label]}),Object(f.jsx)("ul",{className:"LessonsBox",children:e.schedule.map((function(e){var t=e.description,n=e.url,o=e.id,r=void 0===o?Object(A.uuid)():o,i=e.timeStart,c=e.timeEnd;return Object(f.jsxs)("li",{className:"LessonItem",children:[Object(f.jsx)("a",{href:n,className:"LessonUrl",children:t}),Object(f.jsxs)("div",{className:"TimeBoxLesson",children:[Object(f.jsx)("p",{className:"TimeLesson",children:i}),Object(f.jsx)("p",{className:"TimeLesson",children:c})]})]},r)}))})]})]})}}]),n}(o.Component);var F=function(){var e=function(){var e=Object(o.useState)("light"),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)(!1),s=Object(c.a)(i,2),a=s[0],m=s[1],l=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(o.useEffect)((function(){var e=window.localStorage.getItem("theme");window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&!e?l("dark"):e?r(e):l("light"),m(!0)}),[]),[n,function(){l("light"===n?"dark":"light")},a]}(),t=Object(c.a)(e,3),n=t[0],r=t[1],i=t[2],a="light"===n?h:b;return i?Object(f.jsx)(s.a,{theme:a,children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{}),Object(f.jsxs)(O,{children:[Object(f.jsx)(z,{items:E}),Object(f.jsx)(x,{theme:n,toggleTheme:r})]})]})}):Object(f.jsx)("div",{})};i.a.render(Object(f.jsx)(F,{}),document.querySelector("#root"))},8:function(e){e.exports=JSON.parse('[{"id":0,"shortName":"Mon","label":"\u041f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a","schedule":[{"description":"\u0410\u043d\u0433\u043b\u0456\u0439\u0441\u044c\u043a\u0430","url":"https://meet.google.com/cjc-zqvp-xfd","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0414\u0432\u043e\u0440\u0436\u0430\u043a (JS \u043b\u0435\u043a\u0446\u0456\u0457)","url":"https://meet.google.com/vdc-qcxo-zku","timeStart":"10:20","timeEnd":"11:55"}]},{"id":1,"shortName":"Tue","label":"\u0412\u0456\u0432\u0442\u043e\u0440\u043e\u043a","schedule":[{"description":"\u0414\u044c\u044f\u0447\u0435\u043d\u043a\u043e( \u041c\u0415\u0420\u0415\u0416\u0406  \u043b\u0435\u043a\u0446\u0456\u0457 + \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/yac-crmr-gib","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u041e\u0441\u0442\u0430\u043f\u043e\u0432 (\u0422\u0435\u0445\u043d\u043e\u043b. \u0417\u0430\u0445\u0438\u0441\u0442\u0443 \u0406\u043d\u0444\u043e\u0440\u043c \u043b\u0435\u043a\u0446\u0456\u0457)","url":"https://meet.google.com/gax-krbb-sxy","timeStart":"10:20","timeEnd":"11:55"},{"description":"\u0422\u043e\u043c\u043a\u0430(.Net \u043b\u0435\u043a\u0446\u0456\u044f)","url":"https://meet.google.com/aky-wsmz-zjm","timeStart":"12:10","timeEnd":"13:45"}]},{"id":2,"shortName":"Wed","label":"\u0421\u0435\u0440\u0435\u0434\u0443","schedule":[{"description":"\u0422\u0430\u043b\u0430\u0445 (\u0406\u041d\u0422\u0415\u041b\u0415\u041a\u0422\u0423\u0410\u041b\u042c\u041d\u0418\u0419 \u0410\u041d\u0410\u041b\u0406\u0417 \u0414\u0410\u041d\u0418\u0425 \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/ywy-jwdu-mmf","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u042f\u043d\u0443\u0448\u0435\u0432\u0441\u044c\u043a\u0438\u0439 ( \u0422\u0415\u0425\u041d\u041e\u041b\u041e\u0413\u0406\u0407 \u0417\u0410\u0425\u0418\u0421\u0422\u0423 \u0406\u041d\u0424\u041e\u0420\u041c\u0410\u0426\u0406\u0407  \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/ucv-xihc-zcd","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0422\u043e\u043c\u043a\u0430(.Net \u041b\u0411)","url":"https://meet.google.com/bvh-gwnx-wbd","timeStart":"8:30","timeEnd":"10:05"}]},{"id":3,"shortName":"Thu","label":"\u0427\u0435\u0442\u0432\u0435\u0440\u0433","schedule":[{"description":"\u0422\u043e\u043c\u043a\u0430(\u0422\u0421\u041f\u041f \u043b\u0435\u043a\u0446\u0456\u044f)","url":"https://meet.google.com/aht-tuco-pcy","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0413\u0430\u043b\u043e\u0447\u043a\u0456\u043d (JAVA  \u043b\u0435\u043a\u0446\u0456\u0457 + \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/whs-mdna-dwn","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0414\u044c\u044f\u0447\u0435\u043d\u043a\u043e( \u041c\u0415\u0420\u0415\u0416\u0406  \u043b\u0435\u043a\u0446\u0456\u0457 + \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/yac-crmr-gib","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0414\u0432\u043e\u0440\u0436\u0430\u043a (JS \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/iof-izpp-okw","timeStart":"8:30","timeEnd":"10:05"}]},{"id":4,"shortName":"Fri","label":"\u041f\u044f\u0442\u043d\u0438\u0446\u044e","schedule":[{"description":"\u0413\u0430\u043b\u043e\u0447\u043a\u0456\u043d (JAVA  \u043b\u0435\u043a\u0446\u0456\u0457 + \u043b\u0430\u0431\u0438)","url":"https://meet.google.com/whs-mdna-dwn","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0422\u043e\u043c\u043a\u0430(.Net \u043b\u0435\u043a\u0446\u0456\u044f)","url":"https://meet.google.com/aky-wsmz-zjm","timeStart":"8:30","timeEnd":"10:05"},{"description":"\u0412\u0456\u043d\u0434\u043e\u0443\u0441","url":"#","timeStart":""},{"description":"\u0422\u0430\u043b\u0430\u0445 (\u0406\u041d\u0422\u0415\u041b\u0415\u041a\u0422\u0423\u0410\u041b\u042c\u041d\u0418\u0419 \u0410\u041d\u0410\u041b\u0406\u0417 \u0414\u0410\u041d\u0418\u0425 \u043b\u0435\u043a\u0446\u0456\u044f)","url":"https://meet.google.com/ywy-jwdu-mmf","timeStart":"8:30","timeEnd":"10:05"}]}]')}},[[33,1,2]]]);
//# sourceMappingURL=main.883b29d0.chunk.js.map