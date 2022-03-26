<template>
    <div id="SimArtist">
        <p>{{artist.name}}</p>
    </div>
</template>

<style scoped>
    div { 
        padding: 10px 20px;
        margin-bottom: 10px;
        background-color: #dfdfdf;
        border-radius: 15px;
        width: 100%;
    }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { similarArtistsResponse ,topAlbumsResponse, TopAlbums, SimilarArtists, albums, artists, images } from "../datatypes";

@Component
export default class SimilarArtistComponent extends Vue {
    @Prop() artist!: artists;
}
</script>
