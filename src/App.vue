<template>
    <MainNavbar />
    <main>
		<div class="row">
			<div class="col-3">
				Ads
			</div>
			<div class="col">
				<router-view/>
			</div>
			<div class="col-3"></div>
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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
