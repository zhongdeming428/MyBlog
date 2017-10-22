<template>
  <div id="app">
    <blog-header></blog-header>
    <div class="main-body">
      <left-menu></left-menu>
      <vue-router-panel></vue-router-panel>
    </div>
    <vue-login-modal></vue-login-modal>
    <write-comment></write-comment>
    <display-comments></display-comments>
    <div class="footer">
      <a href="http://www.miitbeian.gov.cn/">湘ICP备17018024号</a>
    </div>
  </div>
</template>

<script>
  import blogHeader from './components/header.vue'
  import LeftMenu from "./components/leftmenu";
  import VueRouterPanel from "./components/routerview";
  import VueLoginModal from "./components/loginmodal";
  import './assets/css/blog.css'
  import WriteComment from "./components/writeComment";
  import DisplayComments from "./components/displayComments";

  export default {
    name: 'app',
    components:{DisplayComments, WriteComment, VueLoginModal, VueRouterPanel, LeftMenu, blogHeader }
  }
</script>
<style>
  .ql-container {
    height:700px !important;
  }
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
  font-size: 16px;
}
body {
  background-color: aliceblue;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px auto;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-between;
}
.footer {
  width:100%;
  height:100px;
}
.footer>a {
  display: block;
  margin-top: 50px;
  text-align: center;
  font-size: 0.9rem;
  text-decoration: none;
}
h3 {
  width: 80%;
  margin:auto;
  background-color: #62b1e9;
  font-size: 1.5rem;
  font-weight: bold;
  height:2rem;
  line-height: 2rem;
  color: #fff;
  border:1px solid #9bcaeb;
  -webkit-border-radius: 0.6rem;
  -moz-border-radius: 0.6rem;
  border-radius: 0.6rem;
  text-align: center;
  cursor: pointer;
}
h3:hover {
  animation: changecolor 2s infinite;
}
@keyframes changecolor {
  0%{background-color: #62b1e9}
  50% {background-color: #3b5ba4;}
  100% {background-color: #62b1e9}
}
.main-body {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
  opacity: 0.8;
}
@media screen and (max-width:768px) {
  html {
    font-size: 6px;
  }
  #app {
    width: 100%;
  }
}
</style>
