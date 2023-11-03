<template>
    <MainNavbar />
    <main class="container" style="min-width: 100%">
        <div class="py-3">
            <div class="col">
                <router-view />
            </div>
        </div>
    </main>
</template>

<script>
import MainNavbar from "@/components/elements/MainNavbar.vue";

export default {
    name: "App",
    components: {
        MainNavbar,
    },
};
</script>

<style>
body {
    background-color: #bbb !important;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.box-light {
    background-color: #eee !important;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #555;
}
</style>
