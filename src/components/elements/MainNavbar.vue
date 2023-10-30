<template>
    <nav class="navbar navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Airsoft Agenda</a>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="/">Calendário</a>
                </li>
                <!-- <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a class="dropdown-item" href="#"
                                >Something else here</a
                            >
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li> -->
            </ul>
            <AccountNavbar />
        </div>
    </nav>
</template>

<script>
import AccountNavbar from "@/components/elements/AccountNavbar.vue";
export default {
    components: {
        AccountNavbar,
    },
    props: {},
};
</script>

<style scoped>
</style>
