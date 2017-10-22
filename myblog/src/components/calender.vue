<template>
  <div class="calender">
    <div class="calender-tip">
      <button @click="prev"><</button>
      <h5>{{arr.year}} 年 {{arr.month}} 月</h5>
      <button @click="next">></button>
    </div>
    <table>
      <thead>
        <tr>
          <td>日</td>
          <td>一</td>
          <td>二</td>
          <td>三</td>
          <td>四</td>
          <td>五</td>
          <td>六</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in arr.arr">
          <td v-for="item in items"><div v-html="item"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  .calender {
    width: 100%;
    padding-top: 1rem;
    margin:auto;
  }
  button {
    cursor: pointer;
    border:1px solid #c3c3c3;
    display: inline;
    font-size: 0.6rem;
  }
  h5 {
    display: inline;
  }
  tbody td {
    border:0.125rem solid white;
  }
  thead {
    background-color: #e8edf4;
    font-weight: bold;
  }
  td {
      /*width: 1.6rem;*/
      /*height: 1.6rem;*/
  }
  div {
    background-color: #e8edf4;
    line-height: 1.6rem;
  }
  table {
    width:100%;
  }
  td>div {
    background-color: #aabbff;
  }
</style>
<script>
    function calculateDate(year,month,day) {
      let firstDayOfMonth = (new Date(year+','+month+','+1)).getDay();
      let arr = new Array();
      let temp = firstDayOfMonth;
      let daysOfMonth = (new Date(year,month,0)).getDate();

      for(let i=0;i<6;i++){
        let array = new Array(null,null,null,null,null,null,null);
        arr.push(array);
      }
      for(let i = 0;i<7-temp;i++){
        arr[0][firstDayOfMonth] = i+1;
        firstDayOfMonth = firstDayOfMonth + 1;
      }
      let x = arr[0][6]+1;
      for(let i=1;i<6;i++){
        for(let j=0;j<7;j++){
          if(x <= daysOfMonth){
            if(x === day){
              arr[i][j] = '<span style="color:white;display:block;background-color: blue;width: 100%;height: 100%;">'+ x +'</span>';
            }
            else{
              arr[i][j] = x;
            }
            x++;
          }
          else{
            arr[i][j] = null;
          }
        }
      }
      return { arr, year, month, day };
    }
  export default {
      name:'VueCalender',
      data(){
          let time = new Date();
          let year = time.getFullYear();
          let month = time.getMonth()+1;
          let day = time.getDate();
          let arr = calculateDate(year,month,day);
          return { arr };
      },
      methods:{
            prev:function () {
              let day =(new Date()).getDate();
              if(--this.arr.month<1){
                  this.arr.month ++;
              }
              this.arr = calculateDate(this.arr.year,this.arr.month,day);
            },
            next:function () {
              let day =(new Date()).getDate();
              if(++this.arr.month>12){
                  this.arr.month--;
              }
              this.arr = calculateDate(this.arr.year,this.arr.month,day);
            }
      }
  }
</script>
