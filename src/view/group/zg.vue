<template>
  <div id="zg">
    <Carousel/>
    <div id="zgContent">
      <div id="handleLeftBox">
        <div class="handleLeftList" :key="index" v-for="(i,index) in articleList">
          <div class="handleImage" >
            <img :src="i.articleImage" alt="">
          </div>
          <div class="handleArticle">
            <p class="articleTitle">{{i.articleTitle}}</p>
            <p class="articleDetail" v-html="i.articleContent"></p>
            <div class="articleFooter">
              <img src="http://dreamwq.com/wp-content/uploads/2016/03/img02.jpg" alt="">
              <span>{{i.nickName}}</span>
              <span>{{i.createTime}}</span>
              <span>浏览量：{{i.pageView}}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="handleRightBox">
        <PopularTags></PopularTags>
        <br>
        <Archives></Archives>
        <br>
        <LinkMe></LinkMe>
      </div>
    </div>
    <div style="clear:both;">
      <input type="text" v-model="Account">
      <input type="text" v-model="Password">
      <button @click="submit">tijao</button>
    </div>
  </div>
</template>
<script>
import {postAccount,queryArticleList} from '@/api/index'
import Carousel from '@/components/carousel/index.vue';
import LinkMe from '@/components/linkMe';
import PopularTags from '@/components/ZgComponents/popularTags.vue';
import Archives from '@/components/ZgComponents/archives.vue';
export default {
  name:'zg',
  data(){
    return{
      Account:'',
      Password:'',
      articleList:[]
    }
  },
  components:{
    Carousel,
    LinkMe,
    PopularTags,
    Archives
  },
  created(){
    this.getArticle()
  },
  methods:{
    submit(){
      postAccount(this.Account,this.Password).then(Response=>{
        console.log(Response)
      })
    },
    getArticle(){
      queryArticleList().then(Response=>{
        if(Response.data.status=='success'){
          this.articleList=Response.data.result
        }else{
          alert("数据库请求失败")
        }
        
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
#zg{
  min-width: 1000px;
  /* width: 100%; */
  
  /* max-width: 1200px; */
  margin: auto;
  margin-top:10px;
}
#zgContent{
  max-width: 1200px;
  margin:15px auto;
}
#handleLeftBox{
  width:73%;
  float:left;
}
#handleRightBox{
  width:25%;
  float:right;
}
.handleLeftList{
  padding: 10px;
  margin-bottom:10px;
  display: flex;
  background: #ffffff;
}
.handleImage{
  width:13vw;
  height:130px;
  padding: 5px;
}
.handleImage img{
  width:100%;
  height:100%;
  transition: 1s;
}
.handleImage:hover img{
  transform: scale(1.1) rotate(3deg);
  /* opacity: 0.9; */
  box-shadow: 1px 2px 3px rgba(186, 240, 231, 0.9)
}
.handleArticle{
  flex: 1;
  padding-left:10px;
}
.articleTitle{
  margin-top: 3px;
  font-size: 22px;
}
.articleDetail{
  margin-top: 5px;
  color: #3f3f3f;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  
  width: 100%;
}
.articleFooter{
  margin-top: 20px;
  line-height: 30px;
}
.articleFooter img{
  width: 25px;
  height: 25px;
  border-radius: 100%;
  /* vertical-align: middle; */
}
.articleFooter span{
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #A0ADB4;
  margin-right: 15px;
}
</style>
