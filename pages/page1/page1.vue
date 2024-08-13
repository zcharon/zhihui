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
				<view style="z-index: 2; margin-left:10px;margin-top: 10px;">
					<view>
						<view  style="margin-left:10px;margin-top: 10px;">
							<img src="/static/chat/normal_u12.png" style="width: 53px;height: 65px;box-sizing: border-box;">
							<img src="/static/chat/normal_u44.svg" class="element2">
						</view>
						<view style="z-index: 3;display:flex;position:absolute; top: 30px;left: 90px;">
							<text >这个好好看</text>
							<img src="/static/chat/normal_u45.png" style="width: 19px;height: 19px;box-sizing: border-box;margin-left: 150px;">
						</view>
					</view>
					<view style="margin-left:10px;margin-top: 10px;">
						<view>
							<img src="/static/chat/normal_u48.png" style="width: 53px;height: 55px;box-sizing: border-box;">
							<img src="/static/chat/normal_u44.svg" class="element2" >
						</view>
						<view style="z-index: 3; display:flex;position:absolute; top: 115px;left: 90px;">
							<text>我也觉得</text>
							<img src="/static/chat/normal_u45.png" style="width: 19px;height: 19px;box-sizing: border-box;margin-left: 165px;">
						</view>	
					</view>
					<view>
						<view class="text-field" style=" position:absolute; top: 740px;left: 25px;">
							<text>input text</text>
						</view>
						<view>
							<img src="/static/chat/normal_u46.png" style="width: 93px;height: 93px;box-sizing: border-box;position:absolute; top: 685px;left: 285px;">
						</view>
					</view>
				</view>
		</view>
		<view class="rectangle3" style="position:absolute; top: 169px;left: 594px;">
			<view style="display:flex; width: 682px;height: 341px;box-sizing: border-box;margin-left: 20px;margin-top: 20px;">
				<img src="/static/page1/normal_u18.png" style="width: 29px;height: 29px;box-sizing: border-box;">
				<text style="color:#704a10;font-weight:bold;font-size:20px;margin-left: 10px;">小明去城堡冒险</text>
				<img src="/static/page1/normal_u23.png" style="width: 22px;height: 22px;box-sizing: border-box;margin-left: 10px;">
			</view>
			<view>
				<img src="/static/page1/normal_u71.png" style="width: 682px;height: 341px;box-sizing: border-box;margin-left: 20px;margin-top: -290px;">
			</view>
			<view class="element3" style="margin-left: 20px;">
				<text style="box-sizing: border-box;text-align: center;line-height: center;">小明一直对城堡的历史和传说很感兴趣，所以他决定来一次城堡探险。</text>
			</view>
			<view style="margin-left:215px;margin-top:40px;display: flex;">
				<img src="/static/common/normal_u41.png" style="width: 35px;height: 35px;box-sizing: border-box;">
				<img src="/static/common/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(270deg);margin-left:10px;">
				<view style="display: flex;">
					<text style="font-weight:bold;font-size: 20px;margin-left:25px">第</text>
					<text style="color:#dc851f;font-weight:bold;font-size: 20px;margin-left:10px">1</text>
					<text style="font-weight:bold;font-size: 20px;margin-left:10px">页</text>
				</view>
				<img src="/static/common/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(90deg);margin-left:25px;">
				<img src="/static/common/normal_u40.png" style="width: 35px;height: 35px;box-sizing: border-box;margin-left:10px;">
			</view>
			<view style="display: flex;margin-left: 20px;margin-top: 20px;">
				<img src="/static/page1/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;">
				<text style="color:#704a10;font-weight:bold;font-size:20px;margin-left: 10px;">设定角色形象和声线</text>
			</view>
			<view style="display: flex;margin-left: 20px;margin-top: 20px;">
				<img src="/static/page1/normal_u33.png" style=" width: 54px;height: 54px;transform: rotate(180deg);box-sizing: border-box;">
				<img src="/static/page1/normal_i2_u64.png" style="width: 136px;height: 160px;box-sizing: border-box;">
				<view style="display: flex; flex-direction: column;">
					<text style="color:#333333;font-size: 18px;font-weight: bold;">角色名：小明</text>
					<view style="display: flex;">
						<text style="color:#333333;font-size: 18px;font-weight: bold;">音色：</text>
					</view>
					<view style="display: flex;">
						<text style="color:#333333;font-size: 18px;font-weight: bold;">音量：</text>
					</view>
				</view>
				<img src="/static/page1/normal_i4_u70.png" style="width: 139px;height: 140px;box-sizing: border-box;">
				<img src="/static/page1/normal_u33.png" style=" width: 54px;height: 54px;box-sizing: border-box;">
			</view>
		</view>
<!--        <div class="speech-input">
          <span>快点击话筒 <img src="@/static/u100.png" alt="microphone" class="icon-microphone"/> 吧</span>
        </div> -->
	</div>
  </div>
</template>

<script>
export default {
  name: 'DrawingPlatform',
  data() {
    return {
      selectedStyle: '',
      selectedAge: '',
      storyText: '',
      imageUrl: '',
      characterImageUrl: '',
    };
  },
  methods: {
    goToHome() {
      uni.navigateTo({
        url: '/pages/mainpage/mainpage'
      });
    },
    goToRegions() {
      this.$router.push({ name: 'Regions' });
    },
    goToLibrary() {
      this.$router.push({ name: 'Library' });
    },
    goToFriends() {
      this.$router.push({ name: 'Friends' });
    },
    async generateStory() {
      try {
        const response = await fetch('https://your-backend-api.com/generateStory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            style: this.selectedStyle,
            age: this.selectedAge
          })
        });

        if (!response.ok) {
          throw new Error('Story generation failed');
        }

        const data = await response.json();
        this.storyText = data.storyText;
        this.imageUrl = data.imageUrl;
        this.characterImageUrl = data.characterImageUrl;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while generating the story');
      }
    },
    async modifyStory() {
      try {
        const response = await fetch('https://your-backend-api.com/modifyStory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            storyText: this.storyText
          })
        });

        if (!response.ok) {
          throw new Error('Story modification failed');
        }

        const data = await response.json();
        this.storyText = data.storyText;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while modifying the story');
      }
    },
    async modifyVoice() {
      try {
        const response = await fetch('https://your-backend-api.com/modifyVoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            storyText: this.storyText
          })
        });

        if (!response.ok) {
          throw new Error('Voice modification failed');
        }

        const data = await response.json();
        // Handle the modified voice data
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while modifying the voice');
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
    async makeBook() {
      // Add your logic for making the book
    }
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

.left-panel {
  width: 20%;
  background-color: #ffefe4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
</style>
