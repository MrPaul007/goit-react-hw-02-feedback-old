(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(3),s=a.n(i),r=(a(13),a(4)),o=a(5),l=a(6),d=a(8),u=a(7),b=a(0),j=function(e){var t=e.title,a=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:t}),a]})},h=function(e){var t=e.onLeaveFeedback;return e.options.map((function(e){return Object(b.jsx)("button",{className:"btn",onClick:t,name:e.id,children:e.title},e.id)}))},m=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,i=e.positivePercentage;return Object(b.jsxs)("ul",{className:"list",children:[Object(b.jsxs)("li",{className:"item",children:["Good: ",t]}),Object(b.jsxs)("li",{className:"item",children:["Neutral: ",a]}),Object(b.jsxs)("li",{className:"item",children:["Bad: ",n]}),Object(b.jsxs)("li",{className:"item",children:["Total: ",c]}),Object(b.jsxs)("li",{className:"item",children:["Positive feedback: ",i,"%"]})]})},O=function(e){var t=e.message;return Object(b.jsx)("p",{className:"notification",children:t})},v=[{id:"good",title:"Good"},{id:"neutral",title:"Neutral"},{id:"bad",title:"Bad"}],f=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.positivePercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{title:"Please leave feedback",children:Object(b.jsx)(h,{options:v,onLeaveFeedback:this.onLeaveFeedback})}),Object(b.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(b.jsx)(m,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.positivePercentage()}):Object(b.jsx)(O,{message:"No feedback given"})})]})}}]),a}(n.Component);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.12fa1fe1.chunk.js.map