<template>
    <div>
        <img class="avatar" src="./asset/imgs/girl.png" alt="toHuyongxin" v-if="!nowpage" @click="toHoney()">
        <img class="avatar" src="./asset/imgs/boy.png" alt="toOhoney" v-else @click="toHoney()">
        <p class="avtar-text">{{describe}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowpage: 0,
            describe: 'ohhoney'
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
        }
    },
    mounted() {
        this.$router.push('/girlfriend');
    }
};
</script>

<style lang="less">
.avtar-text {
  margin: 16px 0 0 42px;
  color: chocolate;
  height: 24px;
  line-height: 24px;
}
.avatar {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 24px;
  height: auto;
  z-index: 1;
}
</style>
