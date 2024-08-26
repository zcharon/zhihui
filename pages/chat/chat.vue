<template>
  <div class="container">
    <view class="left-panel">
    	<cd-tabbar></cd-tabbar>
    </view>
	<view>
		<img src="/static/chat/normal_u56.png" style="width: 51px;height: 51px;box-sizing: border-box;position:absolute; top: 100px;left: 170px">
	</view>
	<view class="content">
		<view class="left-page">
			<view style="margin-bottom:10px;margin-left:25px;display: flex;">
				<text style="color:rgba(169, 102, 24, 0.75);font-weight:bold;font-size: 22px;">{{title}}</text>
				<text style="color:rgba(169, 102, 24, 0.75);font-size: 24px;margin-left: 18px;">{{author}}（{{age}}岁）</text>
				<view style="margin-left: 200px;display: flex;">
					<text class="tag" style="background-color: rgba(242, 176, 176, 1);font-size: 16px;">{{gender}}生</text>
					<text class="tag" style="background-color: rgba(252, 198, 159, 1);font-size: 16px;">{{recomm_age}}岁</text>
				</view>
			</view>
			<view>
				<img 
					:src="`${BASE_URL}${image}`" 
					alt="Beautiful Tree" style="width: 682px;height: 341px;box-sizing: border-box;"/>
			</view>
			<view style="margin-top: 10px;">
				<text style="margin-top:20px;box-sizing: border-box;position: absolute;border-radius: 50%;text-align: center;line-height: center;">{{content}}</text>
			</view>
			<view style="margin-top:100px;display: flex;">
				<view style="margin-left:200px;display: flex;">
					<img src="/static/common/normal_u41.png" 
						@click="resetIndex()" 
						style="width: 35px;height: 35px;box-sizing: border-box;">
					<img src="/static/common/normal_u36.png" 
						@click="deletePage()"
						style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(270deg);margin-left:10px;">
					<view style="display: flex;">
						<text style="font-weight:bold;font-size: 20px;margin-left:25px">第</text>
						<text style="color:#dc851f;font-weight:bold;font-size: 20px;margin-left:5px">{{page+1}}</text>
						<text style="font-weight:bold;font-size: 20px;margin-left:5px">页</text>
					</view>
					<img src="/static/common/normal_u36.png" 
						@click="addPage()"
						style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(90deg);margin-left:25px;">
					<img 
						:src="sSicon[sSFlag]"
						@click="sSradio()" 
						style="width: 35px;height: 35px;box-sizing: border-box;margin-left:10px;">
					<img src="/static/common/normal_u30.svg" style="margin-left: 30px;width: 32px;height: 31px;">
					<img src="/static/common/normal_thumb_icon_u27.svg" style="margin-left: 20px;width: 32px;height: 31px;">
					<!-- <view style="margin-top: 5%;">
						<uni-fav :checked="!this.if_like" class="favBtn" :circle="true" :content-text="contentText" @click="favClick(index)" bgColorChecked="#d15353"/>
					</view> -->
				</view>
			</view>
			<view class="rectangle2" style="margin-top: 10px;">
				<img src="/static/chat/normal_u12.png" style="width: 106px;height: 130px;box-sizing: border-box;margin-left:50px;margin-top: 20px;">
				<img src="/static/chat/normal_u48.png" style="width: 141px;height: 145px;box-sizing: border-box;margin-left:30px;margin-top: 20px;">
				<img src="/static/chat/normal_u54.svg" style="width: 73px;height: 73px;box-sizing: border-box;margin-left:30px;margin-top: 10px;">
			</view>
		</view>
		<view class="right-page" style="position:absolute; top: 30px;left: 723px;">
				<scroll-view class="chat-content" scroll-y="false" :scroll-top="scrollTop">
				  
				  <view class="msg-list">
				    <view v-for="(item, index) in msgList" :key="index" :class="item.type">
				      
				      <view class="ai-message" v-if="item.type === 'bot'">
						<view style="display: flex;">
							<img src="/static/chat/normal_u12.png" class="avatar left-avatar" style="width: 43px;height: 52px;box-sizing: border-box;"/>
							<view class="bubble left" >{{ item.content }}
							<image v-if="item.image" :src="item.image" class="message-image" @click="create_audio(item.content)"/>
							</view>
						</view>
				      </view>
				      
				      <view class="user-message" v-if="item.type === 'user'">
						<view style="display: flex;">
							<img src="/static/chat/normal_u48.png" class="avatar right-avatar" style="width: 53px;height: 55px;box-sizing: border-box;"/>
							<view class="bubble right" >{{ item.content }}
							<image v-if="item.image" :src="item.image" class="message-image" @click="create_audio(item.content)" />
							</view>
							
						</view>
				      </view>
				    </view>
				  </view>
				</scroll-view>
				
				<view>
					<view class="text-field" style="position: absolute; top: 740px; left: 25px;">
					  <input  type="text"  v-model="user_input" @keypress.enter="inputInput" placeholder="" 
						style="width: 200px; height: 30px;"/>
					</view>
					<view @click="audioRecord">
					  <img 
						src="/static/chat/normal_u46.png" 
						style="width: 93px; height: 93px; box-sizing: border-box; position: absolute; top: 685px; left: 285px;" />
					</view>
				</view>
			</view>			      
		</view>
  </div>
</template>

<script>
import CdTabbar from '@/pages/tabbar/tabbar.vue';
import {BASE_URL} from "@/config.js";
import Recorder from 'js-audio-recorder'
export default {
  name: 'App',
  components: {
  	CdTabbar
  },
	data() {
		return {
			BASE_URL,
			// 绘本
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
			index: 0,
			// chat
			// 聊天页面
			chatMsg: '',
			user_input: "",
			msgList: [
				{ type: 'user', content: '这个绘本可真好看！',image:"/static/chat/normal_u45.png" },
				{ type: 'user', content: '很高兴你能接受我的邀请！',image:"/static/chat/normal_u45.png" },
			],
			history_prompts:[
				{ "content": "你好", "role": "user"},
				{ "content": "这个绘本可真好看！很高兴你能接受我的邀请！", "role": "assistant"}
			],
			scrollTop: 0,
			windowHeight: 0,
			inputHeight: 100,
			inputPlaceholder: '快来聊天吧~',
			// 录音
			audioBlob: null,
			isRecording: false,
			recorder: null,
			stream: null,
			placeholder_text: ""
		};
	},
	methods: {
		async inputInput() {
			this.input_ = this.user_input
			this.user_input = ""
			const lastRole = this.history_prompts[this.history_prompts.length - 1].role;
			
			if (lastRole === "user") {
			    this.history_prompts[history_prompts.length - 1].content += this.input_
			} else if (lastRole === "assistant") {
			    this.history_prompts.push({"content": this.input_, "role": "user"})
			}
			if (this.input_.trim() !== '') {
				this.msgList.push({ type: 'bot', content: this.input_})
				this.scrollToBottom()
			} else {
				uni.showToast({ title: '不能发送空白消息', icon: 'none' })
			}
			try {
				const response = await fetch(`${BASE_URL}/story/talk`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"history_prompts": this.history_prompts,
						"input_": this.input_,
					})
				});
				if (!response.ok) {
					throw new Error('Input content failed');
				}
				const data = await response.json();
				this.msgList.push({ type: 'user', content:data.data.output, image:"/static/chat/normal_u45.png" })
				this.history_prompts = data.data.history_prompts
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while input the chat content');
			}
			this.scrollToBottom()
		},
		async create_audio(text){
			try {
				console.log(text)
				this.isLoading = true
				const response = await fetch(`${BASE_URL}/story/text2audio`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"text": text
					})
				});
				this.isLoading = false
				if (!response.ok) {
					throw new Error('Speech input failed');
				}
				
				const data = await response.json();
				console.log(data.data)
				var audio_path = data.data.audiopath
				var audio = new Audio(`${BASE_URL}${audio_path}`);
				audio.play().catch(error => {
				    alert('An error occurred while playing the audio');
				});
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while processing the speech input');
			}
		},
		// 绘本
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
				console.log(`${BASE_URL}${this.data[this.page].pag_radio[this.index]}`)
				this.audio = new Audio(`${BASE_URL}${this.data[this.page].pag_radio[this.index]}`);
				
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
		async fetchBookData(){
			const response = await fetch(`${BASE_URL}/story/fetchBookContent`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					// comic_id: this.comic_id
					comic_id: 1723727775
				})
			});
			if (!response.ok) {
				throw new Error('Fetch data failed');
			}
			// const response = await fetch('/pages/common/bookContent.json');
			// if (!response.ok) {
			// 	throw new Error('Failed to fetch mock data');
			// }
			const data = await response.json();
			console.log(data)
			this.title = data.data.title
			this.author = data.data.author_name
			this.age = data.data.age
			this.gender = data.data.gender
			this.recomm_age = data.data.recomm_age
			this.if_like = data.data.if_like
			this.data = data.data.data
			this.addPage()
		},
		rpxTopx(px) {
			let deviceWidth = uni.getSystemInfoSync().windowWidth
			return (750 / deviceWidth) * px
		},
		handleSend() {
			if (this.chatMsg.trim() !== '') {
				this.msgList.push({ type: 'user', content: this.chatMsg })
				this.chatMsg = ''
				this.scrollToBottom()
			} else {
				uni.showToast({ title: '不能发送空白消息', icon: 'none' })
			}
		},
		scrollToBottom() {
			this.$nextTick(() => {
				let query = uni.createSelectorQuery().in(this)
				query.select('.chat-content').boundingClientRect()
				query.select('.msg-list').boundingClientRect()
				query.exec(res => {
					if (res[1].height > res[0].height) {
						this.scrollTop = res[1].height - res[0].height
					}
				})
			})
		},
		goback() {
			uni.navigateBack()
		},
		async audioRecord(){
			if(this.radio_record === false){
				this.startRecording()
				this.radio_record = true
			}else{
				this.stopRecording()
				this.radio_record = false
			}
		},
		async startRecording() {
		  this.recorder = new Recorder({
		      sampleBits: 16,                 // 采样位数，支持 8 或 16，默认是16
		      sampleRate: 16000,              // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
		      numChannels: 1,                 // 声道，支持 1 或 2， 默认是1
		      // compiling: false,(0.x版本中生效,1.x增加中)  // 是否边录边转换，默认是false
		  });
			Recorder.getPermission().then(() => {
			  console.log('开始录音')
			  this.recorder.start() // 开始录音
			}, (error) => {
			  this.$message({
				message: '请先允许该网页使用麦克风',
				type: 'info'
			  })
			  console.log(`${error.name} : ${error.message}`)
			})
		},
		async stopRecording() {
		  try {
			console.log('停止录音')
			this.uploadAudio(); // 录音停止后立即上传
			this.releaseResources(); // 释放麦克风资源
		  } catch (error) {
			console.error('停止录音失败:', error);
		  }
		},
		async uploadAudio() {
		  if (this.recorder == null || this.recorder.duration === 0) {
			  this.$message({
				message: '请先录音',
				type: 'error'
			  })
			  return false
			}
			this.recorder.stop() // 暂停录音
			this.timer = null
			console.log('上传录音')// 上传录音
			  
			var formData = new FormData()
			const blob = this.recorder.getWAVBlob()// 获取wav格式音频数据
			// 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
			const newbolb = new Blob([blob], { type: 'audio/wav' })
			// const fileOfBlob = new File([newbolb], new Date().getTime() + '.wav')
			formData.append('audio', newbolb, 'recording.wav')
		  
			  const response = await fetch(`${BASE_URL}/story/audio2text`, {
				  method: 'POST',
				  body: formData,
			  })
			  if (!response.ok) {
			  	throw new Error('upload audio failed');
			  }
			  const response_data = await response.json();
			  console.log("audio2text", response_data)
			  this.user_input = response_data.data.text
			  
		},
		releaseResources() {
		  // 释放麦克风资源的实现
		  if (this.recorder) {
		      // 如果录音仍在进行中，则停止录音
		        this.recorder.stop();
				this.recorder.destroy();
			}
		      // 清理录音实例
		      this.recorder = null;
		},
	},
	async mounted() {
		await this.fetchBookData();
		this.windowHeight = uni.getSystemInfoSync().windowHeight
	},
	
	computed: {
		windowHeight() {
			return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
		},
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
  width: 1158px;
  height: 820px;
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

.shape {
  width: 33px;
  height: 31px;
  padding: 2px 2px 2px 2px;
  border: 1px solid rgba(194, 194, 194, 0);
  background-color: #909090;
  box-sizing: border-box;
}
.shape:hover {
  box-sizing: border-box;
}
.shape:active {
  background-color: #d15353;
  box-sizing: border-box;
}
.shape:checked {
  background-color: #ff2f2f;
  box-sizing: border-box;
}

.thumb-icon {
  width: 32px;
  height: 31px;
  padding: 2px 2px 2px 2px;
  background-color: #909090;
  box-sizing: border-box;
}
.thumb-icon:checked {
  background-color: #1e98d7;
  box-sizing: border-box;
}


.left-page{
	position: absolute;
	border-radius: 50%;
}

.rectangle {
  width: 385px;
  height: 764px;
  padding: 2px 2px 2px 2px;
/*  border-radius: 15px; */
/*  border: 3px solid rgba(184, 48, 27, 0.38); */
  background-color: rgba(255, 242, 202, 0.22);
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 0px #fff2ca;
  z-index: 1;
}

.rectangle2 {
  width: 682px;
  height: 208px;
  padding: 2px 2px 2px 2px;
  border-radius: 16px;
  background-color: rgba(163, 103, 23, 0.1);
  box-sizing: border-box;
}

.element2 {
  width: 293px;
  height: 72px;
  padding: 2px 2px 2px 2px;
/*  border-radius: 10px;
  border: 1px solid #ede2d2; */
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #333333;
  text-align: left;
  line-height: normal;
}
.right-page{
	  width: 405px;
	  height: 811px;
	  padding: 2px 2px 2px 2px;
	  border-radius: 15px;
	  border: 3px solid rgba(184, 48, 27, 0.38);
	  background-color: rgba(255, 242, 202, 0.22);
	  box-sizing: border-box;
	  box-shadow: 5px 5px 5px 0px #fff2ca;
	  overflow-y: hidden;
}

.text-field {
  width: 269px;
  height: 38px;
  padding: 2px 2px 2px 2px;
  border: 2px solid #e8d89f;
  background-color: #fef6e2;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #000000;
  text-align: left;
}
.text-field {
  box-sizing: border-box;
  color: #999999;
}
.text-field:disabled {
  background-color: #f0f0f0;
  box-sizing: border-box;
}


.chat-container {
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #f6f6f6;
}

.top-bar {
	display: flex;
	align-items: center;
	height: 80rpx;
	background-color: #fff;
	padding: 0 20rpx;
}

.back-icon {
	cursor: pointer;
}

.title {
	font-size: 34rpx;
	font-weight: 700;
	flex: 1;
	text-align: center;
}

/* .chat-content {
	flex: 1;
	overflow-y: auto;
	background-color: rgba(255, 242, 202, 0.22);
	padding: 20rpx;
} */

.chat-content {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: rgba(255, 242, 202, 0.22);
  height: calc(100% - 60px); /* 留出空间给底部的输入框 */
  overflow-y: hidden; 
}

.msg-list {
	display: flex;
	flex-direction: column;
}

.ai-message .bubble {
	align-self: flex-start;
	background-color: #fff2ca;
}

.user-message .bubble {
	align-self: flex-end;
	background-color: #fce6d5;
}

.bubble {
	padding: 20rpx;
	border-radius: 10rpx;
	max-width: 75%;
	word-wrap: break-word;
	position: relative;
	margin-bottom: 20rpx;
	font-size: 30rpx;
	line-height: 40rpx;
}

.bubble.left::after {
	content: '';
	position: absolute;
	left: -12rpx;
	top: 10rpx;
	width: 0;
	height: 0;
	border: 12rpx solid transparent;
	border-right-color: #fff;
}

.bubble.right::after {
	content: '';
	position: absolute;
	right: -12rpx;
	top: 10rpx;
	width: 0;
	height: 0;
	border: 12rpx solid transparent;
	border-left-color: #c2dcff;
}

.chat-input {
	background-color: #f4f5f7;
	padding: 20rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
}

/* .chat-input {
  background-color: #f4f5f7;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
} */

.input-container {
	display: flex;
	flex: 1;
	background-color: #fff;
	border-radius: 50rpx;
	padding: 20rpx;
}

/* .input-container {
  display: flex;
  width: 100%;
  background-color: #fff;
  border-radius: 50rpx;
  padding: 10px;
} */

textarea {
	flex: 1;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 30rpx;
	padding-left: 20rpx;
	height: 60rpx;
	line-height: 60rpx;
}

.send-button {
	margin-left: 20rpx;
	background-color: #ed5a65;
	color: #fff;
	border-radius: 50rpx;
	padding: 20rpx 40rpx;
	font-size: 28rpx;
}

.message-image {
    max-width: 100%;
	display: inline-block;
	vertical-align: baseline;
/*    margin-top: 10px; */
/*    border-radius: 10px; */
	width: 19px;
	height: 19px;
	box-sizing: border-box;
}
</style>
