/**
 * Created by Administrator on 2017/8/17.
 */
let obj = {
  distributeData(data){
    let rawBlogs = [];
    let tags = [];
    let times = [];
    let returnObj = {};
    Array.prototype.containTag = function (data) {
      for (let i=0;i<this.length;i++){
        if(this[i].tagName === data){
          return i;
        }
      }
      return -1;
    };
    Array.prototype.containTime = function (time) {
      for (let i=0;i<this.length;i++){
        if(this[i].time === time){
          return i;
        }
      }
      return -1;
    };
    //解析成rawBlogs所要求的格式
    for(let i=0;i<data.length;i++){
      let obj = {};
      obj.blogTitle = data[i].title;
      obj.blogContent = this.decodeSQ(data[i].content);
      obj.blogHtml = this.decodeSQ(data[i].html);
      obj.blogTime = data[i].time;
      obj.blogReadTimes = data[i].readtimes;
      obj.blogTags = data[i].tags.split(/,|，/);
      // console.log(obj);
      rawBlogs.push(obj);
    }
    returnObj.rawBlogs = rawBlogs;
    returnObj.blogs = rawBlogs;
    //解析成tags所要求的格式
    for(let i=0;i<returnObj.rawBlogs.length;i++){
      for(let j=0;j<returnObj.rawBlogs[i].blogTags.length;j++){
        let index = tags.containTag(returnObj.rawBlogs[i].blogTags[j]);
        if(index >= 0){
          tags[index].blogs.push(returnObj.rawBlogs[i]);
        }
        else{
          tags.push({
            tagName:returnObj.rawBlogs[i].blogTags[j],
            blogs:Array(returnObj.rawBlogs[i])
          })
        }
      }
    }
    returnObj.tags = tags;
    // console.log(tags);
    //解析成time所要求的格式
    for(let i=0;i<returnObj.rawBlogs.length;i++){
      let match = returnObj.rawBlogs[i].blogTime.match(/\d{4}-[\d]{1,2}/);
      let time = match[0];
      let index = times.containTime(time);
      if(index >= 0){
        times[index].blogCount = times[index].blogCount + 1;
        times[index].blogTitle.push(returnObj.rawBlogs[i].blogTitle);
      }
      else{
        let obj = {};
        obj.time = time;
        obj.blogCount = 1;
        obj.blogTitle = new Array(returnObj.rawBlogs[i].blogTitle);
        times.push(obj);
      }
    }
    returnObj.time = times;
    // console.log(times);
    return returnObj;
  },
  encodeSQ(str){
    let afterEncoded = str.replace(/'/g,'(sq)');
    return afterEncoded;
  },
  decodeSQ(str){
    let afterDecoded = str.replace(/\(sq\)/g,"'");
    return afterDecoded;
  }
};
export  default obj;
