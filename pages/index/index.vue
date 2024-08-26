<template>
	<view class="login-container">
		<view class="login-box">
			<view style="width: 798px;height: 180px;">
				<image src="/static/u1.png" class="logo"></image>
				<image src="../../static/login/normal_u1.svg" class="circle"></image>
				<text class="title">智 绘 ：定 制 化 儿 童 绘 本 创 作 平 台</text>
			</view>
			<view class="form">
				<form @submit.prevent="login">
					<view style="display: flex">
						<text class="zhmm">账号：</text>
						<input v-model="account" class="input-field-account" placeholder="  请输入账号" />
					</view>
					<view style="display: flex">
						<text class="zhmm">密码：</text>
						<input v-model="password" class="input-field-password" placeholder="  请输入密码" type="password" />
						<text style="width: 90px;height: 15px;color: #7f7f7f;margin-top: 25px;margin-left: 5px;">忘记密码?</text>
					</view>
					<view style="display: flex;justify-content: center;">
						<button @click="register" class="zhuce">注册</button>
						<button @click="login" class="denglu">登录</button>
					</view>
				</form>
			</view>
			<tabbar></tabbar>
		</view>
		
	</view>
</template>

<script>
import {BASE_URL} from "@/config.js";

export default {
  data() {
    return {
      account: '',
      password: '',
	  user_id: 0
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.account,
            password: this.password
          })
        });
        if (!response.ok) {
          throw new Error('Login failed');
        }
        const data = await response.json();
		this.user_id = data.data.user_id
		localStorage.setItem("user_id", JSON.stringify(this.user_id));
		console.log(data)
		if (data.code == 200) {
        // if (true) {
          // Handle successful login (e.g., store token, redirect)
          uni.navigateTo({
            url: '/pages/main/main'
          });
        } else {
          // Handle login error
          alert('Login failed: ' + data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in');
      }
    }
  }
};
</script>

<style scoped>

/* .input-field {
	width: 355px;
  height: 53px;
  padding: 2px 2px 2px 2px;
  border: 2px solid #a36717;
  background-color: rgba(255, 255, 255, 0.71);
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #000000;
  text-align: left;
} */
.form{
	margin-top: 0%;
	margin-left: 15%;
}

.input-field-account {
  width: 60%;
  height: 53px;
  padding: 2px 2px 2px 2px;
  border: 2px solid #a36717;
  background-color: rgba(255, 255, 255, 0.71);
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #000000;
  text-align: left;
}

.input-field-password {
  top: 270px; /* Adjust to desired position */
  left: 0%; /* Adjust to desired position */
  width: 60%;
  height: 53px;
  padding: 2px 2px 2px 2px;
  border: 2px solid #a36717;
  background-color: rgba(255, 255, 255, 0.71);
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #000000;
  text-align: left;
}


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f9f4ef;
}

.login-box {
  /* width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
  text-align: center; */
  width: 799px;
  height: 543px;
  padding: 2px 2px 2px 2px;
  border-radius: 15px;
  border: 3px solid rgba(184, 48, 27, 0.38);
  background-color: rgba(255, 242, 202, 0.22);
  box-sizing: border-box;
  box-shadow: 5px 5px 5px 0px #fff2ca;
}



.logo {
	top: 25px;
	left: 35px;
	width: 86px;
	height: 86px;
	box-sizing: border-box;
	z-index: 2;
}

.title {
	top:120px;
	left: 180px;
	/* text-align: justify; */
	font-size: 32px;
    width: 555px;
    height: 37px;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
    font-weight: 700;
    color: #704a10;
    text-align: left;
    line-height: normal;
}

.zhmm {
	/* text-align: justify; */
	font-size: 25px;
	width: 100px;
	  height: 100px;
	  background-color: rgba(255, 255, 255, 0);
	  box-sizing: border-box;
	  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
	  font-weight: 580;
	  color: #333333;
	  text-align: left;
	  line-height: normal;
}


.circle {
	right: 50px;
	top: 20px;
	width: 70px;
	height: 70px;
	padding: 2px 2px 2px 2px;
	background-color: #dc851f;
	box-sizing: border-box;
	box-shadow: 5px 5px 5px 0px rgba(163, 103, 23, 0.35);
	border-radius: 50%;
	z-index: 1;
}

.zhuce{
	top: 20px;
	width: 185px;
	  height: 60px;
	  padding: 2px 2px 2px 2px;
	  border-radius: 12px;
	  background-color: #dc851f;
	  box-sizing: border-box;
	  /* font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif; */
	  font-weight: 700;
	  color: #ffffff;
	  text-align: center;
	  /* line-height: normal; */
}

.denglu{
	right: 100px;
	top: 20px;
	width: 185px;
	  height: 60px;
	  padding: 2px 2px 2px 2px;
	  border-radius: 12px;
	  background-color: #8c6b48;
	  box-sizing: border-box;
	  /* font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif; */
	  font-weight: 700;
	  color: #ffffff;
	  text-align: center;
	  /* line-height: normal; */
}


.input-field{
	width: 48px;
	  height: 28px;
	  background-color: rgba(255, 255, 255, 0);
	  box-sizing: border-box;
	  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
	  font-weight: 700;
	  color: #333333;
	  text-align: left;
	  line-height: normal;
}


/* input { */
  /* width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px; */
  
  /* width: 355px;
  height: 53px;
  padding: 2px 2px 2px 2px;
  border: 2px solid #a36717;
  background-color: rgba(255, 255, 255, 0.71);
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #000000;
  text-align: left; */
  
/* } */

/* button {
  width: 100%;
  padding: 10px;
  background-color: #8c6b48;
  color: white;
  border: none;
  border-radius: 4px;
} */
</style>
