<template>
    <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
    >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-10">
                    <span>Vitor Eduardo</span>
                </div>
                <div class="col-2">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-person-circle"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </button>
    <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
    >
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Vitor Eduardo
            </h5>
            <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#"
                        >Meus jogos</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/operator">Minhas informações</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/group">Informações do grupo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
};
</script>

<style scoped>
</style>
