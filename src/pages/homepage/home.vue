<template>
	<!-- 以卡片形式展示的数据 -->
	<div class="home">
		<!-- 个人工作经历 -->
		<!-- 层叠的盒子 -->
		<pointer-clock />
		<div class="flex_box">
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(154, 125, 91)'}">
				<h2>前端开发工程师</h2>
				<!-- time -->
				<p>2017.07-2018.06</p>
			</div>
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(191,155,222)'}">
				<h2>前端开发工程师</h2>
				<!-- time -->
				<p>2018.07-至今</p>
			</div>
		</div>
		<div class="flex_box">
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(154, 125, 91)'}">
				<h2>趣看天下app</h2>
				<!-- time -->
				<p>2018.07-至今</p>
			</div>
			<div class="work_experience_card" @click.prevent="front($event)" style="{background-color: 'rgb(191,155,222)'}">
				<h2>后台管理系统</h2>
				<!-- time -->
				<p>2018.07-至今</p>
			</div>
		</div>

	</div>
</template>

<script>
	import pointerClock from '../../component/pointerClock/pointerClock.vue'
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
		components: {
			pointerClock
		},
		methods: {
			front(event) {
				// alert(event.target.name)
				console.log(event.target.style);
				event.target.style.width = '50%';
				event.target.style.zIndex = 1;

			}
		},
		mounted() {}
	}

</script>

<style lang="less" scoped>
	@import '../../asset/css/font.less';

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
		margin: 24px 0;
		padding: 0 40px;
		display: flex;
		flex-direction: row;

	}

	.work_experience_card {
		padding: 6px 12px;
		flex-grow: 1;
		flex-shrink: 0;
		height: 150px;
		border-radius: 24px;
		box-shadow: 3px 3px 10px rgba(154, 125, 91, 0.5);

		h2 {
			text-align: center;
			font-family: Glamor;
		}
	}

</style>
