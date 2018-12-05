<template>
	<div class="home" id="home-events">
        <!-- 大事记 -->
        <transition-group name='events' tag="p">
            <div  v-for="(event, i) in events" :key="i" class="event" @click="addEvent">
                <h3>{{event.title}}</h3>
                <p>{{event.content}}</p>
            </div>           
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: []
        }
    },
    methods: {
        addEvent() {
            let event = {title: '起风了', show: false, content: ''}
            this.events.splice(1, 0, event);
        },
        go() { 
        }
    },
    mounted() {
        let animal = setInterval(() => {
            let event = {title: '起风了', show: false, content: ''}
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
    clear: both;
    text-align: center;
    width: 75%;
    margin: 0 auto;
    border-radius: 24px;
    .event {
        text-align: center;
        line-height: 112px;
        height: 112px;
        background: rgba(255, 255, 255, 0.8);
        font-size: 16px;
        margin: 20px 0;
        padding: 6px 0;
        border-radius: 8px;
    }
    .events-enter-active {
        transition: all 5s;
    }
    .events-enter {
        opacity: 0;
        transform: translateX(-20px);
    }
}
</style>

