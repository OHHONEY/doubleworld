<template>
    <div class="girlfriend">
        <div class="navigator">
            <div class="main">
                <img src="./asset/home.png" @click="go('home')" class="n-to home">
                <img src="./asset/calendar.png" @click="go('notes')" class="n-to notes">
                <img src="./asset/camera.png" @click="go('lifes')" class="n-to lifes">
            </div>
            <div class="proTip">
                <canvas id="canvas"></canvas>
            </div>
        </div>
        <simple/>
        <div class="content">
            <div class="Img">
            </div>
            <div class="Text">
                <p class="h2-title">I'm looking for the job of a front-end engineer</p>
                <ul>
                    <li class="knowK" v-for="(knowKey, index) in knowKeys" :key="index" v-on:mouseover='drawTip($event,index)' v-on:mouseout="closeDialog()">
                        {{knowKey.name}}
                    </li>
                </ul>
            </div>
        </div>
        <transition name="tip">
            <span id="tip-dialog" v-show="ifShow">
            </span>
        </transition>
    </div>
</template>

<script>
import simple from './component/simple.vue'
export default {
    data() {
        return {
            canvas: {},
            context: {},
            cx: 0,
            cy: 0,
            centerx: 20,
            centery: 12,
            knowKeys: [
                { name: 'vue', status: 'one year' },
                { name: 'webpack', status: 'half years' },
                { name: 'canvas', status: 'half years' }
            ],
            ifShow: false
        };
    },
    components: { simple },
    methods: {
        //使canvas画出的圆沿着水平线动起来
        animate() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.centerx += 0.15; // 动画横向移动的幅度

            if (this.centerx >= 400) {
                this.centerx = 6;
            }
            this.drawPro()

            requestAnimationFrame(this.animate)
        },
        drawPro() {
            let context = this.context;
            context.fillStyle = '#E95030';
            context.beginPath();
            context.arc(this.centerx, 12, 6, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        },
        drawBackground() {
            let context = this.context;
            context.fillStyle = '#F9F6F4';
            context.beginPath();
            context.arc(this.centerx, 12, 6)
        },
        drawTip(event, index) {
            if (event || window.event) {
                let eventNow = event || window.event;
                let dialog = document.getElementById('tip-dialog');
                dialog.style.position = 'absolute';
                dialog.style.left = eventNow.pageX + 'px';
                dialog.style.top = eventNow.pageY + 'px';
                document.querySelector('#tip-dialog').innerHTML = this.knowKeys[index].status;
                this.ifShow = true;
            }
        },
        closeDialog() {
            this.ifShow = false;
        },
    },
    mounted() {
        this.canvas = document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')
        this.cx = this,canvas.width = 400
        this.cy = this.canvas.height = 24
        this.drawPro()
        this.animate()
    }
};

</script>

<style lang="less" scoped>
@font-face {
  font-family: "Glamor";
  src: url("../../asset/font/Glamor-Regular.ttf") format("ttf");
}
#tip-dialog {
  background-color: rgba(221, 64, 38, 1);
  border-radius: 4px;
}

.navigator {
  margin: 16px 0 0 96px;
  display: flex;
  .main {
    flex: 0 50%;
    .n-to {
      width: 24px;
      height: auto;
    }
  }
  .proTip {
    flex: 0 50%;
    #canvas {
      background-color: #8cd5ca;
    }
  }
}

.content {
  margin-top: 42px;
  padding-right: 84px;
  padding: 0 84px 0 42px;
  display: flex;
  .Img {
    flex: 0 50%;
    order: 2;
  }
  .Text {
    flex: 0 50%;
    background-color: rgba(140, 213, 202, 0.5);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 20px;
    margin-top: 84px;
    p {
      font-family: "Glamor";
      font-size: 24px;
    }
    ul {
      list-style-position: inside;
    }
  }
}
</style>
