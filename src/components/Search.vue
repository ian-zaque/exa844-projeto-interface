<template>
    <div class="blackened container">
        <div>
            <b-row>
                <b-col cols="12" sm="12">
                    <h1 class="search-title">Buscar</h1>
                </b-col>
            </b-row>

            <b-row align-h="start">
                <b-col cols="9">
                    <b-input v-model="searchQuery" placeholder="Busque por artistas, álbuns ou músicas..."></b-input>
                </b-col>
                <b-col cols="3">
                    <b-button @click="performSearch()" pill variant="light">
                        <b-icon icon="search"></b-icon>
                    </b-button>
                </b-col>
                <hr>
            </b-row>

            <b-row v-if="isLoading" cols="12" align-h="center">
                <br>
                <b-spinner variant="light" label="Buscando...">Buscando...</b-spinner>
            </b-row>

            <b-row v-else-if="searchResults.length > 0">
                <hr>
                <h6 class="container" style="color:#fff">Resultados encontrados: {{ searchResults.length }}</h6>
                <div class="search-result">
                    <b-row>
                        <b-col v-for="(artist, id) in searchResults" :key="id" cols="12">
                            <artist-section :artist="artist"></artist-section>
                        </b-col>
                    </b-row>
                </div>
            </b-row>

            <b-row v-else>
                <br>
                <empty-space :query="searchQuery" />
            </b-row>
        </div>
    </div>
</template>
  
<script>
import EmptySpace from "./EmptySpace"
import ArtistSection from "./ArtistSection"
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Search',

    components:{
        EmptySpace,
        ArtistSection
    },

    data() {
        return {
            searchQuery: '',
        };
    },

    mounted(){
    },

    computed:{
        ...mapGetters({ searchResults: "getResults", errors: "getErrors", isLoading: "isLoading" }),
    },

    methods: {
        ...mapActions(["fetchArtist"]),

        performSearch() {
            this.fetchArtist(this.searchQuery)
        },
    },
};
</script>
  
<style scoped>
.blackened {
    background-color: black;
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