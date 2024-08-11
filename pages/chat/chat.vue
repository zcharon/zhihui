<template>
  <div class="container">
    <div class="sidebar">
      <div class="menu-item">主页</div>
      <div class="menu-item">分区</div>
      <div class="menu-item">卡片库</div>
      <div class="menu-item">好友</div>
    </div>
    <div class="main-content">
      <div class="header">
        <h1>智能：定制化儿童绘本创作平台</h1>
      </div>
      <div class="content">
        <div class="image-display">
          <img src="/static/u449.png" alt="绘本图片" />
          <div class="image-caption">
            <h2>奉献的草</h2>
            <p>刘小年 (4岁)</p>
          </div>
        </div>
        <div class="chat-section">
          <div class="messages">
            <div v-for="message in messages" :key="message.id" class="message">
              <img :src="message.avatar" alt="avatar" />
              <span>{{ message.text }}</span>
            </div>
          </div>
          <div class="input-section">
            <input type="text" v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage" />
          </div>
        </div>
      </div>
    </div>
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
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f8f8f8;
  padding: 20px;
}

.menu-item {
  margin-bottom: 20px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #fff;
  padding: 20px;
  text-align: center;
}

.content {
  display: flex;
  flex: 1;
}

.image-display {
  flex: 1;
  text-align: center;
}

.image-display img {
  max-width: 100%;
  height: auto;
}

.image-caption {
  margin-top: 10px;
}

.chat-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  overflow-y: auto;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.message img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.input-section {
  padding: 10px;
}

.input-section input {
  width: 100%;
  padding: 10px;
}
</style>

