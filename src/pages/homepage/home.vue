<template>
	<div class="root">
        <input type="text" class="username" v-model="username">
        <input type="text" class="password" v-model="password">
        <button class="go" @click="go">sign in</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        go() {
        }
    }
}
</script>
