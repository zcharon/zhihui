<template>
  <view class="container">
    <view class="content">
  		  <view class="left-panel">
  				<cd-tabbar></cd-tabbar>
  		  </view>
		  <view class="main-panel">
				<view style="display: flex;">
				  <!-- <input type="text" placeholder="Search" /> -->
					<uni-search-bar class="search-bar" bgColor="#fef6e2" placeholder="请输入搜索内容">
						<template v-slot:searchIcon>
								<uni-icons  color="#999999" size="30" type="search" />
						</template>
					</uni-search-bar>
					<image src="../../static/mianpage/u100.png" style="height: 40px;width: 40px;top: 10px;"></image>
				</view>
				<view style="display: flex;justify-content: center;margin-top: 25px;">
					<view>
						<text class="hy">请定制你的专属形象，</text>
						<text class="hy" style="color: #a92d24;">刘小年</text>
						<text class="hy">小朋友</text>
					</view>
				</view>
				<view class="box">
					<view style="margin-left: 90%;">
						<text class="tag">保存</text>
					</view>
					<view style="margin-top: 10vh;margin-left: 20vh;display: flex;">
						<view class="upload">
							<view style="margin-top: 30%;">
								<image src="../../static/mianpage/normal_u28.png" class="tx2"></image>
							</view>
							<view>
								<text style="top:40px;"> 请上传图片 </text>
							</view>
						</view>
						<view style="margin-left: 10vh; margin-top: 5vh;">
							<image src="../../static/u450.png"></image>
						</view>
						<view style="margin-left: 10vh;">
							<image src="../../static/mianpage/touxiang.png" class="tx"></image>
						</view>
					</view>
				</view>
		  </view>
	</view>
</view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    };
  },
  methods: {
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex: 1;
}

.left-panel {
		width: 10%;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  position: fixed; /* 使元素固定在屏幕上 */
}

.main-panel {
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.search-bar{
  width: 100%;
  /* padding: 10px; */
  font-size: 40px;
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
}

.hy {
  height: 28px;
  font-size: 2rem;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #a96618;
  text-align: center;
  /* line-height: normal; */
}


.box {
  margin-top: 3vh;
  width: 100%;
  height: 70vh;
  padding: 2px 2px 2px 2px;
  border-radius: 15px;
  border: 3px solid rgba(184, 48, 27, 0.38);
  background-color: rgba(255, 242, 202, 0.22);
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 0px #fff2ca;
}

.upload {
  width: 40vh;
  height: 40vh;;
  padding: 2px 2px 2px 2px;
  background-color: #d7d7d7;
  box-sizing: border-box;
  border-radius: 15px;
  text-align: center;
}

.tx {
  width: 30vh;
  height: auto;
  aspect-ratio: 1/1.2; 
  object-fit: cover;
  box-sizing: border-box;
}

.tx2 {
  width: 10vh;
  height: auto;
  aspect-ratio: 1/1; 
  object-fit: cover;
  box-sizing: border-box;
}

.save {
  width: 20vh;
  height: 42px;
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

.tag {
	display: inline-block;
	margin-top: 0.5em;
	font-size: 1rem;
	text-align: left;
  width: 5em;
  height: 1.8em;
  margin-right: 10px;
  padding: 2px 2px 2px 2px;
  border-radius: 9px;
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: normal;
  background-color: #dc851f;
} 
</style>
