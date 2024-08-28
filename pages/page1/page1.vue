<template>
  <div class="container"> 
    <div class="content">
		<view class="left-panel" >
			<cd-tabbar></cd-tabbar>
		</view>
		<view>
			<view>
				<img src="/static/page1/normal_u3.svg" class="left-arrow"/>
				<img src="/static/page1/u17.png" class="left-icon"/>
			</view>
			<view>
				<img src="/static/page1/normal_u1.svg" class="right-arrow"/>
				<img src="/static/page1/u16.png" class="right-icon"/>
			</view>
		</view>
		<view class="left-page" style="position:absolute; top: 169px;left: 164px;">
			<scroll-view class="chat-content" scroll-y="false" :scroll-top="scrollTop">
			  <view class="msg-list">
				<view v-for="(item, index) in msgList" :key="index" :class="item.type">
				  
				  <view class="ai-message" v-if="item.type === 'bot'">
					<view>
						<view class="bubble left" >{{ item.content }}
						<image v-if="item.image" :src="item.image" class="message-image" @click="create_audio(item.content)"/>
						</view>
					</view>
				  </view>
				  <view class="user-message" v-if="item.type === 'user'">
					<view>
						<view class="bubble right" >{{ item.content }}
						<image v-if="item.image" :src="item.image" class="message-image" />
						</view>
					</view>
				  </view>
				</view>
			  </view>
			</scroll-view>
			<!-- 输入框及发送按钮 -->
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
			<view>
				<loading v-if="isLoading" size="30px" type="default"></loading>
			</view>
		</view>
		<view class="rectangle3" style="position:absolute; top: 169px;left: 594px;">
			<view style="display:flex; width: 682px;height: 341px;box-sizing: border-box;margin-left: 20px;margin-top: 20px;">
				<img src="/static/page1/normal_u18.png" style="width: 29px;height: 29px;box-sizing: border-box;">
				<text style="color:#704a10;font-weight:bold;font-size:20px;margin-left: 10px;">{{title}}</text>
				<img src="/static/page1/normal_u23.png" 
				@click="title !== '' && create_audio(title)"
				style="width: 22px;height: 22px;box-sizing: border-box;margin-left: 10px;">
			</view>
			<view v-if="image !== ''" >
				<img :src="`${BASE_URL}${data[page].pag_img}?t=${new Date().getTime()}`" style="width: 682px;height: 341px;box-sizing: border-box;margin-left: 20px;margin-top: -290px;">
			</view>
			<view class="element3" style="margin-left: 20px;">
				<text style="box-sizing: border-box;text-align: center;line-height: center;">{{content}}</text>
			</view>
			<view style="margin-left:215px;margin-top:40px;display: flex;">
				<img src="/static/common/normal_u41.png" 
				     @click="image !== '' && resetIndex()" 
				     style="width: 35px;height: 35px;box-sizing: border-box;">
				
				<img src="/static/common/normal_u36.png" 
				     @click="image !== '' && deletePage()" 
				     style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(270deg);margin-left:10px;">
					 
				<view style="display: flex;">
					<text style="font-weight:bold;font-size: 20px;margin-left:25px">第</text>
					<text style="color:#dc851f;font-weight:bold;font-size: 20px;margin-left:10px">{{page+1}}</text>
					<text style="font-weight:bold;font-size: 20px;margin-left:10px">页</text>
				</view>
				<img src="/static/common/normal_u36.png" 
				     @click="image !== '' && addPage()" 
				     style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(90deg);margin-left:25px;">
				
				<img :src="sSicon[sSFlag]" 
				     @click="image !== '' && sSradio()" 
				     style="width: 35px;height: 35px;box-sizing: border-box;margin-left:10px;">

			</view>
			<view style="display: flex;margin-left: 20px;margin-top: 20px;">
				<img src="/static/page1/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;">
				<text style="color:#704a10;font-weight:bold;font-size:20px;margin-left: 10px;">设定角色形象和声线</text>
			</view>
			<view v-for="(image, roleName) in role" :key="roleName" style="display: flex; margin-left: 20px; margin-top: 20px;">
			    <img src="/static/page1/normal_u33.png"
					style=" width: 54px;height: 54px;transform: rotate(180deg);box-sizing: border-box;margin-top: 40px;">
			    <!-- <img :src="`${BASE_URL}${image}`" -->
				<img :src="image"
					style="width: 136px;height: 160px;box-sizing: border-box;margin-left:155px;">
			    <view style="display: flex; flex-direction: column; margin-top: 30px;">
					<view>
						<text style="color:#333333; font-size: 18px; font-weight: bold;">角色名：</text>
						<text style="color:#333333; font-size: 18px; font-weight: bold;">{{roleName}}</text>
					</view>
					<view style="display: flex; margin-top: 10px;">
					    <text style="color:#333333; font-size: 18px; font-weight: bold;">音色：</text>
					    <picker mode="selector" :range="['甜美', '稳重','温柔','浑厚','成熟','磁性','大气']" :value="selectedVoice[roleName]"
					        @change="onVoiceChange($event, roleName)">
							<view style="color:#333333; font-size: 18px;">{{selectedVoice[roleName]}}</view>
					    </picker>
					</view>
					<view style="display: flex; margin-top: 10px;">
						<text style="color:#333333; font-size: 18px; font-weight: bold;">音量：</text>
						<text style="color:#333333; font-size: 18px;">{{ format_story_cotent[1][roleName].音量 }}</text>
						<img src="/static/page1/normal_u54.png"
							@click="increaseVolume(roleName)"
							style=" width: 18px;height: 18px;box-sizing: border-box;margin-left:5px;">
						<img src="/static/page1/normal_u53.png"
							@click="decreaseVolume(roleName)"
							style=" width: 18px;height: 18px;box-sizing: border-box;margin-left:5px;">
					</view>
			    </view>
			    <img src="/static/page1/normal_u33.png"
					style=" width: 54px;height: 54px;box-sizing: border-box;margin-top: 40px;margin-left:155px;">
			</view>
		</view>
		<div v-if="!output_ || msgList.length <= 1" class="speech-input" style="z-index: 10;">
		      <span style="position: absolute; top: 558px; left: 288px;">
		        快 点 击 话 筒 
		        <img src="@/static/u100.png" alt="microphone" style="width: 33px; height: 33px; box-sizing: border-box;"/> 
		        吧 
		        <img src="/static/chat/normal_u45.png" style="width: 19px; height: 19px; box-sizing: border-box; margin-left: 10px;">
		      </span>
		    </div>
		<!-- <view v-if="create_flag" class="element4" 
		      style="z-index: 5;position:absolute; top: 662px;left: 532px;"
		      @click="format_story_cotent.length > 0 ? create_switch() : null">
		    <text style="box-sizing: border-box;align-items: center;justify-content: center;font-size: 20px;font-weight: bold;position:absolute; top: 22px;left: 25px;">
		        生 成
		    </text>
		</view> -->
		<view 
		  class="element4" 
		  :style="create_flag ? { zIndex: 5, position: 'absolute', top: '662px', left: '532px' } : { backgroundColor: 'grey', zIndex: 5, position: 'absolute', top: '662px', left: '532px' }"
		  @click="format_story_cotent.length > 0 && create_flag ? create_switch() : null">
		  <text style="box-sizing: border-box; align-items: center; justify-content: center; font-size: 20px; font-weight: bold; position: absolute; top: 22px; left: 25px;">
		    生 成
		  </text>
		</view>

	</div>
  </div>
</template>

<script>
import CdTabbar from '@/pages/tabbar/tabbar.vue';
import {BASE_URL} from "@/config.js";
import Recorder from 'js-audio-recorder'
export default {
	name: 'DrawingPlatform',
	components: {
		CdTabbar
	},
	data() {
		return {
			BASE_URL,
			isLoading: false, 
			selectedStyle: JSON.parse(localStorage.getItem("selectedStyle")),
			selectedAge: JSON.parse(localStorage.getItem("selectedAge")),
			story_messages: [],
			script_messages: [],
			format_story_cotent: [],
			format_script_content: [],
			data: [],
			role: {},
			output_: [],
			selectedVoice: {},
			radio_record: false,
			audioContext: null,
			audioSource: null,
			audioChunks: [],
			user_input: "",
			func_id: 0,
			input_: "",
			username:"",
			title: "",
			page: -1,
			content: "",
			image: "",
			audio: null,
			sSFlag: 0,
			index: 0,
			create_flag: false,
			switch_flag: false,
			sSicon: ["/static/common/normal_u43.png", "/static/common/normal_u40.png"],
			audio_flag: false,
			// 聊天页面
			chatMsg: '',
			msgList: [
				{ type: 'bot', content: '你好啊，请问我有什么可以帮助你的吗？',image:"/static/chat/normal_u45.png" },
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
		async create_switch(){
			console.log("switch_flag", this.switch_flag)
			if (this.switch_flag === false){
				console.log("generatePicBook()")
				this.generatePicBook()
			}else if(this.switch_flag === true){
				this.switch_flag = false
				console.log("audio_modify()")
				this.audio_modify()		
			}
		},
		async generatePicBook() {
			try {
				this.create_flag = false
				this.isLoading = true
				const response = await fetch(`${BASE_URL}/generate/comics`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"seed":546543545,
						"style_name":this.selectedStyle,
						"username": "刘小年",
						"character": this.format_story_cotent,
						"scene": this.format_script_content,
						// age: this.selectedAge
					})
				});
				this.isLoading = false
				if (!response.ok) {
					throw new Error('Story generation failed');
					this.create_flag = true
				}
				
				// const data = await response.json();
				// const response = await fetch('/pages/page1/comics.json');
				// if (!response.ok) {
				// 	throw new Error('Failed to fetch mock data');
				// }
				const response_data = await response.json();
				console.log("generatePicBook", response_data)
				this.data = response_data.data.data
				// this.title = "小明去城堡探险"
				this.role = {"小明": "/static/page1/normal_i2_u64.png"}
				this.page = -1
				this.addPage()
				this.resetIndex()
				// 使用 for 循环遍历所有角色名
				var roleNames = Object.keys(this.role)
				for (let i = 0; i < roleNames.length; i++) {
					const roleName = roleNames[i];
					this.$set(this.selectedVoice, roleName, this.format_story_cotent[1][roleName].音色);
				}
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while generating the story');
			}
		},
		async audio_modify(){
			try {
				this.create_flag = false
				this.isLoading = true
				const response = await fetch(`${BASE_URL}/story/changeaudio`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"story_messages": this.story_messages,
						"script_messages": this.script_messages,
						"format_story_cotent": this.format_story_cotent,
						"format_script_content": this.format_script_content,
						"username":"刘小年",
					})
				});
				this.isLoading = false
				if (!response.ok) {
					throw new Error('Input content failed');
				}
				const data = await response.json();
				this.data.forEach((item, index) => {
				    if (data.data[index]) {
				        item.pag_con = data.datadata2[index].pag_con;
				        item.pag_radio = data.datadata2[index].pag_radio;
				    }
				});
			} catch (error) {
				this.create_flag = true
				console.error('Error:', error);
				alert('An error occurred while input the chat content');
			}
		},
		async onVoiceChange(event, roleName) {
			const newVoiceIndex = event.detail.value;
			var voice = ['甜美', '稳重','温柔','浑厚','成熟','磁性','大气']
			this.$set(this.selectedVoice, roleName, voice[newVoiceIndex]);
			this.format_story_cotent[1][roleName]['音色'] = voice[newVoiceIndex]
			this.switch_flag = true
			this.create_flag = true
		},
		async increaseVolume(roleName) {
			let volume_int = parseInt(this.format_story_cotent[1][roleName].音量)
			if (volume_int < 100) { // 假设音量最大值为100
				volume_int += 1
			}
			this.format_story_cotent[1][roleName].音量 = volume_int.toString()
			this.switch_flag = true
			this.create_flag = true
		},
		async decreaseVolume(roleName){
			let volume_int = parseInt(this.format_story_cotent[1][roleName].音量)
			if (volume_int >= 0) { // 假设音量最大值为100
				volume_int -= 1
			}
			this.format_story_cotent[1][roleName].音量 = volume_int.toString()
			this.switch_flag = true
			this.create_flag = true
		},
		async inputInput() {
			this.input_ = this.user_input
			this.user_input = ""
			if (this.input_.trim() !== '') {
				this.msgList.push({ type: 'user', content: this.input_})
				this.scrollToBottom()
			} else {
				uni.showToast({ title: '不能发送空白消息', icon: 'none' })
			}
			try {
				// 1: 请帮我写一个小明去城堡探险的故事
				// 2: 我想让小明不戴眼镜，戴一顶红色的帽子，音色更深沉一点
				// 3: 我想让小明在城堡中看见发现一个喷泉
				// 4: 绘本最后两页，我想让小明发现了古书中记录的宝藏，并且带宝藏回家
				this.isLoading = true
				const response = await fetch(`${BASE_URL}/story/LLMStory`, {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"story_messages": this.story_messages,
						"script_messages": this.script_messages,
						"format_story_cotent": this.format_story_cotent,
						"format_script_content": this.format_script_content,
						"input_": this.input_,
						"username":"刘小年",
					})
				});
				if (!response.ok) {
					throw new Error('Input content failed');
				}
				this.isLoading = false
				const data = await response.json();
				// console.log(data)
				// const response = await fetch('/pages/page1/LLMstory.json');
				// const reaponse_data = await response.json();
				// if (!response.ok) {
				// 	throw new Error('Failed to fetch mock data');
				// }
				// var data = reaponse_data.data
				console.log(data)
				this.story_messages = data.data.story_messages
				this.script_messages = data.data.script_messages
				this.format_script_content = data.data.format_script_content
				this.format_story_cotent = data.data.format_story_cotent
				this.data = data.data.data
				this.func_id = data.data.func_id
				this.title = data.data.title
				this.create_flag = true
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while input the chat content');
			}
			if(this.func_id == 1){  // 剧本创造
				// this.output_.push(this.format_story_cotent[2])
				this.msgList.push({ type: 'bot', content: this.format_story_cotent[2], image:"/static/chat/normal_u45.png" })
			}else if(this.func_id == 2){  // 角色修改
				let text = ""
				for (const name in this.format_story_cotent[1]) {
					if (this.format_story_cotent[1].hasOwnProperty(name)) {
						const appearance = this.format_story_cotent[1][name]["外貌形象"];
						const tone = this.format_story_cotent[1][name]["音色"];
						text += `${name}: ${appearance}音色${tone};\n`
					}
				}
				text = text.replace(/;\n$/, '。');
				// this.output_.push(`角色形象已经修改为:\n${text}`)
				this.msgList.push({ type: 'bot', content: `角色形象已经修改为:\n${text}`, image:"/static/chat/normal_u45.png" })
			}else if(this.func_id == 3){  // 剧本故事修改
				// this.output_.push(`绘本故事已经修改为: ${this.format_story_cotent[2]}`)
				this.msgList.push({ type: 'bot', content: `绘本故事已经修改为: ${this.format_story_cotent[2]}`, image:"/static/chat/normal_u45.png" })
			}else if(this.func_id == 4){  // 绘本页修改
				let text = ""
				for (let i = 0; i < this.format_script_content.length; i++) {
					text += `第${i+1}页:${this.format_script_content[i]["场景描述"]}\n`
				}
				text = text.replace(/;\n$/, '')
				// this.output_.push(`绘本页已经修改为:\n${text}`)
				this.msgList.push({ type: 'bot', content: `绘本页已经修改为:\n${text}`, image:"/static/chat/normal_u45.png" })
			}else{  // 后台未能做出正确反应
				// this.output_.push("对不起，我没有听清你的意思，你可以再说一遍吗")
				this.msgList.push({ type: 'bot', content: "对不起，我没有听清你的意思，你可以再说一遍吗", image:"/static/chat/normal_u45.png" })
			}
			this.scrollToBottom()
		},
		async create_audio(text) {
		    if (this.audio_flag) {
		        return "";
		    }
		    this.audio_flag = true;
		    try {
		        console.log(text);
		        this.isLoading = true;
		        const response = await fetch(`${BASE_URL}/story/text2audio`, {
		            method: 'POST',
		            headers: {
		                'Content-Type': 'application/json'
		            },
		            body: JSON.stringify({
		                "text": text
		            })
		        });
		        this.isLoading = false;
		        if (!response.ok) {
		            throw new Error('Speech input failed');
		        }
		
		        const data = await response.json();
		        console.log(data.data);
		        var audio_path = data.data.audiopath;
		        var audio = new Audio(`${BASE_URL}${audio_path}`);
		        
		        // 监听音频播放完成事件
		        audio.addEventListener('ended', () => {
		            this.audio_flag = false;
		        });
		
		        // 播放音频
		        audio.play().catch(error => {
		            alert('An error occurred while playing the audio');
		            this.audio_flag = false;
		        });
		        
		    } catch (error) {
		        console.error('Error:', error);
		        alert('An error occurred while processing the speech input');
		        this.audio_flag = false;
		    }
		},
		async inputSpeech() {
			try {
				const response = await fetch('https://your-backend-api.com/inputSpeech', {
					method: 'POST',
					headers: {
					'Content-Type': 'application/json'
					},
					body: JSON.stringify({
					// Add necessary parameters for speech input
					})
				});

				if (!response.ok) {
					throw new Error('Speech input failed');
				}

				const data = await response.json();
				this.storyText = data.storyText;
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while processing the speech input');
			}
		},
		async addPage(){
			if (this.page < this.data.length - 1) {
			    this.page += 1; 
			}else{
				this.page  = 0
			}
			this.resetIndex()
			this.image = this.data[this.page].pag_img
			console.log(this.data[this.page].pag_img)
		},
		async deletePage(){
			if (this.page <= 0){
				this.page = this.data.length - 1
			}else{
				this.page -= 1
			}
			this.resetIndex()
			this.image = this.data[this.page].pag_img
			console.log(this.data[this.page].pag_img)
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
		        // console.log(`${BASE_URL}${this.data[this.page].pag_radio[this.index]}`);
		        this.audio = new Audio(`${BASE_URL}${this.data[this.page].pag_radio[this.index]}`);
		
		        // 监听音频播放完毕事件
		        this.audio.addEventListener('ended', () => {
		            this.index++;
		            if (this.index < this.data[this.page].pag_radio.length) {
		                this.content = this.data[this.page].pag_con[this.index];
		                this.playNextAudio(); // 播放下一个音频
		            } else if (this.page < this.data.length - 1) {
		                // 当前页的音频播放完毕且还有下一页，跳到下一页并播放
		                this.page++;
		                this.index = 0;
		                this.content = this.data[this.page].pag_con[this.index];
		                this.playNextAudio();
		            } else {
		                // 所有页的音频播放完毕，设置 sSFlag 为 0
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
		async resetIndex() {
			if (this.audio) {
			    this.audio.pause();  // 暂停音频
			    this.audio.currentTime = 0;  // 重置播放时间
			}
		    this.index = 0;  // 归零 index
			this.content = this.data[this.page].pag_con[this.index]; 
		    this.sSFlag = 0;  // 重置播放状态
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
		beforeDestroy() {
		    this.stopRecording();
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
		}
	},
	mounted() {
		this.windowHeight = uni.getSystemInfoSync().windowHeight
	},
	computed: {
		windowHeight() {
			return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
		},
	}
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
/*  height: 100vh;
  background-color: #f8f2eb; */
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.time {
  font-size: 18px;
  color: #333;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.content {
  display: flex;
  flex: 1;
}


.menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu-item {
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  border: none;
  background: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.username {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}

.main-panel {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff9f4;
}

.style-selection {
  margin-bottom: 20px;
}

.warning {
  font-size: 18px;
  color: #ff5733;
}

.speech-input {
  font-size: 16px;
  color: #666;
}

.icon-microphone {
  width: 24px;
  height: 24px;
}

.generate-button {
  margin-top: 20px;
}

.generate-button button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ff5733;
  color: #fff;
  border: none;
  border-radius: 5px;
}

.right-panel {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff9f4;
}

.make-book {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #ff5733;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.left-arrow{
	width: 548px;
	height: 56px;
	padding: 2px 2px 2px 2px;
/* 	border-radius: 12px;
	border: 2px solid #ffb74d; */
	background-color: rgba(220, 133, 31, 0);
/* 	box-sizing: border-box;	 */
	/*  max-width: 10%; */
	
	position: absolute; /* 使用绝对定位 */
	top: 100px; /* 距离顶部 100px */
	left: 164px; /* 距离左边 50px */
	z-index: 1;
}
.left-icon{
	width:  38px;
	height: 38px;
	position: absolute; /* 使用绝对定位 */
	top: 109px; /* 距离顶部 100px */
	left: 182px; /* 距离左边 50px */
	z-index: 2;
}

.right-icon{
	width:  40px;
	height: 40px;
	position: absolute; /* 使用绝对定位 */
	top: 109px; /* 距离顶部 100px */
	left: 738px; /* 距离左边 50px */
	z-index: 2;
}

.right-arrow{
	width: 548px;
	height: 56px;
	padding: 2px 2px 2px 2px;
	background-color: rgba(220, 133, 31, 0);
	position: absolute; /* 使用绝对定位 */
	top: 100px; /* 距离顶部 100px */
	left: 721px; /* 距离左边 50px */
	z-index: 1;
}

.left-page{
	  width: 405px;
	  height: 811px;
	  padding: 2px 2px 2px 2px;
	  border-radius: 15px;
	  border: 3px solid rgba(184, 48, 27, 0.38);
	  background-color: rgba(255, 242, 202, 0.22);
	  box-sizing: border-box;
	  box-shadow: 5px 5px 5px 0px #fff2ca;
}
.left-panel {
		width: 10%;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  position: fixed; 
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

.rectangle3 {
  width: 722px;
  height: 810px;
  display: flex;
  flex-direction: column;
  padding: 2px 2px 2px 2px;
  border-radius: 16px;
  background-color: rgba(163, 103, 23, 0.1);
  box-sizing: border-box;
}

.element3 {
  width: 682px;
  height: 85px;
  padding: 2px 2px 2px 2px;
  background-color: #f2f2f2;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #333333;
  text-align: center;
  line-height: 25px;
}

.element4 {
  width: 92px;
  height: 74px;
  padding: 2px 2px 2px 2px;
  border-radius: 12px;
  background-color: #dc851f;
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: normal;
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

