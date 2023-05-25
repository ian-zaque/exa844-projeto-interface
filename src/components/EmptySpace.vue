<template>
    <div v-if="staticQuery.trim().length > 0" class="blackened no-results container">
        Nenhum resultado encontrado para {{ staticQuery }}...
    </div>

    <div v-else class="blackened no-results container">
        Nenhum resultado encontrado...
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'EmptySpace',

   computed:{
    ...mapGetters({ staticQuery: "getStaticQuery" }),
   }
};
</script>

<style scoped>
.blackened {
    background-color: #282828;
}

.no-results {
    font-style: italic;
    color: #999;
}
</style>