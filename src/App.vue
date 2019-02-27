<template>
	<div class="app_root">
		<header>
			<div class="canvas_background_box">
				<canvas id="app_canvas"></canvas>
			</div>
			<ul>
				<li v-for="(item, i) in navs" :key="i" class="nav_item">{{item}}</li>
			</ul>
			<pointer-clock />
		</header>
        <div class="router-view-box">
            <router-view></router-view>
        </div>

		<!-- <transition name="bounce" appear-active-class="animated fadeInLeft delay-3s" 
                enter-active-class="animated fadeInLeft">
                <h1 v-show="ifanimate">{{new Date().getDate()}}</h1>
            </transition> -->
	</div>
</template>

<script>
	import pointerClock from './component/pointerClock/pointerClock.vue'
	export default {
		data() {
			return {
				navs: ['首页', 'love&heart', 'programmar', 'beauty', 'introduce'],
				ifanimate: false,
				app_canvas: {},
				stars_canvas: {},
				context: {},
				temp: 0, //记录上下左右移动 
				MAX_STAR_NUMBER: 100, // 页面星星数
				round: [{
						color: 'rgba(154,125,91,0.3)'
					},
					{
						color: 'rgba(157,84,86,0.3)'
					},
					{
						color: 'rgba(191,155,222,0.3)'
					}
				], // 3个特定颜色的圆
				stars: [] // 页面星星属性 记录位置信息
			};
		},
		components: {
			pointerClock
		},
		methods: {
			toHoney() {
				// nowpage 1: hu'page 2: ohhoney'page
				if (this.nowpage) {
					this.nowpage = 0
					this.describe = 'ohhoney'
					this.$router.push('/girlfriend')
					return
				}
				this.nowpage = 1
				this.describe = 'HYX'
				this.$router.push('/boyfriend')
			},
			initCanvas() {
				this.app_canvas = document.querySelector('#app_canvas');
				// this.stars_canvas = document.querySelector('#stars_canvas');
			},
			draw_background() {
				let app_canvas = this.app_canvas;
				let context = this.app_canvas.getContext('2d');

				app_canvas.width = document.documentElement.clientWidth;
				app_canvas.height = 270;

				// 画背景圆 (顶部半圆)
				context.fillStyle = 'rgba(0,112,174,0.3)';
				context.beginPath();
				context.arc(300, -68, 168, 0, Math.PI * 2, true);
				context.closePath();
				context.fill();

				// 画随机半径圆 （20 - 100）
				// this.round.map(item => {
				// 	item.R = Math.random() * 100;
				// 	item.R = item.R < 20 ? 20 : item.R; //圆的随机半径 (20-100)
				// 	item.X = Math.random() * app_canvas.width;
				// 	item.Y = Math.random() * app_canvas.height;
				// 	context.fillStyle = item.color;
				// 	context.beginPath();
				// 	context.arc(item.X, item.Y, item.R, 0, Math.PI * 2, true);
				// 	context.closePath();
				// 	context.fill();
				// });

			},
			draw_starts() {
				let stars_canvas = this.stars_canvas;
				let context = stars_canvas.getContext('2d');

				stars_canvas.width = document.documentElement.clientWidth;
				stars_canvas.height = document.documentElement.clientHeight;
				//画小星星
				// 0 ~ 100
				let start_index = 0;
				while (start_index < this.MAX_STAR_NUMBER) {
					start_index++;
					this.stars[start_index] = {
						star_x: Math.random() * stars_canvas.width,
						star_y: Math.random() * stars_canvas.height,
						start_r: Math.random()
					}
					context.fillStyle = 'rgb(191,155,222)';
					context.beginPath();
					context.arc(this.stars[start_index].star_x, this.stars[start_index].star_y, this.stars[start_index].start_r, 0,
						Math.PI * 2, true);
					context.closePath();
					context.fill();
				}
			},
			// 使 小星星有轻微的移动
			animate() {
				let stars_canvas = this.stars_canvas;
				let context = stars_canvas.getContext('2d');
				context.clearRect(0, 0, stars_canvas.width, stars_canvas.height);

				this.stars.forEach((item, i) => {
					if (this.temp % 2 == 0) {
						item.star_y -= Math.random() / 5;
						item.star_x += Math.random() / 5;
					} else {
						item.star_y += Math.random() / 5;
						item.star_x -= Math.random() / 5;
					}
				})

				this.temp += 1;
				for (var i in this.stars) {
					context.fillStyle = 'rgb(191,155,222)';
					context.beginPath();
					context.arc(this.stars[i].star_x, this.stars[i].star_y, this.stars[i].start_r, 0, Math.PI * 2, true);
					context.closePath();
					context.fill();
				}

				requestAnimationFrame(this.animate);
			},
			// 事件代理
			eventAgent() {
				let fatherElement = document.getElementById('stars_canvas');
				fatherElement.addEventListener('click', (event) => {
					let e = event || window.event;
					let targetElement = e.target || e.srcElement; // e.srcElement: IE的目标事件
					if (targetElement) {
						alert(targetElement)
					}
				}, false)
			}

		},
		mounted() {
			this.initCanvas();
			this.draw_background();
			this.$router.push('/home');
			// this.eventAgent();
			setTimeout(() => {
				this.ifanimate = true
			}, 1000)
		}
	};

</script>

<style lang="less" scoped>
	@font-face {
		font-family: "louisvillepoet";
		src: url("./asset/font/louisvillepoet-regular.ttf");
	}

	p {
		font-family: 'louisvillepoet';
		font-size: 24px;
	}

	.app_root {
		width: 100%;
		height: 100%;
	}

	header {
		padding: 16px 20px;

		.canvas_background_box {
			position: absolute;
			top: 0;
			left: 0;
		}

		ul {
            list-style: none;
            z-index: 1;

			.nav_item {
				display: inline-block;
				padding: 8px 0px;
				vertical-align: middle;
				font-size: 16px;
                margin-right: 24px;
                &:last-child {
                    margin-right: 0;
                    // 最后一个li之后没有其他li, parents盒子已经设置了左右内边距
                }
            }
            
		}
	}





	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		margin: 40px auto;
		padding: 0 20px;
		background: rgba(0, 0, 0, 0);

		h1 {
			float: right;
			margin-right: 80px;
			font-size: 64px;
		}

		h2 {
			clear: both;
			float: right;
			margin-right: 80px;
			font-size: 28px;
			margin-bottom: 28px;
		}
	}

</style>
