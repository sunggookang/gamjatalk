(this.webpackJsonpgamjatalk=this.webpackJsonpgamjatalk||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(32),s=a.n(r),i=a(9),u=a(24),o=a(6),l=a(10),j=a.n(l),d=a(17),b=a(23);a(42),a(54),a(53);b.a.initializeApp({apiKey:"AIzaSyDUgig2rKsPijb3W5Ro1UCInSI0qfPh2ig",authDomain:"gamjatalk-6f481.firebaseapp.com",projectId:"gamjatalk-6f481",storageBucket:"gamjatalk-6f481.appspot.com",messagingSenderId:"770538134199",appId:"1:770538134199:web:18516fe88f1d9c992dcb32"});var p=b.a,m=b.a.auth(),f=b.a.firestore(),h=b.a.storage(),O=a(1),x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(n.useState)(!0),b=Object(i.a)(l,2),p=b[0],f=b[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),g=x[0],v=x[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},N=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(a,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(a,u);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),v(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{onSubmit:N,className:"container",children:[Object(O.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(O.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,className:"authInput",onChange:y}),Object(O.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),g&&Object(O.jsx)("span",{className:"authError",children:g})]}),Object(O.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},g=a(13),v=a(22),y=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.auth.GoogleAuthProvider:"github"===a&&(n=new p.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"authContainer",children:[Object(O.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"authBtns",children:[Object(O.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(O.jsx)(g.a,{icon:v.b})]}),Object(O.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(O.jsx)(g.a,{icon:v.a})]})]})]})},N=a(36),k=a(19),w=a(33),S=a.n(w),I=function(e){var t=e.gObj,a=e.isOwner,c=(e.userObj,Object(n.useState)(!1)),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(n.useState)(t.text),l=Object(i.a)(o,2),b=l[0],p=l[1],m=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you wanto to delete this talk?")){e.next=6;break}return e.next=4,f.doc("GamjaTalk/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))},v=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,f.doc("GamjaTalk/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"nweet",children:s?Object(O.jsx)(O.Fragment,{children:a&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(O.jsx)("input",{type:"text",placeholder:"Edit your talk",value:b,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(O.jsx)("input",{type:"submit",value:"Update Talk",className:"formBtn"}),Object(O.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]})})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"talker",children:["From ",t.displayName]}),Object(O.jsx)("div",{className:"talk",children:Object(O.jsx)("h4",{children:t.text})}),Object(O.jsx)("div",{className:"date",children:S()(t.createdAt).format("YYYY-MM-DD HH:mm:ss")}),t.attachmentUrl&&Object(O.jsx)("a",{href:t.attachmentUrl,children:Object(O.jsx)("img",{src:t.attachmentUrl})}),a&&Object(O.jsxs)("div",{className:"nweet__actions",children:[Object(O.jsx)("span",{onClick:m,className:"trash",children:Object(O.jsx)(g.a,{icon:k.d})}),Object(O.jsx)("span",{onClick:x,children:Object(O.jsx)(g.a,{icon:k.a})})]})]})})},C=a(56),A=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),l=o[0],b=o[1],p=function(){var e=Object(d.a)(j.a.mark((function e(a){var n,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n,displayName:t.displayName},e.next=15,f.collection("GamjaTalk").add(u);case 15:s(""),b(""),console.log(t);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(O.jsxs)("div",{className:"factoryInput__container",children:[Object(O.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(O.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(O.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(O.jsx)("span",{children:"Add photos"}),Object(O.jsx)(g.a,{icon:k.b})]}),Object(O.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(O.jsxs)("div",{className:"factoryForm__attachment",children:[Object(O.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(O.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return b("")},children:[Object(O.jsx)("span",{children:"Remove"}),Object(O.jsx)(g.a,{icon:k.c})]})]})]})},F=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){f.collection("GamjaTalk").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(A,{userObj:t}),Object(O.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(O.jsx)(I,{gObj:e,isOwner:e.creatorId===t.uid,userObj:t},e.id)}))})]})},U=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),r=Object(n.useState)(a.displayName),s=Object(i.a)(r,2),u=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===u){e.next=5;break}return e.next=4,a.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(O.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",utoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(O.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(O.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),c.push("/")},children:"Log Out"})]})},P=function(e){var t=e.userObj;return Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(O.jsx)("li",{children:Object(O.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(O.jsx)(g.a,{icon:v.c,color:"#04AAFF",size:"2x"})})}),Object(O.jsx)("li",{children:Object(O.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(O.jsx)(g.a,{icon:k.e,color:"#04AAFF",size:"2x"}),Object(O.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},_=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return Object(O.jsxs)(u.a,{children:[a&&Object(O.jsx)(P,{userObj:n}),Object(O.jsx)(o.c,{children:a?Object(O.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(F,{userObj:n})}),Object(O.jsx)(o.a,{exact:!0,path:"/profile",children:Object(O.jsx)(U,{userObj:n,refreshUser:t})})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(y,{})})})})]})};var B=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(O.jsx)(O.Fragment,{children:a?Object(O.jsx)(_,{refreshUser:function(){var e=m.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};a(51);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8e296c2b.chunk.js.map