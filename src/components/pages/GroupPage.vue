<template>
    <div class="container">
        <div class="bg-light box-light py-3">
            <h2>Informações do Grupo</h2>
            <div class="container">
                <hr />
                <img src="@/assets/gcc_logo.png" class="group_logo" alt="" />
            </div>
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h3>Grupo</h3>
                    <div class="container">
                        <div class="row mb-3 g-3 align-items-center">
                            <div class="col">
                                <label for="group_name" class="col-form-label"
                                    >Nome</label
                                >
                                <input
                                    disabled
                                    :value="'Grupo de Combate Cascavel'"
                                    id="group_name"
                                    class="form-control"
                                />
                            </div>
                        </div>
                        <div class="row mb-3 g-3 align-items-center">
                            <div class="col-3">
                                <label
                                    for="group_nickname"
                                    class="col-form-label"
                                    >Sigla</label
                                >
                                <input
                                    :value="'G.C.C'"
                                    id="group_nickname"
                                    class="form-control"
                                />
                            </div>
                            <div class="col">
                                <label for="group_email" class="col-form-label"
                                    >E-mail</label
                                >
                                <input
                                    disabled
                                    :value="'vitor.eduardo.2015@outlook.com'"
                                    id="group_email"
                                    class="form-control"
                                />
                            </div>
                            <div class="col-3">
                                <label
                                    for="group_contact"
                                    class="col-form-label"
                                    >Contato</label
                                >
                                <input
                                    :value="'(45)99840-9768'"
                                    id="group_contact"
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
                    <h3>Campos</h3>
                    <div class="container mt-3 overflow-auto">
                        <table class="table table-striped border">
                            <thead>
                                <tr>
                                    <th scope="col">Campo</th>
                                    <th scope="col">Endereço</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <th scope="row">Campo Cascavel</th>
                                    <td>
                                        <small>
                                            Av. Dr. Ezuel Portes, 9569 - Santa
                                            Felicidade, Cascavel - PR, 85818-557
                                        </small>
                                    </td>
                                    <td>
                                        <div class="">
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-pencil-square"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                    />
                                                </svg>
                                            </button>
                                            <button
                                                class="btn btn-sm btn-danger"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-trash"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                                                    />
                                                    <path
                                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="3">
                                        <div class="btn btn-success row">
                                            Novo campo
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr class="mx-3 d-lg-none" />
                </div>
                <div class="col-lg-6 col-12">
                    <div class="row">
                        <h3>Membros</h3>
                    </div>
                    <div class="container mt-3 overflow-auto">
                        <table class="table table-striped border">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col" colspan="3">Acessos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <th scope="row">Peter Peres de Lima</th>
                                    <td>
                                        Teste
                                    </td>
                                    <td>
                                        Teste
                                    </td>
                                    <td>
                                        Teste
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
.group_logo {
    max-height: 200px;
    border-radius: 50%;
}
</style>
