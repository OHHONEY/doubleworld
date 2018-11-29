<template>
	<div class="head-canvas">
        <h1>hello</h1>
		<canvas id="head-canvas"></canvas>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ctx: {},
                content: '',
                init_round: 80,
                rounds: [],
                round_item: {
                    index: 0,
                    center_x: 0, //圆心坐标x
                    center_y: 0, //圆心坐标y
                    circle_r: Math.random() * 2 + 1, //圆半径
                    alpha:  (Math.floor(Math.random() * 10) + 1) / 10 / 2, //透明度：0.05 ~ 0.5
                    color: `rgba(255,255,255,${alpha})` 
                }
			}
		},
		methods: {
            init() {
                let index = 0;
                while(index < this.init_round) {
                    let center_x = Math.random() * 400,
                        center_y = Math.random() * 400;
                    this.round_item = {
                        index,center_x,center_y
                    };
                    this.draw(this.round_item);
                }
            },
            draw(round_item) {
                this.content.fillStyle = round_item.color;
                this.content.shadowBlur = round_item.circle_r * 2;
                this.content.beginPath();
                this.content.arc(
                    round_item.center_x,
                    round_item.center_y,
                    round_item.circle_r,
                    0,
                    2 * Math.PI,
                    false);
                this.content.closePath();
                this.fill();
            }
        },
        mounted() {
            this.ctx = document.querySelector('#head-canvas');
            console.log(this.ctx);
            this.content = this.ctx.getContext('2d'); 
            ctx.width = 400;
            ctx.height = 400;   
            this.init()
        }

	}

</script>

<style lang="less">
</style>
