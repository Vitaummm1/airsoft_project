<template>
    <div>
        <div class="">
            <GameEvent class="bg-light"
                :field_title="'Campo teste'"
                :group_name="'GCC'"
                :event_type="'Casual'"
                :event_title="'Jogo teste'"
                :event_description="'Descrição'"
                :event_subscriptions="20"
                :event_capacity="40"
                :is_participating="false"
            />
            <GameEvent class="bg-light"
                :field_title="'Campo teste'"
                :group_name="'GCC'"
                :event_type="'Casual'"
                :event_title="'Jogo teste'"
                :event_description="'Descrição'"
                :event_subscriptions="20"
                :event_capacity="40"
                :is_participating="false"
            />
            <GameEvent class="bg-light"
                :field_title="'Campo teste'"
                :group_name="'GCC'"
                :event_type="'Casual'"
                :event_title="'Jogo teste'"
                :event_description="'Descrição'"
                :event_subscriptions="20"
                :event_capacity="40"
                :is_participating="false"
            />
        </div>
    </div>
</template>

<script>
import GameEvent from '../elements/GameEvent.vue';

export default {
    components: {
        GameEvent
    },
    props: {},
    created() {
        console.log("aqui")
    }
};
</script>

<style scoped>

</style>
