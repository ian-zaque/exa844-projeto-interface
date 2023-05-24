<template>
    <div class="blackened no-results container">
        Nenhum resultado encontrado...
    </div>
</template>
  
<script>
export default {
    name: 'EmptySpace',

    props:{
        query:{ type: String, default: "" }
    }
};
</script>

<style scoped>
.blackened {
    background-color: black;
}

.no-results {
    font-style: italic;
    color: #999;
}
</style>