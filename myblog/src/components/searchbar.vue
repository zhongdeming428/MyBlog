<template>
  <div class="search-bar">
    <h3>搜 索</h3>
    <div class="search-form">
      <input type="text" id="search_context">
      <button @click="search">搜一搜</button>
    </div>
  </div>
</template>
<style scoped>
  .search-bar {
    width: 90%;
    background-color: #9ff;
    padding-bottom: 0.6rem;
    padding-top: 0.6rem;
    margin:1.2rem auto;
    border-radius: 8px;
  }
  .search-form {
    margin: 1.2rem auto;
  }
  #search_context {
    width:50%;
    border:1px solid #c3c3c3;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  @media screen and (max-width: 768px){
    #search_context {
      border:none;
      height:20px;
      display: inline-block;
    }
    button {
      height:20px;
      display: inline-block;
    }
  }
  button {
    width: 28%;
    border:none;
    cursor: pointer;
    font-size: 0.78rem;
    height:1.5rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  button:hover {
    background-color: #62b1e9;
    color: #fff;
  }
</style>
<script>
  export default {
      name:'vueSearchBar',
      methods:{
            search:function () {
              alert('search!');
            }
      }
  }
</script>
