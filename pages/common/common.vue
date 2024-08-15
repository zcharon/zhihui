<template>
  <div class="container">
	<view class="left-panel">
		<cd-tabbar></cd-tabbar>
	</view>
	<view class="content">
		  <view style="margin-top:20px;margin-bottom:20px;margin-left:30px;display: flex;">
				<text style="color:rgba(169, 102, 24, 0.75);font-weight:bold;font-size: 22px;">{{title}}</text>
				<text style="color:rgba(169, 102, 24, 0.75);font-size: 24px;margin-left: 18px;">{{author}}（{{age}}岁）</text>
				<view style="margin-left: 450px;display: flex;">
					<text class="tag" style="background-color: rgba(242, 176, 176, 1);font-size: 16px;">{{gender}}生</text>
					<text class="tag" style="background-color: rgba(252, 198, 159, 1);font-size: 16px;">{{recomm_age}}岁</text>
				</view>
				<img src="/static/common/normal_u30.svg" class="shape" style="margin-left: 30px;width: 32px;height: 31px;">
				<img src="/static/common/normal_thumb_icon_u27.svg" class="thumb-icon" style="margin-left: 20px;width: 32px;height: 31px;">
		  </view>
		  <img :src="image" alt="Beautiful Tree" style="width: 1102px;height: 551px;box-sizing: border-box;"/>
		  <text style="margin-top:20px; text-align: center;line-height: center;">{{content}}</text>
		  <view style="margin-top:30px;display: flex;">
			<view style="margin-left:380px;display: flex;">
				<img src="/static/common/normal_u41.png"  @click="resetIndex()" style="width: 35px;height: 35px;box-sizing: border-box;">
				<img src="/static/common/normal_u36.png" @click="deletePage()" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(270deg);margin-left:5px;">
				<view style="display: flex;">
					<text style="font-weight:bold;font-size: 20px;margin-left:25px">第</text>
					<text style="color:#dc851f;font-weight:bold;font-size: 20px;margin-left:5px">{{page+1}}</text>
					<text style="font-weight:bold;font-size: 20px;margin-left:5px">页</text>
				</view>
				<img src="/static/common/normal_u36.png" @click="addPage()" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(90deg);margin-left:25px;">
				<img :src="sSicon[sSFlag]" @click="sSradio()" style="width: 35px;height: 35px;box-sizing: border-box;margin-left:5px;">
				<img src="/static/common/normal_u42.png" style="width: 31px;height: 31px;box-sizing: border-box;margin-left:5px;">
			</view>
			<view style="display: flex;margin-left:200px;">
				<text style="color:rgba(169, 102, 24, 0.75);font-weight:bold;font-size: 20px;margin-right: 8px;">知识卡片</text>
			  	<switch @change="handleSwitchChange" color="#FFCC33" />
			</view>
			<view>
				<img v-show="switch_flag" src="/static/common/normal_u58.png" style="width: 34px;height: 34px;box-sizing: border-box;position:absolute; top: 500px;left: 200px;">
			</view>
		  </view>
	</view>
  </div>
</template>

<script>
import CdTabbar from '@/pages/tabbar/tabbar.vue';
export default {
	name: 'App',
	components: {
		CdTabbar
	},
	data() {
		return {
			comic_id: this.$route.query.comic_id,
			title: "",
			author: "",
			age: 0,
			gender: "",
			recomm_age: "",
			data: [],
			page: -1,
			content: "",
			image: "",
			if_like: false,
			audio: null,
			switch_flag : false,
			sSicon: ["/static/common/normal_u43.png", "/static/common/normal_u40.png"],
			sSFlag: 0,
			index: 0
		};
	},
	
	methods: {
		async addPage(){
			if (this.page < this.data.length - 1) {
			    this.page += 1; 
			}else{
				this.page  = 0
			}
			this.resetIndex()
			this.image = this.data[this.page].pag_img
		},
		async deletePage(){
			if (this.page <= 0){
				this.page = this.data.length - 1
			}else{
				this.page -= 1
			}
			this.resetIndex()
			this.image = this.data[this.page].pag_img
		},
		sSradio() {
		    if (this.sSFlag == 0) {
		        this.sSFlag = 1;
		        this.playNextAudio();
		    } else {
		        this.sSFlag = 0;
		        this.audio.pause();  // 暂停音频
		        this.audio.currentTime = 0;  // 重置播放时间
		    }
		},
		playNextAudio() {
		    if (this.index < this.data[this.page].pag_radio.length) {
		        // 播放当前音频
		        this.audio = new Audio(this.data[this.page].pag_radio[this.index]);
		        
		        // 监听音频播放完毕事件
		        this.audio.addEventListener('ended', () => {
		            this.index++;
		            if (this.index < this.data[this.page].pag_radio.length) {
		                this.content = this.data[this.page].pag_con[this.index];
		                this.playNextAudio(); // 播放下一个音频
		            } else {
		                // 所有音频播放完毕后，设置 sSFlag 为 0 并保持 index 在最后一个
		                this.sSFlag = 0;
		                this.index = this.data[this.page].pag_radio.length - 1; // 保持在最后一个音频的索引
		            }
		        });
		        
		        this.audio.play();
		    } else {
		        // 如果没有音频可以播放，直接设置 sSFlag 为 0 并保持 index 在最后一个
		        this.sSFlag = 0;
		        this.index = this.data[this.page].pag_radio.length - 1; // 保持在最后一个音频的索引
		    }
		},
		resetIndex() {
		    this.index = 0;  // 归零 index
			this.content = this.data[this.page].pag_con[this.index]; 
		    this.sSFlag = 0;  // 重置播放状态
		    if (this.audio) {
		        this.audio.pause();  // 暂停音频
		        this.audio.currentTime = 0;  // 重置播放时间
		    }
		},
		favClick(){
			this.if_like = !this.if_like
		},
		handleSwitchChange(){
			this.switch_flag = !this.switch_flag
		},
		async fetchBookData(){
			// const response = await fetch('https://your-backend-api.com/login', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({
			// 		comic_id: this.comic_id
			// 	})
			// });
			// if (!response.ok) {
			// 	throw new Error('Fetch data failed');
			// }
			const response = await fetch('/pages/common/bookContent.json');
			if (!response.ok) {
				throw new Error('Failed to fetch mock data');
			}
			const data = await response.json();
			this.title = data.title
			this.author = data.author
			this.age = data.age
			this.gender = data.gender
			this.recomm_age = data.recomm_age
			this.if_like = data.if_like
			this.data = data.data
			this.addPage()
		}
	},
	async mounted() {
		await this.fetchBookData();

	}
}
</script>

<style scoped>
	
.container {
	  font-family: Arial, sans-serif;
	  padding: 20px;
}
.app {
  font-family: 'Arial', sans-serif;
  color: #333;
/*  max-width: 1000px; */
  margin: auto;
}

.header {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
}

.logo {
  height: 40px;
  margin-right: 20px;
}

.search-bar {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.navigation {
  display: flex;
  justify-content: space-around;
  background-color: #f4f4f4;
  padding: 10px 0;
}

.nav-button {
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: bold;
}

.content {
  display: flex;
 flex-direction: column;
/*  align-items: center; */
 padding: 80px;
 width: 1172px;
 height: 813px;
 padding: 2px 2px 2px 2px;
 border-radius: 5px;
 border: 1px solid #fef6e2;
 background-color: #f6f1ed;
 box-sizing: border-box;
 position: absolute; 
 top: 155px; 
 left: 174px;
}

.main-image {
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.media-controls button {
  background: none;
  border: none;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
}

.volume-slider input {
  width: 100%;
}

.card-background {
  width: 1172px;
  height: 813px;
  padding: 2px 2px 2px 2px;
  border-radius: 5px;
  border: 1px solid #fef6e2;
  background-color: #f6f1ed;
  box-sizing: border-box;
  position: absolute; 
  top: 155px; 
  left: 174px;
}

.left-panel {
		width: 10%;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  position: fixed; 
}

.tag {
	display: inline-block;
	margin-top: 0.5em;
	font-size: 1rem;
	text-align: left;
  width: 5em;

  margin-right: 10px;
  padding: 2px 2px 2px 2px;
  border-radius: 9px;
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: normal;
} 

/* .shape {
  width: 33px;
  height: 31px;
  padding: 2px 2px 2px 2px;
  border: 1px solid rgba(194, 194, 194, 0);
  background-color: #909090;
  box-sizing: border-box;
} */
/* .shape:hover {
  box-sizing: border-box;
}
.shape:active {
  background-color: #d15353;
  box-sizing: border-box;
}
.shape:checked {
  background-color: #ff2f2f;
  box-sizing: border-box;
} */

/* .thumb-icon {
  width: 32px;
  height: 31px;
  padding: 2px 2px 2px 2px;
  background-color: #909090;
  box-sizing: border-box;
} */
/* .thumb-icon:checked {
  background-color: #1e98d7;
  box-sizing: border-box;
} */
</style>