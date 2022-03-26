<template>
    <div id="ArtistAlbums">
        <p>{{album.name}}</p>
    </div>
</template>

<style scoped>
    div { 
        padding: 10px 20px;
        margin-bottom: 10px;
        background-color: lightgray;
        border-radius: 15px;
    }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { similarArtistsResponse ,topAlbumsResponse, TopAlbums, SimilarArtists, albums, artists, images } from "../datatypes";

@Component
export default class ArtistAlbumsComponent extends Vue {
    @Prop() album!: albums;
}
</script>
