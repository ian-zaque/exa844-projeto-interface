<template>
    <div class="blackened container">
        <b-row>
            <b-col cols="12" sm="12">
                <h1 class="search-title">Biblioteca</h1>
            </b-col>
        </b-row>

        <b-row align-h="start">
            <b-col cols="9">
                <b-input v-model="profileLink" class="spot-input" placeholder="Escaneie seu perfil Spotify..."></b-input>
            </b-col>
            <b-col cols="3">
                <b-button @click="verify()" pill variant="outline-light">
                    <b-icon icon="check2"></b-icon>
                </b-button>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <hr>
                <h6 class="small">Aqui você deve apenas enviar o ID de seu perfil {{ ";)" }}</h6>
                <h6 class="small">Ex.: 2124wohtd26bam7kcuvhvwgii</h6>
            </b-col>
        </b-row>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Library',

    data() {
        return {
            profileLink: '',
        };
    },

    computed:{
        ...mapGetters({ isLoading: "isLoading" }),
    },

    mounted(){
    },

    methods: {
        ...mapActions(["scanProfile"]),

        verify() {
            this.scanProfile(this.profileLink)
        },
    },
};
</script>

<style scoped>
.blackened {
    background-color: #282828;
    background-color: #282828;
    color: #fff;
}

.spot-input{
    background-color: #282828; 
    color: #fff;
    border-color: #fff;
}

.search-title {
    /* font-size: 24px; */
    font-weight: bold;
    color: #fff;
}

.search-form {
    display: flex;
    align-items: center;
}

</style>