<template>
  <div id="nav">
      <div id="list">
          <ul>
              <li style="">
                  <router-link to="/index/zg"><img :src="logoZGSrc" alt="" style="width:65px;height:65px;"></router-link>
              </li>
              <router-link to="/index/web"><li>前端技术</li></router-link>
              <li>互联网+</li>
              <li>摄影旅行</li>
              <li>生活感悟</li>
              <router-link to="/index/map"><li>地图</li></router-link>
          </ul>
          <div id="search">
              <input type="text" v-model="SearchValue" @keydown="SearchKeyDown" @focus="SearchFocus" @blur="SearchBlur" placeholder="Search...">
          </div>
      </div>
  </div>
</template>
<script>
import logoZG from '@/image/ZG.png'
import Sticky from '@/components/Sticky'
export default {
  name:'navigation',
  data(){
      return {
          logoZGSrc:logoZG,
          SearchValue:''
      }
  },
  methods:{
        SearchBlur(e){
            let ev = e || window.event;
            ev.target.style.width='100px'
        },
        SearchFocus(e){
            let ev = e || window.event;
            ev.target.style.width='150px'
        },
        SearchKeyDown(e){
            let ev = e || window.event;
            if (ev.keyCode==13)
                this.SearchValue='';
        }
  }
}
</script>
<style scoped>
#nav{
    background: #ffffff;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);
    height:65px;
    line-height: 65px;
}
#list{
    /* width:100%; */
    /* min-width: 1000px; */
    max-width: 1200px;
    margin:auto;
    position: relative;
}
#search{
    position:absolute;
    right:0;
    top:0;
}
#search input{
    height:26px;
    border-radius: 15px;
    width:100px;
    padding: 0 10px;
    outline: none;
    transition: 0.5s;
}
#list ul{
    list-style: none;
    height: 70px;
}
#list ul li{
    float: left;
    height: 100%;
    padding:0 10px;
    margin: 0 15px;
    color: #3a3a3a;
}
</style>
