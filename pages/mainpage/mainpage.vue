<template>
  <div class="container">
    <div class="content">
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
			
			<view class="container">
				<view class="content">
					<view style="width: 70%">
						<view style="display: flex;">
							<image src="../../static/mianpage/normal_u40.png" style="height: 40px;width: 40px;top: 10px;"></image>
							<text style="width: 92px;height: 40px; font-weight: 700;color: #764711;font-size: 22px;margin-top: 20px;margin-left: 10px;">热门推荐</text>
						</view>
						
						<view class="card-container"> <!-- 修改类名为 card-container -->
							<view class="card" v-for="(book, index) in recommendations" :key="index">
								<view class="img-container">
									<image :src="`${BASE_URL}${book.image_path}`" class="img"></image>
								</view>
								  
								<view style="margin-top: 15px;margin-left: 15px;">
									<text class="cardtext">{{ book.book_title }}</text>
								</view>
								  
								<view style="margin-top: 15px;margin-left: 15px;margin-right: 15px;">
									<text class="cardcontent">{{ book.book_abstract }}</text>
								</view>
								  
								<view style="display: flex;">
									<view style="width: 80%;">
										<view style="margin-top: 10px;margin-left: 15px;margin-right: 15px;">
											<text class="author">{{ book.author }}</text>
										</view>
										<view style="margin-top: 10px;margin-left: 15px;margin-right: 15px;">
											<text class="tag" :style="{ backgroundColor: 'rgba(252, 198, 159, 1)' }">{{ book.recom_age }}</text>
											<text class="tag" :style="{ backgroundColor: 'rgba(176, 215, 242, 1)' }">{{ book.style }}</text>
										</view>
									</view>
									<view style="margin-top: 5%;">
										<uni-fav :checked="book.if_like" class="favBtn" :circle="true" :content-text="contentText" @click="favClick(index)" bgColorChecked="#d15353"/>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view style="width: 30%;">
						<view style="margin-left: 30%;margin-right: 30%;margin-top: 20px">
							<image src="../../static/mianpage/touxiang.png" class="tx" @click="navigateTo('/pages/image-to-image/image-to-image')"></image>
						</view>
						<view style="display: flex;justify-content: center;margin-top: 25px;">
							<view>
								<text class="hy">欢迎你，</text>
								<text class="hy" style="color: #a92d24;">{{user_name}}</text>
								<text class="hy">小朋友</text>
							</view>
						</view>
						<view class="intro">
							<view style="margin-top: 15px;margin-left: 15px;text-align: center;">
								<text class="cardcontent" style="color: #a96618;">年龄：{{user_age}}岁</text>
							</view>
							<view style="margin-top: 10px;margin-left: 15px;text-align: center;">
								<text class="cardcontent" style="color: #a96618;">已创作：{{create_books_num}}   本绘本</text>
							</view>
							<view style="margin-top: 10px;margin-left: 15px;margin-bottom: 25px;text-align: center;">
								<text class="cardcontent" style="color: #a96618;">已看过：{{viewed_books_num}} 本绘本</text>
							</view>
						</view>
						<view style="margin-top: 25px;margin-left: 15px;text-align: center;">
							<text class="hy" style="color: #d07d1d;">你的作品</text>
						</view>
						<view class="intro" v-for="(book, index) in my_book_data" :key="index">
							<view class="minicard">
								<view class="img-container">
									<image :src="`${BASE_URL}${book.image_path}`"  class="img" @click="navigateTo('/pages/common/common', book.comic_id)"></image>
								</view>
								<view style="margin-top: 5px;margin-left: 5px;">
									<text class="cardtext">{{book.book_title}}</text>
								</view>
								<view style="margin-top: 5px;margin-left: 5px;margin-right: 15px;">
									<text class="cardcontent">{{book.book_abstract}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
    </div>
  </div>
</template>

<script>
import CdTabbar from '@/pages/tabbar/tabbar.vue';
import {BASE_URL} from "@/config.js";

export default {
  name: 'DrawingPlatform',
  components: {
      CdTabbar
  },
  data() {
    return {
	  BASE_URL,
	  user_name: "",
	  user_age: "",
	  create_books_num: 0,
	  viewed_books_num: 0,
      recommendations: [],
	  my_book_data: [],
	  contentText: {
			contentDefault: '点赞',
			contentFav: '已点赞'
		}
    };
  },
  methods: {
    favClick(index) {
		this.recommendations[index].if_like = !this.recommendations[index].if_like
		this.$forceUpdate()
	},
    async fetchUserData() {
      try {
  //       const response = await fetch('https://your-backend-api.com/fetchUserData', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       });
    
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch book data');
  //       }
    
  //       const response_data = await response.json();
		// var data = response_data.data
  //       this.user_name = data.user_name;
		// this.user_age = data.user_age;
		// this.create_books_num = data.create_books_num;
		// this.viewed_books_num = data.viewed_books_num;
		const response = await fetch('/pages/mainpage/userData.json');
		if (!response.ok) {
			throw new Error('Failed to fetch mock data');
		}
		const data = await response.json();
		this.user_name = data.user_name;
		this.user_age = data.user_age;
		this.create_books_num = data.create_books_num;
		this.viewed_books_num = data.viewed_books_num;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching book data');
      }
    },
	async fetchMyBooksData() {
      try {
        const response = await fetch(`${BASE_URL}/story/fetchMyBooksData`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
		  body: JSON.stringify({
		    user_id: 2,
		  })
        });
		
        if (!response.ok) {
          throw new Error('Failed to fetch book data');
        }
		
        const data = await response.json();
		console.log(data)
        this.my_book_data = data.data;
	  // const response = await fetch('/pages/mainpage/myBookData.json');
		 //  if (!response.ok) {
			// throw new Error('Failed to fetch mock data');
		 //  }
	  
	  // const data = await response.json();
	  // this.my_book_data = data.data;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching book data');
      }
    },
    async fetchRecommendedBooksData() {
      try {
        const response = await fetch(`${BASE_URL}/story/fetchRecommendedBooksData`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch recommended books');
        }

        const data = await response.json();
        this.recommendations = data.data.data;
		// const response = await fetch('/pages/mainpage/recommodationBooksData.json');
		//     if (!response.ok) {
		//       throw new Error('Failed to fetch mock data');
		//     }
		
		// const data = await response.json();
		// this.recommendations = data.data;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching recommended books');
      }
    },
	navigateTo(path, comic_id) {
		this.$router.push({
		    path: path,
		    query: {
		      comic_id: comic_id
		    }
		});
	}
  },
  async mounted() {
	await this.fetchUserData();
    await this.fetchMyBooksData();
    await this.fetchRecommendedBooksData();
  }
};
</script>

<style scoped>
::v-deep .uni-fav__content-text {
  font-size: 100px; /* 你希望的字体大小 */
}
	
	
.container {
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  /* background-color: #f8f2eb; */
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
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}



.left-panel {
		width: 10%;
		  display: flex;
		  flex-direction: column;
		  align-items: center;
		  position: fixed; /* 使元素固定在屏幕上 */
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
  width: 90%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

/* .search-bar {
  margin-bottom: 20px;
} */

.search-bar{
  width: 100%;
  /* padding: 10px; */
  font-size: 40px;
  /* border: 1px solid #ccc; */
  /* border-radius: 5px; */
}

.recommendations {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.recommendation-card {
  width: 48%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.recommendation-image {
  width: 100%;
  height: auto;
}

.recommendation-info {
  padding: 10px;
}

.recommendation-info h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.recommendation-info p {
  font-size: 14px;
  color: #666;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

/* .right-panel {
  width: 30%;
  background-color: #fff9f4;
  padding: 10px;
} */

.user-info {
  margin-bottom: 20px;
}

.user-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.user-works img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.container {
  display: flex;
  /* flex-direction: column; */
}

.card-container {
/*  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 卡片之间的间距 */ 
  
  display: flex;
  /* flex: 1; */
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  width: calc(48% - 10px); 
  height: auto; 
  background-color: #f6f1ed;
  margin-right: 1em;
  padding: 1em;
  box-sizing: border-box;
}



.img-container {
  flex: 1; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 8; 
  object-fit: cover;
  box-sizing: border-box;
}

.cardtext, .cardcontent, .author, .tag {
  margin-top: 0.5em;
  font-size: 1rem;
  text-align: left;
}
/* .card {
  width: 100%;
  height: auto;
  background-color: #f6f1ed;
  margin-right: 20px;
}
.img {
  width: 100%;
  height: auto;  
  object-fit: cover; 
  box-sizing: border-box;
}
*/
.cardtext {
  margin-top: 0.5em;
  font-size: 1.2rem;
  text-align: left;
/*  width: 373px;
  height: 25px;
  background-color: rgba(220, 133, 31, 0); */
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #a96618;
  line-height: normal;
}
.cardcontent {
	margin-top: 0.5em;
	font-size: 1rem;
	text-align: left;
  /* width: 388px;
  height: 50px; */
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: #333333;
}
.author{
	margin-top: 0.5em;
	font-size: 1rem;
	text-align: left;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  color: rgba(169, 102, 24, 0.76);
  line-height: normal;
}

.favBtn {
	width: 1em;
	height: auto;
	font-size: 100px;
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

.tx {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1.2; 
  object-fit: cover;
  box-sizing: border-box;
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
.intro {
  width: 100%;
  margin-top: 30px;
  height: auto;
  padding: 2px 2px 2px 2px;
  border-radius: 11px;
  background-color: rgba(204, 62, 31, 0.09);
  box-sizing: border-box;
}
.minicard {
  display: flex;
  flex-direction: column;
  width: 96%;  
  height: auto; 
  /* background-color: #f6f1ed; */
  /* margin-top: 10px; */
  margin-left: 2%;
  margin-right: 2%;
  padding: 1em;
  box-sizing: border-box;
}
</style>


<!-- .recommendation-info {
  padding: 10px;
}

.recommendation-info h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.recommendation-info p {
  font-size: 14px;
  color: #666;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.right-panel {
  width: 20%;
  background-color: #fff9f4;
  padding: 10px;
}

.user-info {
  margin-bottom: 20px;
}

.user-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.user-works img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
} -->
<!-- </style> -->
