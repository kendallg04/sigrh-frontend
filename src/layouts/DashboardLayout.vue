<script setup>
import sidebar from '../components/sidebar.vue';
// import '@/assets/css/dashboard.css';
</script>

<template>
    <div class="d-flex flex-nowrap" style="min-height:100vh;">
        <div id="wrapper">
            <sidebar />
            <main>
                <RouterView />
            </main>
        </div>
    </div>
</template>