<template>
	<!-- 以卡片形式展示的数据 -->
	<div class="home">
		<!-- 个人工作经历 -->
		<!-- 层叠的盒子 -->

		<div class="flex_box">
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(154, 125, 91)'}">
				<h2>前端开发工程师</h2>
				<!-- time -->
				<p>2017.07-2018.06</p>
			</div>
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(191,155,222)'}">
				<h2>前端开发工程师</h2>
				<!-- time -->
				<p>2017.07-2018.06</p>
			</div>
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(157,84,86)'}">
				<h2>前端开发工程师</h2>
				<!-- time -->
				<p>2017.07-2018.06</p>
			</div>
		</div>
		<!-- <transition-group name='events' tag="p">
			<div v-for="(mine, i) in mines" :key="i" class="event">
                <img :src="mine.icon">
				<h3>{{mine.theme}}</h3>
				<p>{{mine.content}}</p>
			</div>
		</transition-group> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				usersInfo: [],
				events: [],
				mines: [{
						theme: 'Love & Heart',
						content: '',
						icon: require('../../asset/imgs/moon.png')
					},
					{
						theme: `I'm a programmer`,
						content: '',
						icon: require('../../asset/imgs/movie.png')
					},
					{
						theme: 'beauty',
						content: '',
						icon: require('../../asset/imgs/art.png')
					}
				]
			}
		},
		methods: {
			initUser() {
				let mainUser = {
					name: 'ohhoney',
					birthday: '1995-06-23',
					movies: ['哈尔的移动城堡', '千与千寻'], //电影title作为一个链接 跳转到电影的视屏剪辑页
					musics: ['Forever At Your Feet(rain)'] //便签点击可以播放 
				}

				this.usersInfo.splice(0, 0, mainUser);
			},
			addEvent() {
				let event = {
					title: '起风了',
					show: false,
					content: ''
				}
				this.events.splice(1, 0, event);
			},
			go() {
				alert('movie.vue')
				this.$router.push('/girlfriend/movies');
			},
			// 点击歌曲标签 播放歌曲 并且阻止父节点触发事件
			playMusic() {
				console.log(document)
			},
			front(event) {
				// alert(event.target.name)
				console.log(event.target.style);
                event.target.style.width = '50%';
                event.target.style.zIndex = 1;

			}
		},
		mounted() {
			this.initUser()
			let animal = setInterval(() => {
				let event = {
					title: '起风了',
					show: false,
					content: ''
				}
				this.events.push(event);
				if (this.events.length == 10) {
					console.log(this.events.length);
					clearInterval(animal);
				}
			}, 3000);
		}
	}

</script>

<style lang="less" scoped>
	@font-face {
		font-family: "louisvillepoet";
		src: url("../../asset/font/louisvillepoet-regular.ttf");
	}

	.home {

		.event {
			background: rgba(239, 222, 222, 0.2);
			font-size: 16px;
			margin: 40px 0;
			padding: 6px 10px;
			border-radius: 8px;
			text-align: center;

			p {
				padding: 10px;
			}

			img {
				height: 50px;
				width: auto;
			}

			h3 {
				display: inline-block;
				transform: translateY(-17px);
			}
		}

		.events-enter-active {
			transition: all 5s;
		}

		.events-enter {
			opacity: 0;
			transform: translateX(-20px);
		}
	}

	.flex_box {
		padding: 0 40px;
		display: flex;
		flex-direction: row;
	}

	.work_experience_card {
		padding: 6px 12px;
		flex-grow: 1;
		flex-shrink: 0;
		height: 150px;
		// width: 30%;
		// background-color: rgba(154, 125, 91);
		border-radius: 24px;
		box-shadow: 3px 3px 10px rgba(154, 125, 91, 0.5);
	}

</style>
