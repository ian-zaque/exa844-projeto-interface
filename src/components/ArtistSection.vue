<template>
    <div class="container artist-info">

        <b-row v-b-toggle="'artist'+ artist.UID">
            <b-col cols="12">
                <h3 class="artist-name">{{ artist.name }} <b-icon icon="chevron-compact-right"></b-icon> </h3>
                <!-- <hr style="color:#fff; height:2px; border-width:0;"> -->
            </b-col>
        </b-row>

        <div>
            <b-collapse :id="'artist' + artist.UID" class="mt-2">
                <b-card style="background-color: transparent;" border-variant="success" class="container">
                    <b-card-body>
                        <b-row class="container">
                            <a class="h6 artist-genres" :href="artist.URL"> 
                                <b-icon style="color: #fff" class="h4" :href="artist.URL" icon="headphones"></b-icon>
                                <em>Ouvir {{ artist.name }} </em> 
                            </a>
                        </b-row>

                        <b-row>
                            <b-col class="artist-details">
                                <p class="artist-genres h6">Similares: <em>{{ similarArtists.join(', ') }}</em></p>
                            </b-col>
                        </b-row>
                        
                        <div v-if="artist.albums.length > 0" class="artist-albums">
                            <br>
                            <b-row v-b-toggle="'albums' + artist.UID" align-h="start">
                                <b-col>
                                    <h3 class="section-title">Albums <b-icon icon="chevron-compact-right"></b-icon> </h3>
                                </b-col>
                            </b-row>

                            <b-collapse :id="'albums' + artist.UID" class="mt-2">
                                <b-row class="album-list" align-h="between">
                                    <b-col cols="6">
                                        <div v-for="(album,id) in partitionedAlbums.first" :key="id" class="album-item">
                                            <img :src="album.img" :alt="album.name" class="album-cover" />
                                            <p class="album-title">{{ album.name + " - " + album.year }}</p>
                                        </div>
                                    </b-col>

                                    <b-col cols="6">
                                        <div v-for="(album,id) in partitionedAlbums.second" :key="id" class="album-item">
                                            <img :src="album.img" :alt="album.name" class="album-cover" />
                                            <p class="album-title">{{ album.name + " - " + album.year }}</p>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-collapse>
                        </div>

                        <div v-if="artist.singles.length > 0" class="artist-albums">
                            <br>
                            <b-row v-b-toggle="'singles' + artist.UID" align-h="start">
                                <b-col>
                                    <h3 class="section-title">Singles e EPs <b-icon icon="chevron-compact-right"></b-icon> </h3>
                                </b-col>
                            </b-row>

                            <b-collapse :id="'singles' + artist.UID" class="mt-2">
                                <b-row class="album-list" align-h="between">
                                    <b-col>
                                        <div v-for="(singles,id) in partitionedSingles.first" :key="id" class="album-item">
                                            <img :src="singles.img" :alt="singles.name" class="album-cover" />
                                            <p class="album-title">{{ singles.name + " - " + singles.year }}</p>
                                        </div> 
                                    </b-col>

                                    <b-col>
                                        <div v-for="(singles,id) in partitionedSingles.second" :key="id" class="album-item">
                                            <img :src="singles.img" :alt="singles.name" class="album-cover" />
                                            <p class="album-title">{{ singles.name + " - " + singles.year }}</p>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-collapse>
                        </div>
                    </b-card-body>
                </b-card>
            </b-collapse>
            <!-- <hr style="color:#fff; height:2px; border-width:0;"> -->
        </div>

        <br>
    </div>
</template>
  
<script>
export default {
    name: 'ArtistInfo',

    props: {
        artist: {
            type: Object,
            required: true,
        },
    },

    computed:{
        partitionedAlbums(){
            const halfIndex = this.artist.albums.length/2

            var firstHalf = this.artist.albums.slice().splice(0, halfIndex)
            var secondHalf = this.artist.albums.slice().splice(-halfIndex)

            return { first: firstHalf, second: secondHalf }
        },

        partitionedSingles(){
            const halfIndex = this.artist.singles.length/2

            var firstHalf = this.artist.singles.slice().splice(0, halfIndex)
            var secondHalf = this.artist.singles.slice().splice(-halfIndex)

            return { first: firstHalf, second: secondHalf }
        },

        similarArtists(){
            return this.artist.similarArtists.map(function(val, idx){ return val.name })
        },
    }

};
</script>
  
<style scoped>
.artist-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.artist-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
}

.artist-details {
    margin-left: 20px;
}

.artist-name {
    font-weight: bold;
    color: #fff;
}

.artist-genres {
    color: #fff;
}

.section-title {
    font-weight: bold;
    color: #fff;
    text-decoration: underline;
}

.album-list {
    color: #fff;
}

.album-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.album-cover {
    width: 20%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
}

.album-title {
    font-size: 14px;
}
</style>
  