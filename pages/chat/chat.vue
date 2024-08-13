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
				<text style="color:rgba(169, 102, 24, 0.75);font-weight:bold;font-size: 22px;">奉献的草</text>
				<text style="color:rgba(169, 102, 24, 0.75);font-size: 24px;margin-left: 18px;">刘小年（4岁）</text>
				<view style="margin-left: 200px;display: flex;">
					<text class="tag" style="background-color: rgba(242, 176, 176, 1);font-size: 16px;">女生</text>
					<text class="tag" style="background-color: rgba(252, 198, 159, 1);font-size: 16px;">3-6岁</text>
				</view>
			</view>
			<view>
				<img src="/static/u449.png" alt="Beautiful Tree" style="width: 682px;height: 341px;box-sizing: border-box;"/>
			</view>
			<view style="margin-top: 10px;">
				<text style="margin-top:20px;box-sizing: border-box;position: absolute;border-radius: 50%;text-align: center;line-height: center;">草在春天的阳光和雨露中快乐地成长。它沐浴在温暖的阳光下，吸收着土壤中的养分，努力向着天空伸展。</text>
			</view>
			<view style="margin-top:100px;display: flex;">
				<view style="margin-left:200px;display: flex;">
					<img src="/static/common/normal_u41.png" style="width: 35px;height: 35px;box-sizing: border-box;">
					<img src="/static/common/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(270deg);margin-left:10px;">
					<view style="display: flex;">
						<text style="font-weight:bold;font-size: 20px;margin-left:25px">第</text>
						<text style="color:#dc851f;font-weight:bold;font-size: 20px;margin-left:5px">1</text>
						<text style="font-weight:bold;font-size: 20px;margin-left:5px">页</text>
					</view>
					<img src="/static/common/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(90deg);margin-left:25px;">
					<img src="/static/common/normal_u40.png" style="width: 35px;height: 35px;box-sizing: border-box;margin-left:10px;">
				</view>
			</view>
			<view class="rectangle2" style="margin-top: 10px;">
				<img src="/static/chat/normal_u12.png" style="width: 106px;height: 130px;box-sizing: border-box;margin-left:50px;margin-top: 20px;">
				<img src="/static/chat/normal_u48.png" style="width: 141px;height: 145px;box-sizing: border-box;margin-left:30px;margin-top: 20px;">
				<img src="/static/chat/normal_u54.svg" style="width: 73px;height: 73px;box-sizing: border-box;margin-left:30px;margin-top: 10px;">
			</view>
		</view>
		<view class="right-page">
			<view>
				<!-- <img src="/static/chat/normal_u41.svg" class="rectangle" style="margin-left: 753px;margin-top:30px;"> -->
				<img src="/static/chat/normal_u41.svg" class="rectangle" style="position:absolute; top: 30px;left: 753px;">
				<view style="z-index: 2;  position: absolute; top: 50px;left: 755px;">
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
						<view class="text-field" style="position:absolute; top: 675px;left: 20px;">
							<text>input text</text>
						</view>
						<view>
							<img src="/static/chat/normal_u46.png" style="width: 93px;height: 93px;box-sizing: border-box;position:absolute; top: 620px;left: 285px;">
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	
	
	
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      messages: [],
      newMessage: '',
      userId: 'user1', // Replace with actual user ID
    };
  },
  methods: {
    async fetchChatHistory() {
      try {
        const response = await fetch('https://your-backend-api.com/getChatHistory', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch chat history');
        }

        const data = await response.json();
        this.messages = data.messages;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching chat history');
      }
    },
    async sendMessage() {
      if (this.newMessage.trim() === '') {
        return;
      }

      const message = {
        userId: this.userId,
        text: this.newMessage,
        avatar: '/static/me.png', // Replace with actual user avatar
      };

      try {
        const response = await fetch('https://your-backend-api.com/sendMessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        this.messages.push(message);
        this.newMessage = '';
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message');
      }
    },
    async receiveMessages() {
      try {
        const response = await fetch('https://your-backend-api.com/receiveMessages', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to receive messages');
        }

        const data = await response.json();
        this.messages = data.messages;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while receiving messages');
      }
    },
  },
  async mounted() {
    await this.fetchChatHistory();
    setInterval(this.receiveMessages, 5000); // Poll for new messages every 5 seconds
  },
};
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
.right-page{
	
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
</style>
