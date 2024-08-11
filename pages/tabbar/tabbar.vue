<template>
    <view class="tabbar">
		<view class="vertical-box">
			  <view class="element-container" id="first-element">
				<image src="/static/u1.png" class="logo"></image>
				<image src="../../static/login/normal_u1.svg" class="ellipse"></image>
			  </view>
			<view class="rectangle">
				<view class="vertical-group">
					<view class="vertical-one">
						<image src="/static/mianpage/normal_u3.png" class="img"></image>
						<text class="text">主页</text>
					</view>
					<view class="vertical-one">
						<image src="/static/mianpage/normal_u4.png" class="img"></image>
						<text class="text">分区</text>
					</view>
					<view class="vertical-one">
						<image src="/static/mianpage/normal_u7.png" class="img"></image>
						<text class="text">卡片库</text>
					</view>
					<view class="vertical-one">
						<image src="/static/mianpage/normal_u5.png" class="img"></image>
						<text class="text">好友</text>
					</view>
				</view>
			</view>
			<image src="../../static/mianpage/touxiang.png" class="touxiang" id="last-element"></image>
		</view>
    </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.tabbar {
  display: flex;
  justify-content: flex-start; /* 横向左对齐 */
  align-items: center; /* 纵向居中 */
  margin-left: 2vh; /* 距离页面左侧5%的宽度 */
  height: 80vh; /* 占满整个视口高度 */
}

.vertical-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 元素之间均匀分布 */
  height: 90vh; /* 占满整个视口高度 */
  padding-top: 16vh; /* 顶部留出距离 */
  padding-bottom: 2vh; /* 底部留出距离 */
}

.element-container {
  display: flex;
  position: relative;
  align-items: center;
}

.logo {
  width: 109px; /* 固定宽度 */
  height: 109px; /* 固定高度，保持长宽比例 */
  z-index: 2;
}

.ellipse {
  width: 70px; /* 固定宽度 */
  height: 70px; /* 固定高度，保持长宽比例 */
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #dc851f;
  box-shadow: 5px 5px 5px 0px rgba(163, 103, 23, 0.35);
  border-radius: 50%;
  z-index: 1;
}

.vertical-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 元素之间均匀分布 */
  align-items: center;
  height: 40vh; /* 占满整个视口高度 */
  padding-top: 3vh; /* 顶部留出距离 */
  padding-bottom: 2vh; /* 底部留出距离 */
}

.vertical-one {
  display: flex;
  flex-direction: column;
}

.rectangle {
  width: 70px; /* 固定宽度 */
  height: 50vh; /* 固定高度，保持长宽比例 */
  border-radius: 35px;
  border: 4px solid #dc851f;
  background-color: rgba(245, 154, 35, 0.15);
  box-shadow: 5px 5px 5px 0px rgba(220, 133, 31, 0.4);
  z-index: 1;
}

.img{
	width: 54px;
	height: 54px;
	box-sizing: border-box;
}
	
.text {
  width: 54px;
  height: 1vh;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #704a10;
  text-align: center;
  line-height: normal;
}

.touxiang {
  width: 89px; /* 固定宽度 */
  height: 109px; /* 固定高度，保持长宽比例 */
}
</style>
