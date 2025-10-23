<script setup>
import navbar from '../components/navbar.vue';
</script>

<template>
    <navbar />
    <main class="flex-fill bg-main d-flex justify-content-center align-items-center">
        <RouterView />
    </main>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100vh;
    overflow: hidden;
    width: 100%;
}

.navbar {
    height: 70px;
}

.bg-main {
    background: url('../assets/images/login_background2.png') no-repeat center center;
    background-size: 100% 100%;
    height: calc(100vh - 70px);
    width: 100%;
}
</style>