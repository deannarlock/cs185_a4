(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(37),s=a.n(c),l=(a(44),a(3)),r=a(4),o=a(6),m=a(5),u=(a(45),a(46),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).addStyling=function(){return e.props.tab.id==e.props.activeTab?{backgroundColor:"rgb(140,140,140)"}:{backgroundColor:"rgb(210,210,210)"}},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"tab",style:this.addStyling(),onClick:this.props.changeTab.bind(this,this.props.tab.id)},i.a.createElement("h2",null,this.props.tab.title))}}]),a}(n.Component)),d=(a(47),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"nav-bar"},this.props.tabs.map((function(t){return i.a.createElement(u,{tab:t,changeTab:e.props.changeTab,activeTab:e.props.activeTab})})))}}]),a}(n.Component)),p=(a(48),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"home-body"},i.a.createElement("div",{className:"image-div"},i.a.createElement("img",{src:a(49),className:"profile-image"})),i.a.createElement("div",{className:"profile-text"},i.a.createElement("h3",null,"About Me."),i.a.createElement("p",null,"This webpage contains information about me. Navigate through the tabs to check out places I've been, things I've seen and content I'm interested in.")))}}]),n}(n.Component)),v=(a(50),a(51),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={disp:0},e.setDisp=function(){e.setState({disp:0})},e.setDisp1=function(){e.setState({disp:1})},e.setDisp2=function(){e.setState({disp:2})},e.setDisp3=function(){e.setState({disp:3})},e.setDisp4=function(){e.setState({disp:4})},e.setDisp5=function(){e.setState({disp:5})},e.setDisp6=function(){e.setState({disp:6})},e.displayContent=function(){return 0==e.state.disp?i.a.createElement("div",{className:"gallery"},i.a.createElement("img",{src:a(18),onClick:e.setDisp1}),i.a.createElement("img",{src:a(19),onClick:e.setDisp2}),i.a.createElement("img",{src:a(20),onClick:e.setDisp3}),i.a.createElement("img",{src:a(21),onClick:e.setDisp4}),i.a.createElement("img",{src:a(22),onClick:e.setDisp5}),i.a.createElement("img",{src:a(23),onClick:e.setDisp6})):1==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(18),className:"large-image"})):2==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(19),className:"large-image"})):3==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(20),className:"large-image"})):4==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(21),className:"large-image"})):5==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(22),className:"large-image"})):6==e.state.disp?i.a.createElement("div",{onClick:e.setDisp,className:"large-image-cont"},i.a.createElement("img",{src:a(23),className:"large-image"})):void 0},e}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,this.displayContent())}}]),n}(n.Component)),h=a(38),f=a.n(h),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement("div",null,i.a.createElement(f.a,null)))}}]),a}(n.Component),k=(a(56),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"vid-container"},i.a.createElement("div",{className:"vid"},i.a.createElement("h3",null,"Alaska"),i.a.createElement("iframe",{src:"https://www.youtube.com/embed/wFFWOARHE2I",className:"yt"})),i.a.createElement("div",{className:"vid"},i.a.createElement("h3",null,"Mt. Tamalpais"),i.a.createElement("iframe",{src:"https://www.youtube.com/embed/HqU4BDE6sTE",className:"yt"})))}}]),a}(n.Component)),E=(a(57),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"row"},i.a.createElement("div",null,i.a.createElement("h3",null,"Music"),i.a.createElement("a",{href:"https://open.spotify.com/playlist/37i9dQZF1DX56bqlsMxJYR"},i.a.createElement("img",{src:a(58)}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Movies"),i.a.createElement("a",{href:"https://www.imdb.com/title/tt0110912/"},i.a.createElement("img",{src:a(59)}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Food"),i.a.createElement("a",{href:"https://www.yanksing.com/"},i.a.createElement("img",{src:a(60)}))))}}]),n}(n.Component)),g=a(10),C={apiKey:"AIzaSyBgiXOZ7TVrw9W-iWvYrKaQ9zT6WnGxxoE",authDomain:"cs185-a5.firebaseapp.com",databaseURL:"https://cs185-a5.firebaseio.com"},y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.data)}}]),a}(n.Component),D=(a(61),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={inputName:"",inputDesc:"",inputMessage:"",inputAllow:"",inputEmail:""},e.handleChangeName=e.handleChangeName.bind(Object(g.a)(e)),e.handleChangeDesc=e.handleChangeDesc.bind(Object(g.a)(e)),e.handleChangeMessage=e.handleChangeMessage.bind(Object(g.a)(e)),e.handleChangeEmail=e.handleChangeEmail.bind(Object(g.a)(e)),e.handleChangeAllow=e.handleChangeAllow.bind(Object(g.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e}return Object(r.a)(a,[{key:"handleChangeName",value:function(e){this.setState({inputName:e.target.value})}},{key:"handleChangeDesc",value:function(e){this.setState({inputDesc:e.target.value})}},{key:"handleChangeMessage",value:function(e){this.setState({inputMessage:e.target.value})}},{key:"handleChangeAllow",value:function(e){this.setState({inputAllow:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({inputEmail:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("label",null,"Name:",i.a.createElement("input",{type:"text",value:this.state.inputName,onChange:this.handleChangeName})),i.a.createElement("label",null,"Description:",i.a.createElement("input",{type:"text",value:this.state.inputDesc,onChange:this.handleChangeDesc})),i.a.createElement("label",null,"Message:",i.a.createElement("input",{type:"text",value:this.state.inputMessage,onChange:this.handleChangeMessage})),i.a.createElement("label",null,"View Public:",i.a.createElement("input",{type:"text",value:this.state.inputAllow,onChange:this.handleChangeAllow})),i.a.createElement("label",null,"Email:",i.a.createElement("input",{type:"text",value:this.state.inputEmail,onChange:this.handleChangeEmail})),i.a.createElement("input",{type:"submit",value:"Submit"})),i.a.createElement("h1",null,this.state.value))}}]),a}(n.Component)),j=(a(62),a(63)),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={data:[],inputName:"Dean",inputDesc:"Hey",inputMessage:"Yo",inputAllow:"YEs",inputEmail:"deannarlock@yo.com"},e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e.displayPosts=e.displayPosts.bind(Object(g.a)(e)),e}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t={};t.name=this.state.inputName,t.desc=this.state.inputDesc,t.message=this.state.inputMessage,t.allow=this.state.inputAllow,t.email=this.state.inputEmail,j.database().ref("data").push().set(t)}},{key:"componentDidMount",value:function(){var e=this;j.apps.length||(j.initializeApp(C),j.database().ref("data").on("value",(function(t){var a=t.val();e.setState({data:a})})))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;this.state.shouldUpdate!=t.shouldUpdate&&(j.initializeApp(C),j.database().ref("data").on("value",(function(e){var t=e.val();n.setState({data:t})})))}},{key:"displayPosts",value:function(e){for(var t in e)return console.log(t),i.a.createElement(y,{data:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"feed-page"},i.a.createElement("div",{onClick:this.handleSubmit},"Hey"),i.a.createElement("div",{className:"user-side"},i.a.createElement(D,null)),i.a.createElement("div",{className:"view-side"},i.a.createElement("div",null,this.displayPosts(this.state.data))))}}]),a}(n.Component),w=a(13),S=a.n(w),N=a(15),M=(a(26),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={clicked:0},e.displayContent=function(){if(0==e.state.clicked)return i.a.createElement("div",{className:"movie"},i.a.createElement("figure",{className:"tint"},i.a.createElement("img",{src:e.props.info.Poster,className:"poster"})))},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{onClick:this.props.setClicked},this.displayContent())}}]),a}(n.Component)),I=(a(75),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"display"},i.a.createElement("div",{className:"poster-cont"},i.a.createElement("img",{src:this.props.info.Poster,className:"poster"})),i.a.createElement("div",{className:"info-cont"},i.a.createElement("h2",null,this.props.info.Title),i.a.createElement("h3",null,"Directed By: ",this.props.info.Director),i.a.createElement("h3",null,"imdb Rating: ",this.props.info.imdbRating)))}}]),a}(n.Component)),T=(a(76),a(27).default);var x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={movieData1:{},movieData2:{},movieData3:{},movieData4:{},movieData5:{},movieData6:{},movieData7:{},movieData8:{},clicked1:0,clicked2:0,clicked3:0,clicked4:0,clicked5:0,clicked6:0,clicked7:0,clicked8:0},e.setClicked1=function(){0==e.state.clicked1?e.setState({clicked1:1}):e.setState({clicked1:0})},e.setClicked2=function(){0==e.state.clicked2?e.setState({clicked2:1}):e.setState({clicked2:0})},e.setClicked3=function(){0==e.state.clicked3?e.setState({clicked3:1}):e.setState({clicked3:0})},e.setClicked4=function(){0==e.state.clicked4?e.setState({clicked4:1}):e.setState({clicked4:0})},e.setClicked5=function(){0==e.state.clicked5?e.setState({clicked5:1}):e.setState({clicked5:0})},e.setClicked6=function(){0==e.state.clicked6?e.setState({clicked6:1}):e.setState({clicked6:0})},e.setClicked7=function(){0==e.state.clicked7?e.setState({clicked7:1}):e.setState({clicked7:0})},e.setClicked8=function(){0==e.state.clicked8?e.setState({clicked8:1}):e.setState({clicked8:0})},e.returnClicked=function(){e.setState({clicked1:0,clicked2:0,clicked3:0,clicked4:0,clicked5:0,clicked6:0,clicked7:0,clicked8:0})},e.displayContent=function(){return 0==e.state.clicked1&&0==e.state.clicked2&&0==e.state.clicked3&&0==e.state.clicked4&&0==e.state.clicked5&&0==e.state.clicked6&&0==e.state.clicked7&&0==e.state.clicked8?i.a.createElement("div",{className:"movie-gallery"},i.a.createElement(M,{className:"movie",info:e.state.movieData1,setClicked:e.setClicked1}),i.a.createElement(M,{className:"movie",info:e.state.movieData2,setClicked:e.setClicked2}),i.a.createElement(M,{className:"movie",info:e.state.movieData3,setClicked:e.setClicked3}),i.a.createElement(M,{className:"movie",info:e.state.movieData4,setClicked:e.setClicked4}),i.a.createElement(M,{className:"movie",info:e.state.movieData5,setClicked:e.setClicked5}),i.a.createElement(M,{className:"movie",info:e.state.movieData6,setClicked:e.setClicked6}),i.a.createElement(M,{className:"movie",info:e.state.movieData7,setClicked:e.setClicked7}),i.a.createElement(M,{className:"movie",info:e.state.movieData8,setClicked:e.setClicked8})):1==e.state.clicked1?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData1})):1==e.state.clicked2?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData2})):1==e.state.clicked3?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData3})):1==e.state.clicked4?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData4})):1==e.state.clicked5?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData5})):1==e.state.clicked6?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData6})):1==e.state.clicked7?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData7})):1==e.state.clicked8?i.a.createElement("div",{onClick:e.returnClicked},i.a.createElement(I,{info:e.state.movieData8})):void 0},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0110912").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData1:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt6751668").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData2:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0068646").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData3:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0105236").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData4:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0423294").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData5:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0499549").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData6:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0077928").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData7:t})}));t="&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat("tt0910970").concat(t);T.get(a).then((function(e){return e.data})).then((function(t){e.setState({movieData8:t})}))}},{key:"render",value:function(){return i.a.createElement("div",null,this.displayContent())}}]),a}(n.Component),A=(a(93),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"movie"},i.a.createElement("div",{className:"poster-cont"},i.a.createElement("img",{src:this.props.info[0],className:"poster"})))}}]),a}(n.Component)),L=(a(105),a(27).default),P=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleClick=function(){e.addMovie(e.state.movieIds[e.state.numMovies])},e.handleChangeId=function(t){e.setState({ID:t.target.value})},e.handleChangeDeleteID=function(t){e.setState({deleteID:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!=e.state.ID&&e.addMovie(e.state.ID)},e.handleSubmit2=function(t){t.preventDefault(),""!=e.state.deleteID&&e.deleteMovie(e.state.deleteID)},e.displayContent=function(){return e.state.numMovies>0?i.a.createElement("div",{className:"movie-gallery"},e.state.movieIdList.map((function(e){return i.a.createElement(A,{className:"movie",info:e})}))):i.a.createElement("div",null,"No Movies")},e.state={ID:"",deleteID:"",movieIds:[],tempMovieData:{},tempMovie:[],movieIdList:[],numMovies:0},e}return Object(r.a)(a,[{key:"addMovie",value:function(){var e=Object(N.a)(S.a.mark((function e(t){var a,n,i,c=this;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://www.omdbapi.com/?i=","&apikey=287d3faa",a="https://www.omdbapi.com/?i=".concat(t).concat("&apikey=287d3faa"),L.get(a).then((function(e){return e.data})).then((function(e){c.setState({tempMovieData:e,tempMovie:[e.Poster,e.Title,e.Director,e.imdbRating,t]})})),n=[this.state.tempMovie],i=this.state.movieIdList.concat(n),0!=this.state.numMovies?this.setState({movieIdList:i}):this.setState({movieIdList:this.state.movieIdList}),this.setState({numMovies:this.state.numMovies+1});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(e){for(var t=0,a=0;a<this.state.numMovies-1&&!(a>this.state.numMovies);){if(this.state.movieIdList[a][4]==e){t=1;break}a++}if(1==t){var n=this.state.movieIdList.slice(0,a),i=this.state.movieIdList.slice(a+1,this.state.numMovies-1),c=n.concat(i);a+1<this.state.numMovies?this.setState({movieIdList:c}):this.setState({movieIdList:n}),this.setState({numMovies:this.state.numMovies-1})}}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("label",null,"Add Id:",i.a.createElement("input",{type:"text",value:this.state.ID,onChange:this.handleChangeId})),i.a.createElement("input",{type:"submit",value:"Submit"})),i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit2},i.a.createElement("label",null,"Delete Id:",i.a.createElement("input",{type:"text",value:this.state.deleteID,onChange:this.handleChangeDeleteID})),i.a.createElement("input",{type:"submit",value:"Submit"}))),i.a.createElement("div",null,this.displayContent()))}}]),a}(n.Component),F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).displayContent=function(){var t=e.props.activeTab;return 1==t?i.a.createElement(p,null):2==t?i.a.createElement(b,null):3==t?i.a.createElement(k,null):4==t?i.a.createElement(E,null):5==t?i.a.createElement(O,null):6==t?i.a.createElement(x,null):i.a.createElement(P,null)},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,this.displayContent())}}]),a}(n.Component),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={activeTab:1},n.changeTab=function(e){n.setState({activeTab:e})},n.header=function(e){return 1==e?"Home":2==e?"Images":3==e?"Videos":4==e?"Favorites":5==e?"Feed":6==e?"Movies":"MovieBase"},n}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"page"},i.a.createElement("div",null,i.a.createElement("h1",null,this.header(this.state.activeTab))),i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"nav-bar"},i.a.createElement(d,{tabs:[{id:1,title:"Home"},{id:2,title:"Images"},{id:3,title:"Places"},{id:4,title:"Favorites"},{id:5,title:"Feed"},{id:6,title:"Movies"},{id:7,title:"MovieBase"}],changeTab:this.changeTab,activeTab:this.state.activeTab})),i.a.createElement("div",{className:"main-body"},i.a.createElement(F,{activeTab:this.state.activeTab}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,a){e.exports=a.p+"static/media/images1.9a3dd6ad.jpeg"},19:function(e,t,a){e.exports=a.p+"static/media/images2.f2bb5115.jpeg"},20:function(e,t,a){e.exports=a.p+"static/media/images3.8adea5d7.jpeg"},21:function(e,t,a){e.exports=a.p+"static/media/images4.67ce9f8e.jpeg"},22:function(e,t,a){e.exports=a.p+"static/media/images5.2dbe8cbe.jpeg"},23:function(e,t,a){e.exports=a.p+"static/media/images6.279b0b53.jpeg"},26:function(e,t,a){},39:function(e,t,a){e.exports=a(106)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/home.f72ccf34.jpeg"},50:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/zepplin.9407d9b6.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/pulp.edcf36b4.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/dim.136c9ed7.jpg"},61:function(e,t,a){},62:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.9cc7afad.chunk.js.map