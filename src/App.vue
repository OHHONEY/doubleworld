<template>
	<div class="app_root">
		<!-- <img class="avatar" src="./asset/imgs/girl.png" alt="toHuyongxin" v-if="!nowpage" @click="toHoney()">
        <img class="avatar" src="./asset/imgs/boy.png" alt="toOhoney" v-else @click="toHoney()"> -->
		<!-- <p class="avtar-text">{{describe}}</p>
		<router-view></router-view> -->
        <canvas id="app_canvas"></canvas>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowpage: 0,
                describe: 'ohhoney',
                MAX_STAR_NUMBER: 100,
                round: [
                    {
                        color: 'rgba(154,125,91,0.3)'
                    },
                    {
                        color: 'rgba(157,84,86,0.3)'
                    },
                    {
                        color: 'rgba(191,155,222,0.3)'
                    }
                ], //彩色圆
                stars: []
			};
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
            draw_background() {
                let app_canvas = document.querySelector('#app_canvas');
                let context = app_canvas.getContext('2d');

                app_canvas.width = document.documentElement.clientWidth;
                app_canvas.height = document.documentElement.clientHeight;

                // 画背景圆 (顶部半圆)
                context.fillStyle = 'rgba(0,112,174,0.3)';
                context.beginPath();
                context.arc(300, -68, 168, 0, Math.PI*2, true);
                context.closePath();
                context.fill();

                // 画随机半径圆 （20 - 100）
                this.round.map( item => {
                    item.R = Math.random() * 100;
                    item.R = item.R < 20 ? 20 : item.R; //圆的随机半径 (20-100)
                    item.X = Math.random() * app_canvas.width; 
                    item.Y = Math.random() * app_canvas.height;
                    context.fillStyle = item.color;
                    context.beginPath();
                    context.arc(item.X, item.Y, item.R, 0, Math.PI*2, true);
                    context.closePath();
                    context.fill();
                });

                //画小星星
                // 0 ~ 100
                let start_index = 0;
                while(start_index < this.MAX_STAR_NUMBER) {
                    start_index ++;
                    this.stars[start_index] = {
                        star_x: Math.random() * app_canvas.width,
                        star_y: Math.random() * app_canvas.height,
                        start_r: Math.random()
                    }
                    context.fillStyle = 'rgb(191,155,222)';
                    context.beginPath();
                    context.arc(this.stars[start_index].star_x, this.stars[start_index].star_y, this.stars[start_index].start_r, 0, Math.PI*2, true);
                    context.closePath();
                    context.fill();
                }

                //使 小星星沿Y轴移动
                // let animate = () => {
                //     context.clearRect(0, 0, app_canvas.width, app_canvas.height);
                //     this.stars.map( (item) => {item.star_y -= 0.15} );
                    
                // }
            },
            
		},
		mounted() {
            this.draw_background();
			// this.$router.push('/home');
		}
	};

</script>

<style lang="less">
	@font-face {
		font-family: "Glamor";
		src: url("./asset/font/Glamor-Regular.ttf") format("ttf");
	}

	.app_root {
        width: 100%;
        height: 100%;
		.avtar-text {
			padding: 16px 6px;
			font-family: "Glamor";
			font-size: 24px;
		}
	}

</style>
