(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{147:function(t,n){WebFont.load({google:{families:["Inter:100,200,300,regular,500,600,700,800","Raleway:100,200,300,regular,500,600,700,800,900"]}})},148:function(t,n){WebFont.load({google:{families:["Poppins:200,200italic,300,300italic,regular,500,600,600italic,700,700italic,800"]}})},149:function(t,n,r){"use strict";var e=r(232),o=r.n(e)()("https://bitlimit-production.up.railway.app/");n.a=function(t,n){t.app;n("socket",o)}},251:function(t,n,r){r(252),t.exports=r(253)},288:function(t,n,r){"use strict";r.r(n);r(24),r(43),r(51);n.default=function(t){var n=t.store,r=t.redirect,e=t.route,o="dashboard";if(n.state.auth.loggedIn){var path=e.name,c=!1;if(path.includes(o)&&"Admin"==n.state.auth.user.status&&(c=!0),c)return r("/admin");if(path.includes("admin")&&"User"==n.state.auth.user.status)return r("/dashboard");if("signup"==path||"login"==path&&"User"==n.state.auth.user.status)return r("/dashboard")}if(!n.state.auth.loggedIn){var l=e.name;if(l.includes("admin"))return r("/");if(l.includes(o))return r("/")}}},303:function(t,n,r){"use strict";r.r(n),r.d(n,"state",(function(){return e})),r.d(n,"getters",(function(){return o})),r.d(n,"mutations",(function(){return c})),r.d(n,"actions",(function(){return l}));var e=function(){return{adminNavState:!1,navState:!1,dashboardNavState:!1,fileURL:"",confirmMsg:"",confirmState:!0,showDashboardNav:!1}},o={isAuthenticated:function(t){return t.auth.loggedIn},getUserInfo:function(t){return t.auth.user}},c={TOGGLE_ADMIN_NAV:function(t){t.adminNavState=!t.adminNavState},TOGGLE_NAV:function(t){t.dashboardNavState=!t.dashboardNavState},HIDE_DASHBOARD_NAV:function(t){t.dashboardNavState=!1},HIDE_NAV:function(t){t.adminNavState=!1},SET_URL:function(t,n){t.fileURL=n},SHOW_CONFIRMATION:function(t,n){var r=n.msg,e=n.status;t.confirmMsg=r,t.confirmState=e},TOGGLE_DASHBOARD_NAV:function(t){t.showDashboardNav=!t.showDashboardNav}},l={}},304:function(t,n,r){"use strict";r.r(n),r.d(n,"state",(function(){return e})),r.d(n,"getters",(function(){return o})),r.d(n,"mutations",(function(){return c})),r.d(n,"actions",(function(){return l}));var e=function(){return{editorConfig:{width:"auto",plugins:["Bold","Link","List","FontSize","Alignment","AutoImage","Autoformat","BlockQuote","Bold","CloudServices","Code","CodeBlock","Essentials","FontBackgroundColor","FontColor","FontFamily","FontSize","Heading","Highlight","HorizontalLine","Image","ImageCaption","ImageInsert","ImageResize","ImageStyle","ImageToolbar","ImageUpload","Indent","IndentBlock","Italic","Link","List","ListStyle","MathType","MediaEmbed","MediaEmbedToolbar","PageBreak","Paragraph","PasteFromOffice","RemoveFormat","SimpleUploadAdapter","SpecialCharacters","SpecialCharactersArrows","SpecialCharactersCurrency","SpecialCharactersLatin","SpecialCharactersMathematical","SpecialCharactersText","Subscript","Superscript","Table","TableCellProperties","TableProperties","TableToolbar","TextTransformation","TodoList","Underline","WordCount"],simpleUpload:{uploadUrl:"http://localhost:5000/uploads"}}}},o={},c={},l={}},305:function(t,n,r){"use strict";r.r(n),r.d(n,"state",(function(){return e})),r.d(n,"getters",(function(){return o})),r.d(n,"mutations",(function(){return c})),r.d(n,"actions",(function(){return l}));var e=function(){return{countries:[{country:"Afghanistan",flagUrl:"https://flagcdn.com/af.svg"},{country:"Albania",flagUrl:"https://flagcdn.com/al.svg"},{country:"Algeria",flagUrl:"https://flagcdn.com/dz.svg"},{country:"Argentina",flagUrl:"https://flagcdn.com/ar.svg"},{country:"Australia",flagUrl:"https://flagcdn.com/au.svg"},{country:"Austria",flagUrl:"https://flagcdn.com/at.svg"},{country:"Belgium",flagUrl:"https://flagcdn.com/be.svg"},{country:"Brazil",flagUrl:"https://flagcdn.com/br.svg"},{country:"Canada",flagUrl:"https://flagcdn.com/ca.svg"},{country:"Chile",flagUrl:"https://flagcdn.com/cl.svg"},{country:"China",flagUrl:"https://flagcdn.com/cn.svg"},{country:"Colombia",flagUrl:"https://flagcdn.com/co.svg"},{country:"Croatia",flagUrl:"https://flagcdn.com/hr.svg"},{country:"Cuba",flagUrl:"https://flagcdn.com/cu.svg"},{country:"Czech Republic",flagUrl:"https://flagcdn.com/cz.svg"},{country:"Denmark",flagUrl:"https://flagcdn.com/dk.svg"},{country:"Egypt",flagUrl:"https://flagcdn.com/eg.svg"},{country:"Finland",flagUrl:"https://flagcdn.com/fi.svg"},{country:"France",flagUrl:"https://flagcdn.com/fr.svg"},{country:"Germany",flagUrl:"https://flagcdn.com/de.svg"},{country:"Greece",flagUrl:"https://flagcdn.com/gr.svg"},{country:"Hungary",flagUrl:"https://flagcdn.com/hu.svg"},{country:"India",flagUrl:"https://flagcdn.com/in.svg"},{country:"Indonesia",flagUrl:"https://flagcdn.com/id.svg"},{country:"Iran",flagUrl:"https://flagcdn.com/ir.svg"},{country:"Iraq",flagUrl:"https://flagcdn.com/iq.svg"},{country:"Ireland",flagUrl:"https://flagcdn.com/ie.svg"},{country:"Israel",flagUrl:"https://flagcdn.com/il.svg"},{country:"Italy",flagUrl:"https://flagcdn.com/it.svg"},{country:"Japan",flagUrl:"https://flagcdn.com/jp.svg"},{country:"Mexico",flagUrl:"https://flagcdn.com/mx.svg"},{country:"Netherlands",flagUrl:"https://flagcdn.com/nl.svg"},{country:"New Zealand",flagUrl:"https://flagcdn.com/nz.svg"},{country:"Norway",flagUrl:"https://flagcdn.com/no.svg"}],sourceOfIncome:["Freelancer","Technician","Salary","Pension","Others"],gender:[{name:"Male",active:!1},{name:"Female",active:!1},{name:"Others",active:!1}],maritalStatus:[{name:"Single",active:!1},{name:"Maried",active:!1}]}},o={},c={TOGGLE_ADMIN_NAV:function(t){t.navState=!t.navState}},l={}}},[[251,66,4,67]]]);