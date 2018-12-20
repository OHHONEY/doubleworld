<template>
    <div class="movie">
        <div>HELLO</div>
        <video src="./asset/har.mp4" controls></video>
        <audio class="audio">
            <source src="./asset/Bird.mp3" type="audio/mp3">
        </audio>
        <button @click="play"></button>
    </div>
</template>

<script>
export default {
    methods: {
        play() {
            alert(this.$refs.audio)
            this.$refs.audio.play()
        }
    }
}
</script>

<style lang="less" scoped>
.movie {
    clear: both;
}
.audio {
    background-color: aquamarine;
    width: 50px;
    height: 10px;
}
</style>
