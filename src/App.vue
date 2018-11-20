<template>
    <div>
        <p>{{message}}</p>
        <button @click="toHoney('/boyfriend')">toHuyongxin</button>
        <button @click="toHoney('/girlfriend')">toOhoney</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: "HELLO VUE"
    };
  },
  methods: {
    toHoney(url) {
      this.$router.push(url);
    }
  }
};
</script>
