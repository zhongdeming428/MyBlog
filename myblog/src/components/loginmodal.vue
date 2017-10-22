<template>
  <div class="login" v-show="isShow">
    <div class="login-modal"></div>
    <transition name="dialog">
      <div class="login-dialog" v-show="isShow">
        <div class="login-header">
          <span @click="close">╳</span>
        </div>
        <div class="login-content">
          <div>
            <label for="user">账号：</label><input type="text" name="user" v-model="user"/>
          </div>
          <div>
            <label for="psw">密码：</label><input type="password" name="psw" v-model="password"/>
          </div>
          <div>
            <label for="rememberPsw">记住密码：</label><input type="checkbox" v-model="isRemember"/>
          </div>
        </div>
        <div class="login-footer">
          <button @click="login">登 录</button>
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped>
  .login {
    width: 100%;
    height:100%;
  }
  .login-modal {
    width: 100%;
    height:100%;
    background-color: black;
    opacity: 0.5;
    position: fixed;
    left: 0px;
    top:0px;
    z-index: 9999;
  }
  .login-dialog {
    width: 500px;
    height:250px;
    left:50%;
    top:10%;
    transform: translate(-50%,0);
    z-index: 10000;
    position: fixed;
    background-color: white;

  }
  .login-header {
    height:2rem;
  }
  .login-header span {
    position: absolute;
    right:3px;
    color: red;
    margin: 3px;
    font-size: 2rem;
    cursor: pointer;
  }
  .login-content {
    height: 6rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;
  }
  [name='user'],
  [name='psw'] {
    width: 12rem;
    text-indent: 3px;
  }
  .login-footer {
    width: 100%;
    height:5rem;
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .login button {
    width: 3.2rem;
    height:1.8rem;
    position: absolute;
    right:2rem;
    border:none;
    background-color: blueviolet;
    color: #fff;
    cursor: pointer;
  }
  .dialog-enter-active {
    animation: showIn 0.5s;
  }
  @keyframes showIn {
    from{transform: translate(-50%,-500px);opacity: 0}
    to{transform: translate(-50%,0px);opacity: 1}
  }
</style>
<script>
  import Cookie from './../assets/js/cookie.js'
  export default {
      name:'vue-login-modal',
      data(){
          let user = null,
              password = null,
              isRemember = false;
          if(Cookie.getCookie('user') !== null){
              user = Cookie.getCookie('user');
              password = Cookie.getCookie('psw');
              isRemember = true;
              this.$store.commit('changeLogIn',true);
          }
          return { user, password, isRemember };
      },
      computed:{
          isShow(){
              let isShow = this.$store.state.modalIsShow;
              return isShow;
          }
      },
      methods:{
            close(){
                this.$store.commit('modalControl',false);
            },
            login(){
              let that = this;
              this.$http.post('/PHP/login.php',{
                user:this.user,
                psw:this.password
              },{
                  emulateJSON:true
              }).then(
                  function (data) {
                    if(data.data == 1){
                        alert('登录成功！');
                        if(that.isRemember){
                          Cookie.saveCookie('user',that.user,30);
                          Cookie.saveCookie('psw',that.password,30);
                        }
                        else{
                          Cookie.deleteCookie('user');
                          Cookie.deleteCookie('psw');
                        }
                        this.$store.commit('changeLogIn',true);
                        that.close();
                    }
                    else{
                        alert('password is incorrect!');
                    }
                  },
                function (error) {
                  alert(error);
                }
              );
            }
      }
  }
</script>
