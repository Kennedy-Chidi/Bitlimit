(window.webpackJsonp=window.webpackJsonp||[]).push([[60,25,26,27],{344:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("c5851d4a",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("1b816176",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var l=n(8),o=(n(49),{methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(360),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"client-navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("div",[e("nuxt-link",{staticClass:"brand w-nav-brand home-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"brand-img",attrs:{src:"/Cryptobit-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("Blog")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link btn w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(1)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-header"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"top-header-flex"},[e("div",{staticClass:"top-header-right"},[e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645851494312bb2ad82f00e6_envelope.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("support@cryptobitlimited.com")])]),t._v(" "),e("div",{staticClass:"each-top-right"},[e("img",{staticClass:"top-right-img",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64585500e35d2883c5f0ab09_clock.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Mon - Sun : 8:00 - 17:30")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-menu w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);var l=n(8),o=(n(49),{data:function(){return{company:"",address:"",phone:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.setFileURL(),this.loadScript(),this.getCompany()}}),c=(n(358),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer1",attrs:{id:"footer"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"div-block-25"},[e("div",{staticClass:"div-block-20"},[e("div",{staticClass:"div-block-19"},[e("h1",{staticClass:"heading-10"},[t._v("QUICK LINKS")]),t._v(" "),e("div",{staticClass:"div-block-21"},[e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/about"}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/plan"}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/news"}},[t._v("Blog")])],1),t._v(" "),e("div",{staticClass:"link-block-3 w-inline-block"},[e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/signup"}},[t._v("Sign up")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"heading-11",attrs:{to:"/terms-conditions"}},[t._v("Terms & Conditions")])],1)])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-23"},[e("h1",{staticClass:"heading-15"},[t._v("GET IN TOUCH")]),t._v(" "),t.phone?e("div",{staticClass:"div-block-24"},[t._m(1),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.phone.text))])]):t._e(),t._v(" "),e("div",{staticClass:"div-block-24 b"},[t._m(2),t._v(" "),e("h1",{staticClass:"heading-17"},[t._v(t._s(t.company.systemEmail))])]),t._v(" "),t.address?e("h1",{staticClass:"heading-18"},[t._v(t._s(t.address.text))]):t._e()])])])]),t._v(" "),e("div",{staticClass:"footer-line"}),t._v(" "),t.company?e("h1",{staticClass:"heading-20"},[t._v("\n    "+t._s(t.company.companyName)+" © "+t._s((new Date).getFullYear())+" Copyrights. All\n    rights reserved.\n  ")]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-22"},[e("h1",{staticClass:"heading-12"},[t._v("NEWSLETTER SIGNUP")]),t._v(" "),e("h1",{staticClass:"heading-13"},[t._v("\n            By subscribing to our mailing list you will always be update with\n            the latest news from us.\n          ")]),t._v(" "),e("div",{staticClass:"form-block w-form"},[e("form",{staticClass:"form",attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[e("input",{staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email","data-name":"Email",placeholder:"Email",id:"email",required:""}}),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Sign Up","data-wait":"Please wait..."}})])]),t._v(" "),e("h1",{staticClass:"heading-14"},[t._v("We don't spam.")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Phone "),e("span",{staticClass:"text-span-3"},[t._v(":")])])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"heading-16"},[t._v("\n              Email "),e("span",{staticClass:"text-span-3"},[t._v(":")])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(344)},359:function(t,e,n){var l=n(150)((function(i){return i[1]}));l.push([t.i,".custom-container.footer{background:#00040f}.w-inline-block a{color:#fff;display:block;font-weight:300}",""]),l.locals={},t.exports=l},360:function(t,e,n){"use strict";n(345)},361:function(t,e,n){var l=n(150)((function(i){return i[1]}));l.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}.top-menu.w-nav-button{width:60px}.home-logo{width:150px}",""]),l.locals={},t.exports=l},380:function(t,e,n){"use strict";n.r(e);n(58);var l=n(8),o=(n(49),{data:function(){return{reviews:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getReviews:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/review/?commented=true");case 3:return l=e.sent,e.next=6,null===(n=l.data)||void 0===n?void 0:n.data;case 6:t.reviews=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getReviews()},computed:{FILE_URL:function(){return this.$store.state.fileURL}}}),c=n(57),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"company-skills-and-client-testimonial"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"staff-skills"},[t._m(0),t._v(" "),e("div",{staticClass:"div-block-3"},[e("h2",{staticClass:"title-header company-skillb"},[t._v("Client Testimonials")]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"slider-2 w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[e("div",{staticClass:"w-slider-mask"},t._l(t.reviews,(function(n){return e("div",{key:n._id,staticClass:"slide w-slide"},[e("div",{staticClass:"div-block-10"},[e("div",{staticClass:"div-block-11"},[e("h1",{staticClass:"heading-5"},[t._v("\n                    "+t._s(n.comment)+"\n                  ")])]),t._v(" "),e("div",{staticClass:"div-block-12"},[e("div",{staticClass:"div-block-13"},[e("img",{staticClass:"image review",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.profilePicture),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-15"},[e("h1",{staticClass:"heading-6"},[t._v("\n                      "+t._s(n.username)+"\n                      "),e("span",{staticClass:"text-span-2"},[t._v("Cryptobit Investor")])]),t._v(" "),e("div",{staticClass:"div-block-14"},[e("span",[t._v(t._s(n.rating))]),t._v(" "),e("img",{staticClass:"image-2",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/645c12b2516edcf87d2a2876_star-symbol-icon.svg",loading:"lazy",alt:""}})])])])])])})),0),t._v(" "),e("div",{staticClass:"w-slider-arrow-left"}),t._v(" "),e("div",{staticClass:"w-slider-arrow-right"}),t._v(" "),e("div",{staticClass:"w-slider-nav w-round w-num"})])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-2"},[e("h2",{staticClass:"title-header company-skilla"},[t._v("Company's Progress")]),t._v(" "),e("h1",{staticClass:"heading-3"},[t._v("\n          Our long years of success has also been based on our distribution of\n          labour across our work force. While our overall goal per year has\n          been splitted into units we are hoping to reach 100% completion of\n          our yearly goal, yet our current stats is below.\n        ")]),t._v(" "),e("div",{staticClass:"div-block-4"},[e("div",{staticClass:"line company-skills"})]),t._v(" "),e("div",{staticClass:"div-block-5"},[e("div",{staticClass:"div-block-6"},[e("div",{staticClass:"div-block-7"},[e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text"},[t._v("Crypto Mining")])]),t._v(" "),e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text-2"},[t._v("95%")])])]),t._v(" "),e("div",{staticClass:"div-block-8"},[e("div",{staticClass:"div-block-9"})])]),t._v(" "),e("div",{staticClass:"div-block-6"},[e("div",{staticClass:"div-block-7"},[e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text"},[t._v("Cloud Hosting")])]),t._v(" "),e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text-2"},[t._v("78%")])])]),t._v(" "),e("div",{staticClass:"div-block-8"},[e("div",{staticClass:"div-block-9 _2"})])]),t._v(" "),e("div",{staticClass:"div-block-6"},[e("div",{staticClass:"div-block-7"},[e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text"},[t._v("Secured Exchange")])]),t._v(" "),e("h1",{staticClass:"heading-4"},[e("strong",{staticClass:"bold-text-2"},[t._v("60%")])])]),t._v(" "),e("div",{staticClass:"div-block-8"},[e("div",{staticClass:"div-block-9 _3"})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-4 _2"},[t("div",{staticClass:"line company-skills"})])}],!1,null,null,null);e.default=component.exports},419:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("93346fe2",content,!0,{sourceMap:!1})},493:function(t,e,n){"use strict";n(419)},494:function(t,e,n){var l=n(150)((function(i){return i[1]}));l.push([t.i,".w-button.plann{background-color:#ffb426;border-radius:5px}",""]),l.locals={},t.exports=l},552:function(t,e,n){"use strict";n.r(e);n(58);var l=n(8),o=(n(49),n(20),n(42),n(13),n(95),n(350)),c=n(349),r=n(380),d={data:function(){return{plans:[],banner:""}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getBanner:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=Services");case 3:n=e.sent,t.banner=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPlans:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.plans=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.loadScript(),this.getPlans(),this.getBanner()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeNavigation:c.default,HomeFooter:o.default,Testimony:r.default}},v=(n(493),n(57)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"faq plan client-wrapper"},[e("home-navigation"),t._v(" "),e("div",{staticClass:"about-us-section faq",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.banner.bannerImage,")")}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"hero-section"},[e("h1",{staticClass:"heading-21 faq"},[t._v(t._s(t.banner.bannerTitle))])])]),t._v(" "),e("div",{staticClass:"hero-section-cover"})]),t._v(" "),e("div",{staticClass:"about-us-section2"},[e("div",{staticClass:"custom-container"},[e("div",[e("div",{staticClass:"div-block-27"},[t._m(0),t._v(" "),e("nuxt-link",{staticClass:"link-block-5 w-inline-block",attrs:{to:"/"}},[e("h1",{staticClass:"heading-23"},[t._v("Home")]),t._v(" "),e("img",{staticClass:"image-5",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0eddea363a6792c4285_left-arrow-next-svgrepo-com%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h1",{staticClass:"heading-24"},[t._v("Plan")])],1)])]),t._v(" "),e("div",{staticClass:"div-block-29"})]),t._v(" "),e("div",{staticClass:"plan-section"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"plan-card-holder"},t._l(t.plans,(function(n){return e("div",{key:n._id,staticClass:"plan-each-card"},[e("div",{staticClass:"plan-header-holder"},[e("h1",{staticClass:"plan-card-header"},[t._v(t._s(n.planName))])]),t._v(" "),e("div",{staticClass:"percent-border-holder"},[e("div",{staticClass:"percent-text front"},[t._v("%")]),t._v(" "),e("h1",{staticClass:"percent-header"},[t._v(t._s(n.planPercentage))]),t._v(" "),e("div",{staticClass:"percent-text back"},[t._v("Daily")])]),t._v(" "),e("div",{staticClass:"plan-option-holder"},[e("div",{staticClass:"each-plan-option"},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64680eaba638d283b179f5a3_check-mark-circle-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"odd-header"},[t._v("MiniMum Investment:")]),t._v(" "),e("div",{staticClass:"percent-text"},[t._v("\n                $"+t._s(t.formatMoney(n.planMinimum))+" USD\n              ")])]),t._v(" "),e("div",{staticClass:"each-plan-option"},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64680eaba638d283b179f5a3_check-mark-circle-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"odd-header"},[t._v("Maximum Investment:")]),t._v(" "),n.planMaximum>0?e("div",{staticClass:"percent-text"},[t._v("\n                $"+t._s(t.formatMoney(n.planMaximum))+" USD\n              ")]):e("div",{staticClass:"percent-text"},[t._v("UNLIMITED")])]),t._v(" "),e("div",{staticClass:"each-plan-option"},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64680eaba638d283b179f5a3_check-mark-circle-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"odd-header"},[t._v("Investment Duration:")]),t._v(" "),e("div",{staticClass:"percent-text"},[t._v(t._s(n.planDuration)+" Days.")])]),t._v(" "),e("div",{staticClass:"each-plan-option"},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/64680eaba638d283b179f5a3_check-mark-circle-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"odd-header"},[t._v("Referral Commission")]),t._v(" "),e("div",{staticClass:"percent-text"},[t._v(t._s(n.referralCommission)+"%")])])]),t._v(" "),e("div",{staticClass:"card-button-holder"},[e("nuxt-link",{staticClass:"w-button plann",attrs:{to:"/login"}},[t._v("Invest Now")])],1)])})),0)])]),t._v(" "),e("testimony"),t._v(" "),e("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-28"},[t("img",{staticClass:"image-4",attrs:{src:"https://uploads-ssl.webflow.com/64584677a42c076b5ad19e3c/6460a0e746818cacc5ca3e96_home-icon-silhouette-svgrepo-com%201.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(349).default,Testimony:n(380).default,HomeFooter:n(350).default})}}]);