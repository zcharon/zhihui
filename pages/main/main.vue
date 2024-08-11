<template>
  <div class="container">
    <header>
      <h1>智绘：定制化儿童绘本创作平台</h1>
    </header>
    <div class="content">
      <div class="style-selection">
        <h2>选择画风</h2>
        <div class="styles">
          <label>
            <input type="radio" name="style" value="undefined" v-model="selectedStyle" />
            不指定
          </label>
          <label>
            <input type="radio" name="style" value="movie" v-model="selectedStyle" />
            电影风格
            <img src="/static/movie-style-image.png" alt="Movie Style" />
          </label>
          <label>
            <input type="radio" name="style" value="anime" v-model="selectedStyle" />
            日本动漫风格
            <img src="/static/anime-style-image.png" alt="Anime Style" />
          </label>
          <label>
            <input type="radio" name="style" value="photo" v-model="selectedStyle" />
            摄影风格
            <img src="/static/photo-style-image.png" alt="Photo Style" />
          </label>
          <label>
            <input type="radio" name="style" value="disney" v-model="selectedStyle" />
            迪士尼风格
            <img src="/static/disney-style-image.png" alt="Disney Style" />
          </label>
          <label>
            <input type="radio" name="style" value="comic" v-model="selectedStyle" />
            漫画风格
            <img src="/static/comic-style-image.png" alt="Comic Style" />
          </label>
          <label>
            <input type="radio" name="style" value="sketch" v-model="selectedStyle" />
            线描风格
            <img src="/static/sketch-style-image.png" alt="Sketch Style" />
          </label>
        </div>
      </div>
      <div class="age-selection">
        <h2>年龄段</h2>
        <label>
          <input type="radio" name="age" value="under3" v-model="selectedAge" />
          3岁以下
        </label>
        <label>
          <input type="radio" name="age" value="3to6" v-model="selectedAge" />
          3-6岁
        </label>
        <label>
          <input type="radio" name="age" value="over6" v-model="selectedAge" />
          6岁以上
        </label>
      </div>
      <form @click="confirmSelection">
        <button formType="click">确认选择</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedStyle: '',
      selectedAge: '',
    };
  },
  methods: {
    async confirmSelection() {
      try {
        const response = await fetch('https://your-backend-api.com/selection', {
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
          throw new Error('Selection submission failed');
        }

        const data = await response.json();
        if (data.success) {
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
  padding: 20px;
}

header {
  text-align: center;
}

.content {
  margin-top: 20px;
}

.style-selection, .age-selection {
  margin-bottom: 20px;
}

.styles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #ff8000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
