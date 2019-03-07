<template>
	<div class="beauty">
		<!-- when i am not working,I love my life  -->
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
		},
		mounted() {
			this.initUser()
			let animal = setInterval(() => {
				let event = {
					title: '起风了',
					show: true,
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

</style>
