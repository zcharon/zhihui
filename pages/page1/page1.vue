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
			<!-- <img src="/static/chat/normal_u41.svg" class="rectangle" style="margin-left: 753px;margin-top:30px;"> -->
<!-- 				<img src="/static/chat/normal_u41.svg" class="rectangle" style="position:absolute; top: 169px;left: 164px;"> -->
			<!-- <view style="z-index: 2;  position: absolute; top: 169px;left: 185px;"> -->
			<view style="z-index: 2; margin-left: 10px; margin-top: 10px;">
			    <!-- 遍历输出聊天记录 -->
			    <block v-for="(message, index) in output_" :key="index">
			        <view :style="{ marginTop: index === 0 ? '10px' : '20px', marginBottom: '50px', position: 'relative', display: 'flex', alignItems: 'flex-start' }">
			            <!-- 当前用户信息 -->
			            <view v-if="index % 2 === 0" style="display: flex; align-items: flex-start;">
			                <view style="margin-left: 10px; position: relative; flex-grow: 1;">
			                    <view style="padding: 10px; border-radius: 10px; max-width: var(--svg-width); position: relative; z-index: 1; background-color: transparent; word-wrap: break-word;">
			                        <text>{{ message }}</text>
			                    </view>
			                    <img src="/static/chat/normal_u44.svg" style="position: absolute; top: 0; left: 0; z-index: 0; width: var(--svg-width); height: auto;">
			                    <img src="/static/chat/normal_u45.png" style="width: 19px; height: 19px; box-sizing: border-box; position: absolute; top: 5px; right: -25px; z-index: 1;">
			                </view>
			            </view>
			    
			            <!-- 机器人信息 -->
			            <view v-else style="display: flex; align-items: flex-start;">
			                <view style="margin-left: 10px; position: relative; flex-grow: 1;">
			                    <view style="padding: 10px; border-radius: 10px; max-width: var(--svg-width); position: relative; z-index: 1; background-color: transparent; word-wrap: break-word;">
			                        <text>{{ message }}</text>
			                    </view>
			                    <img src="/static/chat/normal_u44.svg" style="position: absolute; top: 0; left: 0; z-index: 0; width: var(--svg-width); height: auto;">
			                    <img src="/static/chat/normal_u45.png" style="width: 19px; height: 19px; box-sizing: border-box; position: absolute; top: 5px; right: -25px; z-index: 1;">
			                </view>
			            </view>
			        </view>
			    </block>

			
			    <!-- 输入框及发送按钮 -->
			    <view>
			        <view class="text-field" style="position: absolute; top: 740px; left: 25px;">
			          <input  type="text"  v-model="user_input" @keypress.enter="inputInput" placeholder="input text" 
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
		<view class="rectangle3" style="position:absolute; top: 169px;left: 594px;">
			<view style="display:flex; width: 682px;height: 341px;box-sizing: border-box;margin-left: 20px;margin-top: 20px;">
				<img src="/static/page1/normal_u18.png" style="width: 29px;height: 29px;box-sizing: border-box;">
				<text style="color:#704a10;font-weight:bold;font-size:20px;margin-left: 10px;">{{title}}</text>
				<img src="/static/page1/normal_u23.png" style="width: 22px;height: 22px;box-sizing: border-box;margin-left: 10px;">
			</view>
			<view v-if="image !== ''" >
				<img :src="image" style="width: 682px;height: 341px;box-sizing: border-box;margin-left: 20px;margin-top: -290px;">
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
					style="width: 54px; height: 54px; transform: rotate(180deg); box-sizing: border-box; margin-top: 40px;"/>
			    <img :src="image"
					style="width: 136px; height: 160px; box-sizing: border-box; margin-left: 5px;"/>
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
							style="width: 18px; height: 18px; box-sizing: border-box; margin-left: 5px;"/>
						<img src="/static/page1/normal_u53.png"
							@click="decreaseVolume(roleName)"
							style="width: 18px; height: 18px; box-sizing: border-box; margin-left: 5px;"/>
					</view>
			    </view>
			    <img src="/static/page1/normal_u33.png"
					style="width: 54px; height: 54px; box-sizing: border-box; margin-top: 40px; margin-left: 5px;"/>
			</view>
		</view>
		<div v-if="!output_ || output_.length === 0" class="speech-input" style="z-index: 10;">
		      <span style="position: absolute; top: 558px; left: 288px;">
		        快 点 击 话 筒 
		        <img src="@/static/u100.png" alt="microphone" style="width: 33px; height: 33px; box-sizing: border-box;"/> 
		        吧 
		        <img src="/static/chat/normal_u45.png" style="width: 19px; height: 19px; box-sizing: border-box; margin-left: 10px;">
		      </span>
		    </div>
		<view class="element4" 
		      style="z-index: 5;position:absolute; top: 662px;left: 532px;"
		      @click="format_story_cotent.length > 0 ? generatePicBook() : null">
		    <text style="box-sizing: border-box;align-items: center;justify-content: center;font-size: 20px;font-weight: bold;position:absolute; top: 22px;left: 25px;">
		        生 成
		    </text>
		</view>
	</div>
  </div>
</template>

<script>
import CdTabbar from '@/pages/tabbar/tabbar.vue';
export default {
	name: 'DrawingPlatform',
	components: {
		CdTabbar
	},
	data() {
		return {
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
			sSicon: ["/static/common/normal_u43.png", "/static/common/normal_u40.png"],
		};
	},
	methods: {
		async generatePicBook() {
			try {
				// const response = await fetch('https://your-backend-api.com/generateStory', {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 		style: this.selectedStyle,
				// 		age: this.selectedAge
				// 	})
				// });

				// if (!response.ok) {
				// 	throw new Error('Story generation failed');
				// }
				
				// const data = await response.json();
				const response = await fetch('/pages/page1/comics.json');
				const response_data = await response.json();
				if (!response.ok) {
					throw new Error('Failed to fetch mock data');
				}
				this.data = response_data.data.data
				this.title = response_data.data.title
				this.role = response_data.data.role
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
		async onVoiceChange(event, roleName) {
			const newVoiceIndex = event.detail.value;
			var voice = ['甜美', '稳重','温柔','浑厚','成熟','磁性','大气']
			this.$set(this.selectedVoice, roleName, voice[newVoiceIndex]);
			this.format_story_cotent[1][roleName]['音色'] = voice[newVoiceIndex]
		},
		async increaseVolume(roleName) {
			let volume_int = parseInt(this.format_story_cotent[1][roleName].音量)
			if (volume_int < 100) { // 假设音量最大值为100
				volume_int += 1
			}
			this.format_story_cotent[1][roleName].音量 = volume_int.toString()
		},
		async decreaseVolume(roleName){
			let volume_int = parseInt(this.format_story_cotent[1][roleName].音量)
			if (volume_int >= 0) { // 假设音量最大值为100
				volume_int -= 1
			}
			this.format_story_cotent[1][roleName].音量 = volume_int.toString()
		},
		async inputInput() {
			try {
				// const response = await fetch('https://your-backend-api.com/inputSpeech', {
				// 	method: 'POST',
				// 	headers: {
				// 	'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 	// Add necessary parameters for speech input
				// 	})
				// });
				// if (!response.ok) {
				// 	throw new Error('Speech input failed');
				// }
				// const data = await response.json();
				this.input_ = this.user_input
				this.user_input = "input text"
				this.output_.push(this.input_)
				const response = await fetch('/pages/page1/LLMstory.json');
				const reaponse_data = await response.json();
				if (!response.ok) {
					throw new Error('Failed to fetch mock data');
				}
				var data = reaponse_data.data
				this.story_messages = data.story_messages
				this.script_messages = data.script_messages
				this.format_script_content = data.format_script_content
				this.format_story_cotent = data.format_story_cotent
				this.data = data.data
				this.func_id = data.func_id
			} catch (error) {
				console.error('Error:', error);
				alert('An error occurred while processing the speech input');
			}
			if(this.func_id == 0){  // 剧本创造
				this.output_.push(this.format_story_cotent[2])
			}else if(this.func_id == 1){  // 角色修改
				let text = ""
				for (const name in this.format_story_cotent[1]) {
				    if (this.format_story_cotent[1].hasOwnProperty(name)) {
				        const appearance = this.format_story_cotent[1][name]["外貌形象"];
				        const tone = this.format_story_cotent[1][name]["音色"];
				        text += `${name}: ${appearance}音色${tone};\n`
				    }
				}
				text = text.replace(/;\n$/, '。');
				this.output_.push(`角色形象已经修改为:\n${text}`)
			}else if(this.func_id == 2){  // 剧本故事修改
				this.output_.push(`绘本故事已经修改为: ${this.format_story_cotent[2]}`)
			}else if(this.func_id == 3){  // 绘本页修改
				let text = ""
				for (let i = 0; i < this.format_script_content.length; i++) {
					text += `第${i+1}页:${this.format_script_content[i]["场景描述"]}\n`
				}
				text = text.replace(/;\n$/, '')
				this.output_.push(`绘本页已经修改为:\n${text}`)
			}else{  // 后台未能做出正确反应
				this.output_.push("对不起，我没有听清你的意思，你可以再说一遍吗")
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
		async resetIndex() {
		    this.index = 0;  // 归零 index
			this.content = this.data[this.page].pag_con[this.index]; 
		    this.sSFlag = 0;  // 重置播放状态
		    if (this.audio) {
		        this.audio.pause();  // 暂停音频
		        this.audio.currentTime = 0;  // 重置播放时间
		    }
		},
		async audioRecord(){
			if(this.radio_record == false){
				this.startRecording()
				this.radio_record = true
			}else{
				this.stopRecording()
				this.radio_record = false
			}
		},
		startRecording() {
		    navigator.mediaDevices.getUserMedia({ audio: true })
		    .then(stream => {
		        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		        this.mediaRecorder = new MediaRecorder(stream);
		        this.audioChunks = [];
		
		        this.mediaRecorder.ondataavailable = event => {
		            this.audioChunks.push(event.data);
		        };
		
		        this.mediaRecorder.start();
		    })
		    .catch(error => {
		        console.error('无法获取麦克风权限:', error);
		    });
		},
		stopRecording() {
		    if (this.mediaRecorder) {
		        this.mediaRecorder.stop();
		        this.mediaRecorder.onstop = () => {
					const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
					this.sendAudioToServer(audioBlob);
		        };
		      }
		    if (this.audioContext) {
				this.audioContext.close();
		    }
		},
		sendAudioToServer(audioBlob) {
		    const formData = new FormData();
		    formData.append('audio', audioBlob, 'recording.wav');
		
		    fetch('YOUR_BACKEND_URL', {
		        method: 'POST',
		        body: formData,
		    })
		    .then(response => response.json())
		    .then(data => {
		        console.log('服务器返回的数据:', data);
		    })
		    .catch(error => {
		        console.error('发送音频到服务器失败:', error);
		    });
		},
		beforeDestroy() {
		    this.stopRecording();
		}
	},
	mounted() {
		
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
</style>

