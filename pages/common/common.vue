<template>
  <div class="container">
	<view class="left-panel">
		<cd-tabbar></cd-tabbar>
	</view>
	<view class="content">
		  <view style="margin-bottom:20px;margin-left:30px;display: flex;">
				<text style="color:rgba(169, 102, 24, 0.75);font-weight:bold;font-size: 22px;">奉献的草</text>
				<text style="color:rgba(169, 102, 24, 0.75);font-size: 24px;margin-left: 18px;">刘小年（4岁）</text>
				<view style="margin-left: 450px;display: flex;">
					<text class="tag" style="background-color: rgba(242, 176, 176, 1);font-size: 16px;">女生</text>
					<text class="tag" style="background-color: rgba(252, 198, 159, 1);font-size: 16px;">3-6岁</text>
				</view>
				<img src="/static/common/normal_u30.svg" class="shape" style="margin-left: 10px;">
				<img src="/static/common/normal_thumb_icon_u27.svg" class="thumb-icon" style="margin-left: 10px;">
		  </view>
		  <img src="/static/u449.png" alt="Beautiful Tree" style="width: 1102px;height: 551px;box-sizing: border-box;"/>
		  <text style="margin-top:20px; text-align: center;line-height: center;">草在春天的阳光和雨露中快乐地成长。它沐浴在温暖的阳光下，吸收着土壤中的养分，努力向着天空伸展。</text>
		  <view style="margin-top:30px;display: flex;">
			<view style="margin-left:380px;display: flex;">
				<img src="/static/common/normal_u41.png" style="width: 35px;height: 35px;box-sizing: border-box;">
				<img src="/static/common/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(270deg);margin-left:5px;">
				<view style="display: flex;">
					<text style="font-weight:bold;font-size: 20px;margin-left:25px">第</text>
					<text style="color:#dc851f;font-weight:bold;font-size: 20px;margin-left:5px">1</text>
					<text style="font-weight:bold;font-size: 20px;margin-left:5px">页</text>
				</view>
				<img src="/static/common/normal_u36.png" style="width: 30px;height: 30px;box-sizing: border-box;transform: rotate(90deg);margin-left:25px;">
				<img src="/static/common/normal_u40.png" style="width: 35px;height: 35px;box-sizing: border-box;margin-left:5px;">
				<img src="/static/common/normal_u42.png" style="width: 31px;height: 31px;box-sizing: border-box;margin-left:5px;">
			</view>
			<view style="display: flex;margin-left:200px;">
				<text style="color:rgba(169, 102, 24, 0.75);font-weight:bold;font-size: 20px;margin-right: 8px;">知识卡片</text>
			  	<switch color="#FFCC33" />
			</view>
		  </view>
	</view>
    
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
