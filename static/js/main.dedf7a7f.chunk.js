(this["webpackJsonpincubator-portfolio"]=this["webpackJsonpincubator-portfolio"]||[]).push([[0],{125:function(e,t,s){e.exports={header:"Header_header__2MwKN"}},139:function(e,t,s){},140:function(e,t,s){},21:function(e,t,s){e.exports={nav:"Nav_nav__2xDZq",link:"Nav_link__2bpPB",active:"Nav_active__1biGH"}},414:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(3),i=s.n(a),n=s(124),r=s.n(n),l=(s(139),s(140),s(125)),o=s.n(l),j=s(21),d=s.n(j),m=s(25),b=function(){return Object(c.jsxs)("nav",{className:d.a.nav,children:[Object(c.jsx)(m.b,{to:"/",className:d.a.link,exact:!0,activeClassName:d.a.active,children:Object(c.jsx)("span",{children:"Home"})}),Object(c.jsx)(m.b,{to:"/experience",className:d.a.link,activeClassName:d.a.active,children:Object(c.jsx)("span",{children:"Experience"})}),Object(c.jsx)(m.b,{to:"/projects",className:d.a.link,activeClassName:d.a.active,children:Object(c.jsx)("span",{children:"Projects"})}),Object(c.jsx)(m.b,{to:"/blog",className:d.a.link,activeClassName:d.a.active,children:Object(c.jsx)("span",{children:"Blog"})}),Object(c.jsx)(m.b,{to:"/contact",className:d.a.link,activeClassName:d.a.active,children:Object(c.jsx)("span",{children:"Contact"})})]})},p=function(){var e=new Date;return Object(c.jsxs)("header",{className:o.a.header,children:[Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("a",{href:"",children:Object(c.jsx)("img",{src:"",alt:""})})}),Object(c.jsx)(b,{}),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("p",{children:["\xa9 ",e.getFullYear()]})})]})},x=s(7),u=s.p+"static/media/github.05a39bd0.svg",h=s.p+"static/media/upwork.59cb7ae8.svg",O=s.p+"static/media/linkedin.1524f1c5.svg",v=function(){return Object(c.jsxs)("ul",{className:"social",children:[Object(c.jsx)("li",{className:"social__item",children:Object(c.jsx)("a",{className:"social__link",href:"https://www.upwork.com/freelancers/~01619d2f6f732abf42",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("img",{src:h,className:"icon",alt:"upwork"})})}),Object(c.jsx)("li",{className:"social__item",children:Object(c.jsx)("a",{className:"social__link",href:"https://www.linkedin.com/in/mmarchenkov/",children:Object(c.jsx)("img",{src:O,className:"icon",alt:"linkedin"})})}),Object(c.jsx)("li",{className:"social__item",children:Object(c.jsx)("a",{className:"social__link",href:"https://github.com/m-marc",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("img",{src:u,className:"icon",alt:"github"})})})]})},f=s.p+"static/media/profile.69af49d3.jpg",g=s(126),N=s.n(g),k=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"d-flex-col home_col glass",children:[Object(c.jsx)("img",{src:f,alt:"this is me",width:150,className:"avatar"}),Object(c.jsx)("h1",{children:Object(c.jsx)("strong",{className:"color-theme",children:"Max Marchenkov"})}),Object(c.jsx)(N.a,{text:["I'm a Front-End developer."],speed:200,typingDelay:700}),Object(c.jsx)(v,{})]})})},_=s(57),w=s(56),y=function(e){var t=e.date,s=e.company,a=e.desc,i=e.job;return Object(c.jsxs)("div",{className:"resume-single",children:[Object(c.jsx)("div",{className:"summary",children:Object(c.jsx)("h6",{className:"year",children:t})}),Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("h5",{children:i}),Object(c.jsx)("h6",{className:"company",children:s}),a.split(";").map((function(e){return Object(c.jsxs)("p",{children:["- ",e]})}))]})]})},S=function(e){var t=e.icon,s=e.title;return Object(c.jsx)("div",{className:"skill-col",children:Object(c.jsxs)("div",{className:"skill-card glass glass__dark",children:[Object(c.jsx)("div",{className:"skill__icon",children:Object(c.jsx)("img",{src:t,alt:s})}),Object(c.jsx)("h3",{className:"skill__title",children:s})]})})},C=s.p+"static/media/javascript.42190787.svg",T=s.p+"static/media/typescript.b1ba2fa7.svg",F=s.p+"static/media/sass.ad1e8796.svg",q=s.p+"static/media/react.9456ad65.svg",P=s.p+"static/media/git.53acb75b.svg",D=s.p+"static/media/redux.cd7278df.svg",M=function(){var e={jobs:[{date:"Jun 2017 - Present",jobTitle:"Frontend Developer",companyName:"Code Art",description:"Collaborated with design and project developers to understand project scope and offer elegant, creative and scalable solutions;Converted design assets into React components;Provided timely resolution to reported website problems by integrating new solutions into existing platforms with React/JS."},{date:"Mar 2016 - Dec 2016",jobTitle:"Frontend Developer",companyName:"OWebSolutions, Tula",description:"Applied knowledge of JavaScript and CSS to create successful websites;Used programming capabilities in PHP and JavaScript and other libraries as needed"},{date:"Apr 2015 - Feb 2016",jobTitle:"Software Engineer",companyName:"SprintSoft, Tula",description:"Developed polling system for students in PHP from scratch;Development and customization website of the Institute based on Joomla CMS and Bootstrap framework"}],edu:[{date:"Sep 2010 - Jul 2015",eduTitle:"Engineer's degree"}],skills:[{title:"sass",icon:F},{title:"js",icon:C},{title:"TS",icon:T},{title:"react",icon:q},{title:"Redux",icon:D},{title:"Git",icon:P}]},t=e.jobs.map((function(e,t){return Object(c.jsx)(y,{date:e.date,job:e.jobTitle,company:e.companyName,desc:e.description},"ri-".concat(t))}));e.skills.map((function(e,t){var s=e.title,a=e.icon;return Object(c.jsx)(S,{title:s,icon:a},"si-".concat(t))}));return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"glass exp-wrapper",children:[Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("span",{className:"resume-icon",children:Object(c.jsx)(w.a,{icon:_.a,size:"2x"})}),Object(c.jsx)("h4",{children:"Working experience"})]}),Object(c.jsx)("div",{className:"resume-wrapper",children:t})]})})},E=function(e){var t=e.title,s=e.desc,a=(e.img,e.link);return Object(c.jsxs)("div",{className:"portfolio__wrapper",children:[Object(c.jsx)("div",{className:"portfolio__img",children:Object(c.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(c.jsx)(w.a,{icon:_.b})})}),Object(c.jsxs)("div",{className:"glass portfolio__content",children:[Object(c.jsx)("h5",{className:"item-title",children:t}),Object(c.jsx)("p",{className:"item-desc",children:s})]})]})},J=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"glass-container container",children:[Object(c.jsx)("h2",{children:"Projects"}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)(E,{title:"Music player",link:"#",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"Study cards",link:"#",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"Todolist",link:"#",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"Nanz Product cart",link:"#",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"Chat template",link:"#",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"FutureDial",link:"https://www.futuredial.com/",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"Cards for Causes",link:"https://www.cardsforcauses.com/",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"Rent My Florida",link:"http://rentmyflorida.com/",desc:"lorem ipsum"}),Object(c.jsx)(E,{title:"OM Digital",link:"https://omdigital.com/",desc:"lorem ipsum"})]})]})})},R=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("h2",{children:"Blog"})})})},B=s(36),H=s(40),I=s(133),z=function(e){var t=e.field,s=(e.form,Object(I.a)(e,["field","form"]));return Object(c.jsx)("div",{className:"form-field",children:"textarea"===s.type?Object(c.jsx)("textarea",Object(H.a)(Object(H.a)(Object(H.a)({className:"textarea"},t),s),{},{children:" "})):Object(c.jsx)("input",Object(H.a)(Object(H.a)({className:"input"},t),s))})},A=s(39),G=A.a().shape({name:A.b().min(2,"Too short!").max(20,"Too long!").required("Required"),subject:A.b().min(3,"Too short!").max(50,"Too long!").required("Required"),email:A.b().email("Invalid email").required("Required"),message:A.b().min(3,"Too short!").max(400,"Too long!").required("Required")}),L=function(){return Object(c.jsx)(B.c,{initialValues:{name:"",email:"",subject:"",message:""},validationSchema:G,onSubmit:function(e,t){var s=t.setSubmitting,c=t.resetForm;s(!0),console.log(e),s(!1),c()},children:function(e){e.values;var t=e.isSubmitting,s=e.errors;e.touched;return Object(c.jsxs)(B.b,{className:"contact-form glass",children:[Object(c.jsx)(B.a,{placeholder:"Enter your name",name:"name",type:"input",required:!0,as:z}),Object(c.jsx)(B.a,{placeholder:"Enter your email",name:"email",type:"input",required:!0,as:z}),Object(c.jsx)(B.a,{placeholder:"Enter your subject",name:"subject",type:"input",required:!0,as:z}),Object(c.jsx)(B.a,{placeholder:"Enter your message",name:"message",type:"textarea",required:!0,cols:"30",rows:"6",as:z}),Object(c.jsx)("div",{className:"form-errors",children:Object.keys(s).length>0?"Some error happened":null}),Object(c.jsx)("div",{className:"form-field",children:Object(c.jsx)("button",{disabled:t,type:"submit",className:"btn",children:"Send Mail"})})]})}})},W=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{children:"Contact Me"}),Object(c.jsxs)("div",{className:"flex-between row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)(L,{})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"contact-info"})})]})]})},K=function(){var e=Object(x.e)("/").isExact?"home":"";return Object(c.jsxs)("main",{className:"wrapper__main ".concat(e),children:[Object(c.jsx)(x.a,{exact:!0,path:"/",component:k}),Object(c.jsx)(x.a,{path:"/experience",component:M}),Object(c.jsx)(x.a,{path:"/projects",component:J}),Object(c.jsx)(x.a,{path:"/blog",component:R}),Object(c.jsx)(x.a,{path:"/contact",component:W})]})},U=s(132),V=s.n(U),Y={particles:{number:{value:150,density:{enable:!0,value_area:800}},move:{speed:1}}};var Z=function(){return Object(c.jsxs)(m.a,{children:[Object(c.jsx)(V.a,{className:"particles",params:Y}),Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)(K,{})]})]})},Q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,415)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Z,{})}),document.getElementById("root")),Q()}},[[414,1,2]]]);
//# sourceMappingURL=main.dedf7a7f.chunk.js.map