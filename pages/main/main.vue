<template>
  <div class="container">
    <div class="content">
		<view class="left-panel">
			<cd-tabbar></cd-tabbar>
		</view>
		<view style="display:flex;flex-direction: column;width:90%">
			<view style="display: flex;">
				
				 <view class="left-arrow-button" style="margin-top:3vh;display: flex;">
								<img src="/static/page1/u17.png" class="left-icon" style="margin-left:0.5vh;margin-top:0.5vh;"/>
								<text class="xuanzehuafeng" style="margin-left:10px;margin-top:12px;">
									选 择 画 风
								</text>
				</view>
				<view class="right-arrow-button" style="margin-top:3vh;margin-left:4vh;display: flex;">
								<img src="/static/page1/u16.png" class="right-icon" style="margin-left:0.5vh;margin-top:0.5vh;"/>
								<text class="zhizuohuiben" style="margin-left:10px;margin-top:12px;">
									制 作 绘 本
								</text>
				</view>
				<view class="baocun" style="margin-top:3vh;margin-left:4vh;display: flex;">
								<text class="baocun-text" style="margin-top:12px;">
									保 存
								</text>
				</view>
			</view>
			<div class="style-selection">
			  <div class="styles" style="margin-top: 2%;">
						<radio-group v-model="selectedStyle" name="radio" @change="handleStyleChange">
							<label style="height: 195px;width: 136px;position: absolute; bottom: 404px;left: 156px;" >
								<view>
									<img src="/static/main/normal_u28.png" style= "width: 136px;height: 136px;box-sizing: border-box;"/>
								</view>
								<view style="display: flex; margin-top: 10px;">
									<radio value="0" class="text" color="#dc851f"/>
									<text >不指定</text>
								</view>
							</label>
							<label style="height: 226px;width: 335px;position: absolute;bottom: 404px;left: 274px;">
								<view>
									<img src="/static/movie-style-image.png" alt="Movie Style" style= "width: 335px;height: 167px;box-sizing: border-box;"/>
								</view>
								<view style="display: flex; margin-top: 10px;">
									<radio value="1" class="text" color="#dc851f"/><text>电影风格</text>
								</view>					
							</label>
							<label style="height: 217px;width: 317px;position: absolute;bottom: 404px;left: 549px;">
								<view>
									<img src="/static/anime-style-image.png" alt="Anime Style" style="height: 158px;width: 317px;box-sizing: border-box;"/>
								</view>
								<view style="display: flex; margin-top: 10px;">
									<radio value="2" class="text" color="#dc851f" /><text >日本动漫风格</text>
								</view>
							</label>
							<label style="height: 207px;width: 328px;position: absolute;bottom: 404px;left: 788px;">
								<view>
									<img src="/static/photo-style-image.png" alt="Photo Style" style="height: 147px;width: 348px;box-sizing: border-box;transform: scale(1.1)"/>
								</view>
								<view style="display: flex; margin-top: 15px;">
									<radio value="3" class="text" color="#dc851f"/><text>摄影风格</text>
								</view>
							</label>
							<label style="height: 278px;width: 312px;position: absolute;bottom: 153px;left: 176px;">
								<view>
									<img src="/static/disney-style-image.png" alt="Disney Style" style="height: 234px;width: 312px;box-sizing: border-box;"/>
								</view>
								<view style="display: flex; margin-top: 10px;">
									<radio value="4" class="text" color="#dc851f"/><text>迪士尼风格</text>
								</view>
							</label>
							<label style="height: 255px;width: 277px;position: absolute;bottom: 153px;left: 420px;">
								<view>
									<img src="/static/comic-style-image.png" alt="Comic Style" style="height: 208px;width: 277px;box-sizing: border-box;"/>
								</view>
								<view style="display: flex; margin-top: 10px;">
									<radio value="5" class="text" color="#dc851f"/><text>漫画风格</text>
								</view>
							</label>
							<label style="height: 258px;width: 248px;position: absolute;bottom: 153px;left: 720px;">
								<view>
									<img src="/static/sketch-style-image.png" alt="Sketch Style" style="height: 207px;width: 155px;box-sizing: border-box;"/>
								</view>
								<view style="display: flex; margin-top: 10px;">
									<radio value="6" class="text" color="#dc851f"/><text>线描风格</text>
								</view>
							</label>
						</radio-group>         
			  </div>
			</div>
			<div class="age-selection" style="display: flex;">
					<text class="nianlingduan">年龄段</text>
					<radio-group  v-model="selectedAge" name="radio" @change="handleAgeChange">
					  	<label>
					  		<radio value="0" color="#dc851f" /><text style="margin-left: 5px; font-weight:bold">3岁以下</text>
					  	</label>
					  	<label style="margin-left: 5px;">
							<radio value="1" color="#dc851f" /><text style="margin-left: 5px; font-weight:bold">3-6岁</text>
					  	</label>
						<label style="margin-left: 5px;">
							<radio value="2" color="#dc851f" /><text style="margin-left: 5px; font-weight:bold">6岁以上</text>
						</label>
					</radio-group>
			</div>
			<form @click="confirmSelection">
			  <button formType="click" >确 认 选 择</button>
			</form>
		</view>
		
      
    </div>
  </div>
</template>

<script>
import CdTabbar from '@/pages/tabbar/tabbar.vue';

export default {
   components: {
      CdTabbar
  },
  data() {
    return {
      selectedStyle: "",
      selectedAge: "",
    };
  },
  methods: {
	handleStyleChange(event) {
	  this.selectedStyle = event.detail.value;
	},
	handleAgeChange(event) {
	  this.selectedAge = event.detail.value;
	},
    async confirmSelection() {
      try {
		localStorage.setItem("selectedStyle", JSON.stringify(this.selectedStyle));
		localStorage.setItem("selectedAge", JSON.stringify(this.selectedAge));
		if(true){
          // Handle successful submission
          uni.navigateTo({
            url: '/pages/page1/page1'
          });
        } else {
          // Handle submission error
          alert('Selection submission failed: ' + data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the selection');
      }
    }
  }
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
/*  padding: 20px; */
  display: flex;
  flex: 1;
  position: fixed; 
  top: 5%; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  overflow-y: hidden; 
  overflow-x: hidden; 
}

header {
  text-align: center;
}

.content {
  display: flex;
}
  
.age-selection {
	position: absolute; /* 使用绝对定位 */
	top: 640px; /* 距离顶部 100px */
	left: 204px;
	margin-bottom: 20px;
}
  
.style-selection{
  margin-bottom: 20px;
}

.styles {
/*  display: flex;
  flex-wrap: wrap;
  gap: 10px; */
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  height: 505px;
  padding: 2px 2px 2px 2px;
  border-radius: 15px;
  border: 3px solid rgba(184, 48, 27, 0.38);
  background-color: rgba(255, 242, 202, 0.22);
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 0px #fff2ca;
  
}

.styles label {
 display: flex;
  flex-direction: column;
  align-items: center;

}

.styles img {
  width: 100px;
  height: auto;
  margin-top: 5px;
}

button {
/*  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #ff8000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer; */
  cursor: pointer;
  width: 442px;
  height: 60px;
  padding: 2px 2px 2px 2px;
  border-radius: 12px;
  background-color: #dc851f;
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: center;
  position: absolute; 
  top: 625px;
  left: 630px;
  
}

.step-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff3e0; /* 背景颜色 */
  padding: 10px;
  border-radius: 5px;
}

.step-item {
  display: flex;
  align-items: center;
}

.step {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.step-icon {
	width: 1105px;
  height: 56px;
  background-color: #ffffff;
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
	z-index: 2;
}

.right-icon{
	width:  40px;
	height: 40px;
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

.step-text {
  font-size: 14px;
  color: #f2980b;
}

.step-arrow {
  margin: 0 10px;
}

/* .arrow{
  width: 548px;
  height: 56px;
  padding: 2px 2px 2px 2px;
  border-radius: 12px;
  border: 2px solid #ffb74d;
  background-color: rgba(220, 133, 31, 0);
  box-sizing: border-box;	

  position: absolute; 
  top: 100px; 
  left: 50px; 
} */

.logo{
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

.arrow-icon {
  width: 15px;
  height: 15px;
}

.text{
  width: 72px;
  height: 21px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #333333;
  text-align: center;
  line-height: normal;
}

.nianlingduan{
  width: 92px;
  height: 26px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #a96618;
  text-align: left;
  line-height: normal;	
  font-size: 20px;
}

.left-arrow-button {
  width: 408px;
  height: 56px;
  padding: 2px 2px 2px 2px;
  border-radius: 12px;
  border: 2px solid #ffb74d;
  background-color: rgba(255, 183, 77, 0);
  box-sizing: border-box;
}

.xuanzehuafeng {
  width: 84px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #dc851f;  
  text-align: left;
  line-height: normal;
}

.right-arrow-button {
  width: 408px;
  height: 56px;
  padding: 2px 2px 2px 2px;
  border-radius: 12px;
  border: 2px solid #ffb74d;
  background-color: #ffb74d;
  box-sizing: border-box;
}

.zhizuohuiben {
  width: 84px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  line-height: normal;
}

.baocun {
  width: 88px;
  height: 56px;
  padding: 2px 2px 2px 2px;
  border-radius: 12px;
  border: 2px solid #dc851f;
  background-color: #dc851f;
  box-sizing: border-box;
}
.baocun-text{
  width: 84px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: normal;
}

</style>
