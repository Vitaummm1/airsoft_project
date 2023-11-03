<template>
    <div class="container box-light p-3 my-3">
        <div class="row">
            <div class="col-3 align-self-center">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                src="@/assets/maddog_operator_pic.png"
                                alt=""
                                class="img-fluid rounded"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="@/assets/maddog_operator_pic.png"
                                alt=""
                                class="img-fluid rounded"
                            />
                        </div>
                        <div class="carousel-item">
                            <img
                                src="@/assets/maddog_operator_pic.png"
                                alt=""
                                class="img-fluid rounded"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-9">
                <div class="row h-100 align-content-between">
                    <div class="container">
                        <h4>{{ event_title }}</h4>
                        <div class="row">
                            <div class="col">
                                <h5>Organização: {{ group_name }}</h5>
                            </div>
                            <div class="col">
                                <h5>Tipo de jogo: {{ event_type }}</h5>
                            </div>
                        </div>
                        <p class="text-start">{{ event_description }}</p>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <small>{{ field_title }}</small>
                            </div>
                            <div class="col">
                                <small
                                    >Inscritos: {{ event_subscriptions }}</small
                                >
                            </div>
                            <div class="col">
                                <small>
                                    Vagas disponíveis:
                                    {{ event_capacity - event_subscriptions }}
                                </small>
                            </div>
                        </div>
                        <div
                            v-if="
                                !is_participating &&
                                event_capacity - event_subscriptions > 0
                            "
                            class="row justify-content-around"
                        >
                            <button class="btn btn-primary col-5 col-xxl-4">
                                <div class="row">
                                    <div class="col-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-file-text"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"
                                            />
                                            <path
                                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="col">Detalhes</div>
                                </div>
                            </button>
                            <button class="btn btn-success col-5 col-xxl-4">
                                <div class="row">
                                    <div class="col-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            class="bi bi-person-check"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                            />
                                            <path
                                                d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
                                            />
                                        </svg>
                                    </div>
                                    <div class="col">Participar</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: [
        "field_title",
        "group_name",
        "event_title",
        "event_type",
        "event_description",
        "event_subscriptions",
        "event_capacity",
        "is_participating",
    ],
};
</script>

<style scoped>
</style>
