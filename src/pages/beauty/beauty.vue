<template>
	<div class="beauty">
		<div class="bottomTab">
			<ul>
				<li v-for="(item, i) in tab" :key="i">{{item}}
					<span>0</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab: ['首页', '动态', '购物车', '我的商城', ]
			}
		},
		methods: {},
		mounted() {}
	}

</script>

<style lang="less" scoped>
	// 默认网页 有背景
	@media screen and (min-width: 376px) {
		.beauty {
			position: relative;
			width: 200px;
			margin: 0 auto;
			min-height: 394px;
			background-image: url('./asset/background.png');
			background-size: 200px auto;

		}
	}

	@media screen and (max-width: 375px) {
		.beauty {
			width: 100%;
			height: 100vh;
			position: fixed;
			left: 0;
			top: 0;

			li {
				font-size: 16px;

				span {
					display: none;
				}

				&:nth-child(3) {
					span {
						display: inline-block;
                        transform: translateX(-8px) translateY(-4px);
                        font-size: 12px;
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
						color: aliceblue;
						background-color: red;
					}
				}
			}
		}
	}

	.beauty {
		z-index: -1;
	}

	.bottomTab {
		position: absolute;
		left: 20px;
		right: 20px;
		bottom: 20px;

		ul {
			width: 100%;
			display: flex;

			li {
				text-align: center;
				flex-grow: 1;

				span {
					display: none;
				}
			}
		}

	}

</style>
