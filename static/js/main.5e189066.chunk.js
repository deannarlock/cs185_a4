(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/images1.9a3dd6ad.jpeg"},function(e,t,a){e.exports=a.p+"static/media/images2.f2bb5115.jpeg"},function(e,t,a){e.exports=a.p+"static/media/images3.8adea5d7.jpeg"},function(e,t,a){e.exports=a.p+"static/media/images4.67ce9f8e.jpeg"},function(e,t,a){e.exports=a.p+"static/media/images5.2dbe8cbe.jpeg"},function(e,t,a){e.exports=a.p+"static/media/images6.279b0b53.jpeg"},,,function(e,t,a){e.exports=a(60)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/home.f72ccf34.jpeg"},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/zepplin.9407d9b6.jpg"},function(e,t,a){e.exports=a.p+"static/media/pulp.edcf36b4.jpg"},function(e,t,a){e.exports=a.p+"static/media/dim.136c9ed7.jpg"},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(21),s=a.n(l),c=(a(28),a(3)),r=a(4),o=a(6),u=a(5),m=(a(29),a(30),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).addStyling=function(){return e.props.tab.id==e.props.activeTab?{backgroundColor:"rgb(140,140,140)"}:{backgroundColor:"rgb(210,210,210)"}},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},i.a.createElement("h2",null,this.props.tab.title))}}]),a}(n.Component)),p=(a(31),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"nav-bar"},this.props.tabs.map((function(t){return i.a.createElement(m,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})})))}}]),a}(n.Component)),d=(a(32),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"home-body"},i.a.createElement("div",{className:"image-div"},i.a.createElement("img",{src:a(33),className:"profile-image"})),i.a.createElement("div",{className:"profile-text"},i.a.createElement("h3",null,"About Me."),i.a.createElement("p",null,"This webpage contains information about me. Navigate through the tabs to check out places I've been, things I've seen and content I'm interested in.")))}}]),n}(n.Component)),h=(a(34),a(35),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={disp:0},e.setDisp=function(){e.setState({disp:0})},e.setDisp1=function(){e.setState({disp:1})},e.setDisp2=function(){e.setState({disp:2})},e.setDisp3=function(){e.setState({disp:3})},e.setDisp4=function(){e.setState({disp:4})},e.setDisp5=function(){e.setState({disp:5})},e.setDisp6=function(){e.setState({disp:6})},e.displayContent=function(){return 0==e.state.disp?i.a.createElement("div",{className:"gallery"},i.a.createElement("img",{src:a(15),onClick:e.setDisp1}),i.a.createElement("img",{src:a(16),onClick:e.setDisp2}),i.a.createElement("img",{src:a(17),onClick:e.setDisp3}),i.a.createElement("img",{src:a(18),onClick:e.setDisp4}),i.a.createElement("img",{src:a(19),onClick:e.setDisp5}),i.a.createElement("img",{src:a(20),onClick:e.setDisp6})):1==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(15),className:"large-image"})):2==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(16),className:"large-image"})):3==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(17),className:"large-image"})):4==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(18),className:"large-image"})):5==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(19),className:"large-image"})):6==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(20),className:"large-image"})):void 0},e}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,this.displayContent())}}]),n}(n.Component)),b=a(22),v=a.n(b),g=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement("div",null,i.a.createElement(v.a,null)))}}]),a}(n.Component),f=(a(41),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"vid-container"},i.a.createElement("div",{className:"vid"},i.a.createElement("h3",null,"Alaska"),i.a.createElement("iframe",{src:"https://www.youtube.com/embed/wFFWOARHE2I",className:"yt"})),i.a.createElement("div",{className:"vid"},i.a.createElement("h3",null,"Mt. Tamalpais"),i.a.createElement("iframe",{src:"https://www.youtube.com/embed/HqU4BDE6sTE",className:"yt"})))}}]),a}(n.Component)),E=(a(42),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",null,i.a.createElement("h3",null,"Music"),i.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DX56bqlsMxJYR"},i.a.createElement("img",{src:a(43)}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Movies"),i.a.createElement("a",{href:"https://www.imdb.com/title/tt0110912/"},i.a.createElement("img",{src:a(44)}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Food"),i.a.createElement("a",{href:"https://www.yanksing.com/"},i.a.createElement("img",{src:a(45)}))))}}]),n}(n.Component)),y=a(9),j={apiKey:"AIzaSyBgiXOZ7TVrw9W-iWvYrKaQ9zT6WnGxxoE",authDomain:"cs185-a5.firebaseapp.com",databaseURL:"https://cs185-a5.firebaseio.com"},O=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.data)}}]),a}(n.Component),C=(a(46),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={inputName:"",inputDesc:"",inputMessage:"",inputAllow:"",inputEmail:""},e.handleChangeName=e.handleChangeName.bind(Object(y.a)(e)),e.handleChangeDesc=e.handleChangeDesc.bind(Object(y.a)(e)),e.handleChangeMessage=e.handleChangeMessage.bind(Object(y.a)(e)),e.handleChangeEmail=e.handleChangeEmail.bind(Object(y.a)(e)),e.handleChangeAllow=e.handleChangeAllow.bind(Object(y.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(y.a)(e)),e}return Object(r.a)(a,[{key:"handleChangeName",value:function(e){this.setState({inputName:e.target.value})}},{key:"handleChangeDesc",value:function(e){this.setState({inputDesc:e.target.value})}},{key:"handleChangeMessage",value:function(e){this.setState({inputMessage:e.target.value})}},{key:"handleChangeAllow",value:function(e){this.setState({inputAllow:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({inputEmail:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.inputName;console.log(t),e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("label",null,"Name:",i.a.createElement("input",{type:"text",value:this.state.inputName,onChange:this.handleChangeName})),i.a.createElement("label",null,"Description:",i.a.createElement("input",{type:"text",value:this.state.inputDesc,onChange:this.handleChangeDesc})),i.a.createElement("label",null,"Message:",i.a.createElement("input",{type:"text",value:this.state.inputMessage,onChange:this.handleChangeMessage})),i.a.createElement("label",null,"View Public:",i.a.createElement("input",{type:"text",value:this.state.inputAllow,onChange:this.handleChangeAllow})),i.a.createElement("label",null,"Email:",i.a.createElement("input",{type:"text",value:this.state.inputEmail,onChange:this.handleChangeEmail})),i.a.createElement("input",{type:"submit",value:"Submit"})),i.a.createElement("h1",null,this.state.value))}}]),a}(n.Component)),k=(a(47),a(48)),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={data:[],inputName:"Dean",inputDesc:"HEy",inputMessage:"Yo",inputAllow:"YEs",inputEmail:"deannarlock@yo.com"},e.handleSubmit=e.handleSubmit.bind(Object(y.a)(e)),e.displayPosts=e.displayPosts.bind(Object(y.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t={};t.name=this.state.inputName,t.desc=this.state.inputDesc,t.message=this.state.inputMessage,t.allow=this.state.inputAllow,t.email=this.state.inputEmail,k.database().ref("data").push().set(t)}},{key:"componentDidMount",value:function(){var e=this;k.apps.length||(k.initializeApp(j),k.database().ref("data").on("value",(function(t){var a=t.val();e.setState({data:a})})))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;this.state.shouldUpdate!=t.shouldUpdate&&(k.initializeApp(j),k.database().ref("data").on("value",(function(e){var t=e.val();n.setState({data:t})})))}},{key:"displayPosts",value:function(e){for(var t in e)return console.log(t),i.a.createElement(O,{data:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"feed-page"},i.a.createElement("div",{onClick:this.handleSubmit},"Hey"),i.a.createElement("div",{className:"user-side"},i.a.createElement(C,null)),i.a.createElement("div",{className:"view-side"},i.a.createElement("div",null,this.displayPosts(this.state.data))))}}]),a}(n.Component),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).displayContent=function(){var t=e.props.activeTab;return 1==t?i.a.createElement(d,null):2==t?i.a.createElement(g,null):3==t?i.a.createElement(f,null):4==t?i.a.createElement(E,null):i.a.createElement(N,null)},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,this.displayContent())}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeTab:1},n.changeTab=function(e){n.setState({activeTab:e})},n.header=function(e){return 1==e?"Home":2==e?"Images":3==e?"Videos":4==e?"Favorites":"Feed"},n}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement("div",null,i.a.createElement("h1",null,this.header(this.state.activeTab))),i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"nav-bar"},i.a.createElement(p,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Places"},{id:4,title:"Favorites"},{id:5,title:"Feed"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),i.a.createElement("div",{className:"main-body"},i.a.createElement(w,{activeTab:this.state.activeTab}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.5e189066.chunk.js.map