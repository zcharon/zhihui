<template>
  <div class="container">
    <div class="header">
      <span class="time">12:45</span>
      <span class="title">智绘：定制化儿童绘本创作平台</span>
    </div>
    <div class="content">
      <div class="left-panel">
        <div class="menu">
          <button @click="goToHome" class="menu-item home">
            <img src="@/static/home.png" alt="主页" class="menu-icon" />
            主页
          </button>
          <button @click="goToRegions" class="menu-item regions">
            <img src="@/static/regions.png" alt="分区" class="menu-icon" />
            分区
          </button>
          <button @click="goToLibrary" class="menu-item library">
            <img src="@/static/library.png" alt="卡片库" class="menu-icon" />
            卡片库
          </button>
          <button @click="goToFriends" class="menu-item friends">
            <img src="@/static/friends.png" alt="好友" class="menu-icon" />
            好友
          </button>
        </div>
        <div class="user">
          <img src="@/static/me.png" alt="avatar" class="avatar"/>
          <span class="username">我的</span>
        </div>
      </div>
      <div class="main-panel">
        <div class="style-selection">
          <span class="warning">选择画风</span>
        </div>
        <div class="speech-input">
          <span>快点击话筒 <img src="@/static/u100.png" alt="microphone" class="icon-microphone"/> 吧</span>
        </div>
        <div class="generate-button">
          <button @click="generateStory">生成</button>
        </div>
      </div>
      <div class="right-panel">
        <button @click="makeBook" class="make-book">制作绘本</button>
      </div>
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
  height: 100vh;
  background-color: #f8f2eb;
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
</style>
