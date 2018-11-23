<template>
    <div class="girlfriend">
        <div class="proTip">
            <canvas id="canvas"></canvas>
        </div>
        <!-- <div class="content">
            <img class="contentImg" src="./asset/witness.gif" alt="Merry Christmas">
        </div> -->
        <div class="content">
            <div class="Img">
            </div>
            <div class="Text">
                <p class="h2-title">I'm looking for the job of a front-end engineer</p>
                <span class="knowK">VUE</span>
                <span class="knowK">WEBPACK</span>
                <span class="knowK">CANVAS</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        drawPro() {
            let canvas = document.getElementById('canvas'),
                context = canvas.getContext('2d'),
                cx = canvas.width = 400,
                cy = canvas.height = 24;

            context.beginPath();
            context.arc(20, 12, 6, 0, Math.PI * 2, true);
            context.closePath();
            context.fillStyle = '#E95030';
            context.fill();
        }
    },
    mounted() {
        this.drawPro();
    }
};

</script>

<style lang="less">
@font-face {
  font-family: "Glamor";
  src: url("../../asset/font/Glamor-Regular.ttf") format("ttf");
}

#canvas {
  position: absolute;
  right: 48px;
  top: 16px;
  background-color: #8cd5ca;
}

.content {
  margin-top: 42px;
  display: flex;
  .Img {
    flex: 0 50%;
  }
  .Text {
    flex: 0 50%;
    p {
      font-family: "Glamor";
      font-size: 24px;
    }
    .knowK {
      color: #dd4026;
      display: inline-block;
      width: 80px;
      background-color: #8cd5ca;
      border-radius: 40px;
    }
  }
}
</style>
