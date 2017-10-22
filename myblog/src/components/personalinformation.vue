<template>
  <div class="personal-info">
    <h3>简 介</h3>
    <ul>
      <li>姓名：钟德鸣</li>
      <li>性别：男</li>
      <li>学校：武汉理工大学</li>
      <li>职业：前端开发工程师</li>
    </ul>
  </div>
</template>
<style scoped>
  .personal-info {
    width:90%;
    margin:1.2rem auto;
    background-color: #9ff;
    padding-bottom: 0.6rem;
    padding-top: 0.6rem;
    border-radius:8px;
  }
  h3,
  ul {
    display: block;
    width:80%;
    margin:auto;
  }
  ul {
    text-align: left;
    font-size: 0.9rem;
    padding-top:1.2rem;
    padding-bottom: 1.2rem;
  }
</style>
<script>
  export default {
      name:'vue-info-card'
  }
</script>
