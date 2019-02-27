<template>
	<!-- 此文件在h5页面绘制指针时钟  -->
	<!-- 指针时钟有时针、分针和秒针 长度固定  分针和秒针等长 分针和时针等宽 秒针较细-->
	<div id="pointer-clock">
		<canvas id="clock-canvas" width="200" height="200">
			<!-- 先绘制静态表盘 绘制静态时针（根据系统时间） -->
		</canvas>
        <div class="introduction">
            <p>my name: ohhoney</p>
            <p>my phone: 15800825296</p>
            <p>my address: 临汾路135弄3号楼</p>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'pointerClock',
		data() {
			return {
				canvas: '',
				context: '',
				hourhandcolor: '#FFFFFF', //时针颜色
				minutehandcolor: '#FFFFFF', //分针颜色
				secondhandcolor: '#FFFFFF', //秒针颜色
				hourhandwidth: '2px', //时针宽度
				minutehandcolor: '2px', //分针宽度
				secondhandcolor: '1px', //秒针宽度      
			}

		},
		methods: {
			// 绘制指针
			draw() {
				var ctx = document.getElementById('clock-canvas').getContext('2d');
				var now = new Date(),
					sec = now.getSeconds(),
					min = now.getMinutes(),
					hr = now.getHours();
				hr = hr > 12 ? hr - 12 : hr;

				//绘制表盘底色
				ctx.save();
				ctx.clearRect(0, 0, 200, 200);
				ctx.translate(100, 100);
				ctx.rotate(-Math.PI / 2); //将坐标轴逆时针旋转90度，x轴正方向对准12点方向

				//小时刻度
				ctx.save();
				for (var i = 0; i < 12; i++) {
					ctx.beginPath();
					ctx.strokeStyle = '#000';
					ctx.lineWidth = 2;
					ctx.rotate(Math.PI / 6);
					ctx.moveTo(70, 0);
					ctx.lineTo(58, 0);
					ctx.stroke();
				}
				ctx.restore();

				//分钟刻度
				ctx.save();
				ctx.beginPath();
				for (i = 0; i < 60; i++) {
					if (i % 5 !== 0) {
						ctx.beginPath();
						ctx.strokeStyle = '#000';
						ctx.lineWidth = 1;
						ctx.moveTo(70, 0);
						ctx.lineTo(64, 0);
						ctx.stroke();
					}
					ctx.rotate(Math.PI / 30);
				}
				ctx.restore();

				//时间文字
				ctx.save();
				ctx.rotate(Math.PI / 2);
				ctx.beginPath();
				ctx.fillStyle = '#000';
				ctx.font = '16px Microsoft yahei';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText('3', 50, 0);
				ctx.fillText('6', 0, 50);
				ctx.fillText('9', -50, 0);
				ctx.fillText('12', 0, -50);
				ctx.restore();

				//时针
				ctx.save();
				ctx.rotate(hr * (Math.PI / 6) + min * (Math.PI / 360) + sec * (Math.PI / 21600));
				ctx.lineWidth = 6;
				ctx.strokeStyle = '#000';
				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(32, 0);
				ctx.stroke();
				ctx.restore();

				//分针
				ctx.save();
				ctx.rotate(min * (Math.PI / 30) + sec * (Math.PI / 1800));
				ctx.lineWidth = 4;
				ctx.strokeStyle = '#000';
				ctx.beginPath();
				ctx.moveTo(0, 0);
				ctx.lineTo(45, 0);
				ctx.stroke();

				ctx.restore();

				//秒针
				ctx.save();
				ctx.rotate(sec * (Math.PI / 30));
				ctx.beginPath();
				ctx.lineWidth = 2;
				ctx.strokeStyle = '#000';
				ctx.moveTo(0, 0);
				ctx.lineTo(54, 0);
				ctx.stroke();

				ctx.beginPath();
				ctx.lineWidth = 4;
				ctx.strokeStyle = '#000';
				ctx.moveTo(0, 0);
				ctx.lineTo(-20, 0);
				ctx.stroke();

				ctx.beginPath();
				ctx.fillStyle = '#000';
				ctx.arc(0, 0, 4, 0, Math.PI * 2, true);
				ctx.fill();

				ctx.restore();

				//边框
				ctx.restore();

				window.requestAnimationFrame(this.draw);
			},
		},
		mounted() {
			this.draw()
		}
	}

</script>

<style lang="less" scoped>
#pointer-clock {
    position: relative;
}
.introduction {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(0) translateY(-50%);
    p {
        font-size: 12px;
        margin: 4px 0; //利用BFC
    }
}
</style>
