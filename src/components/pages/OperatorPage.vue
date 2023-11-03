<template>
    <div class="container">
        <div class="bg-light box-light py-3">
            <h2>Informações e ajustes</h2>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>
                        Operador
                    </h3>
                    <div class="container">
                        <div class="row mb-3 g-3 align-items-center">
                            <div class="col">
                                <label
                                    for="operator_name"
                                    class="col-form-label"
                                    >Nome</label
                                >
                                <input
                                    disabled
                                    :value="'Vitor Eduardo Silva'"
                                    id="operator_name"
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div class="row mb-3 g-3 align-items-center">
                            <div class="col-3">
                                <label
                                    for="operator_nickname"
                                    class="col-form-label"
                                    >Apelido</label
                                >
                                <input
                                    :value="'Vitão'"
                                    id="operator_nickname"
                                    class="form-control"
                                />
                            </div>
                            <div class="col">
                                <label
                                    for="operator_email"
                                    class="col-form-label"
                                    >E-mail</label
                                >
                                <input
                                    disabled
                                    :value="'vitor.eduardo.2015@outlook.com'"
                                    id="operator_email"
                                    class="form-control"
                                />
                            </div>
                            <div class="col-3">
                                <label
                                    for="operator_contact"
                                    class="col-form-label"
                                    >Contato</label
                                >
                                <input
                                    :value="'(45)99840-9768'"
                                    id="operator_contact"
                                    class="form-control"
                                />
                            </div>
                        </div>

                        <div class="row mb-3 g-3 align-items-center">
                            <div class="col-3">
                                <label for="operator_cep" class="form-label"
                                    >CEP</label
                                >
                                <input
                                    class="form-control"
                                    id="operator_cep"
                                    :value="'85819-170'"
                                />
                            </div>
                            <div class="col-9">
                                <label for="operator_address" class="form-label"
                                    >Endereço</label
                                >
                                <input
                                    disabled
                                    class="form-control"
                                    id="operator_address"
                                    :value="'Rua João Merlim'"
                                />
                            </div>
                            <div class="col-3">
                                <label
                                    for="operator_address_number"
                                    class="form-label"
                                    >Nº</label
                                >
                                <input
                                    class="form-control"
                                    id="operator_address_number"
                                    :value="'1367'"
                                />
                            </div>
                            <div class="col-9">
                                <label for="operator_address" class="form-label"
                                    >Complemento</label
                                >
                                <input
                                    class="form-control"
                                    id="operator_address"
                                    :value="'Apto. 405 - Bloco C'"
                                />
                            </div>
                        </div>
                    </div>
                    <hr class="mx-3" />
                    <h3>Grupo</h3>
                    <div class="container">
                        <div class="row mb-3 g-3 align-items-center">
                            <div class="col-8">
                                <label for="group_name" class="col-form-label"
                                    >Nome do grupo</label
                                >
                                <input
                                    disabled
                                    :value="'Grupo de Combate Cascavel'"
                                    id="group_name"
                                    class="form-control"
                                />
                            </div>
                            <div class="col">
                                <label for="group_title" class="col-form-label"
                                    >Título</label
                                >
                                <input
                                    disabled
                                    :value="'Membro'"
                                    id="group_title"
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <button class="btn btn-danger">Sair do grupo</button>
                    </div>
                    <hr class="mx-3 d-lg-none" />
                </div>
                <div class="col-lg-6 col-12">
                    <!-- <div class="row">
                        <h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-tools"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"
                                />
                            </svg>
                            Equipamentos
                        </h3>
                    </div> -->
                    <div class="row">
                        <h3>
                            Eventos
                        </h3>
                    </div>
                    <div class="container mt-3">
                        <div class="list-group">
                            <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">02-11-2023</div>
                                    <div class="col">Jogo casual</div>
                                    <div class="col">Campo Arena Kombat</div>
                                </div>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">02-11-2023</div>
                                    <div class="col">Jogo casual</div>
                                    <div class="col">Campo Arena Kombat</div>
                                </div>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">02-11-2023</div>
                                    <div class="col">Jogo casual</div>
                                    <div class="col">Campo Arena Kombat</div>
                                </div>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">02-11-2023</div>
                                    <div class="col">Jogo casual</div>
                                    <div class="col">Campo Arena Kombat</div>
                                </div>
                            </div>
                            <div class="list-group-item list-group-item-action">
                                <div class="row">
                                    <div class="col-3">02-11-2023</div>
                                    <div class="col">Jogo casual</div>
                                    <div class="col">Campo Arena Kombat</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <hr class="mx-3" />
                    <h3>Opções</h3>
                    <div class="container">
                        <div class="list-group">
                            <a
                                href="#"
                                class="list-group-item list-group-item-action"
                            >
                                Mudar senha
                            </a>
                            <a
                                href="#"
                                class="list-group-item list-group-item-action"
                            >
                                Sair
                            </a>
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
    props: {},
    created() {},
};
</script>

<style scoped>
</style>
