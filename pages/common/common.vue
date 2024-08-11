<template>
  <div class="app">
    <header class="header">
      <img src="/static/u1.png" alt="Logo" class="logo"/>
      <input type="search" placeholder="Search" class="search-bar"/>
    </header>
    <div class="navigation">
      <button class="nav-button">主页</button>
      <button class="nav-button">分区</button>
      <button class="nav-button">卡片库</button>
      <button class="nav-button">好友</button>
    </div>
    <div class="content">
      <img src="/static/u449.png" alt="Beautiful Tree" class="main-image"/>
      <input type="file" @change="onFileChange" />
      <button @click="recognizeObject">识别图中的物体</button>
      <div v-if="knowledgeCard">
        <h3>{{ knowledgeCard.title }}</h3>
        <p>{{ knowledgeCard.description }}</p>
        <!-- Display additional fields as needed -->
      </div>
      <button @click="checkChatInvitation">检查聊天室邀请</button>
      <div class="media-controls">
        <button>⏮</button>
        <button>⏯</button>
        <button>⏭</button>
        <button>🔁</button>
      </div>
      <div class="volume-slider">
        <input type="range" min="0" max="100" value="50">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedFile: null,
      knowledgeCard: null,
    };
  },
  methods: {
    async checkChatInvitation() {
      try {
        const response = await fetch('https://your-backend-api.com/checkChatInvitation', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to check chat invitations');
        }

        const data = await response.json();
        if (data.invitation) {
          alert(`You have been invited to join the chat room: ${data.chatRoomName}`);
          // Additional logic for handling the chat invitation can be added here
        } else {
          alert('No chat invitations at the moment');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while checking chat invitations');
      }
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async recognizeObject() {
      if (!this.selectedFile) {
        alert('Please select an image file first.');
        return;
      }

      const formData = new FormData();
      formData.append('image', this.selectedFile);

      try {
        const response = await fetch('https://your-backend-api.com/recognizeObject', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Object recognition failed');
        }

        const data = await response.json();
        if (data.objectRecognized) {
          this.fetchKnowledgeCard(data.objectId);
        } else {
          alert('No objects recognized in the image');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while recognizing the object');
      }
    },
    async fetchKnowledgeCard(objectId) {
      try {
        const response = await fetch(`https://your-backend-api.com/fetchKnowledgeCard?objectId=${objectId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch knowledge card');
        }

        const data = await response.json();
        this.knowledgeCard = data.knowledgeCard;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the knowledge card');
      }
    }
  }
}
</script>

<style scoped>
.app {
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 1000px;
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
  align-items: center;
  padding: 20px;
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
</style>
