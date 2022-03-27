<template>
    <div id="ArtistAlbums">
        <img :src="this.album.image[2]['#text']">
        <span id="albumName">{{album.name}}</span>
        <span id="playCount">{{new Intl.NumberFormat().format(album.playcount)}} plays</span>
    </div>
</template>

<style scoped>
    div { 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        padding: 10px 20px;
        margin-bottom: 10px;
        background-color: #dfdfdf;
        border-radius: 15px;
        width: 100%;
    }

    img {
        height: 100px;
        border-radius: 15px;
        margin-right: 5%;
    }

    #albumName {
        font-weight: bold;
    }

    #playCount {
        flex-basis: 100px;
    }

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { similarArtistsResponse ,topAlbumsResponse, TopAlbums, SimilarArtists, albums, artists, images } from "../datatypes";

@Component
export default class ArtistAlbumsComponent extends Vue {
    @Prop() album!: albums;

    beforeMount(): void {
        if (this.album.image[2]['#text'] == "") {
            this.album.image[2]['#text'] = "/assets/missingCover.png";
        }
    }

    beforeUpdate(): void {
        if (this.album.image[2]['#text'] == "") {
            this.album.image[2]['#text'] = "/assets/missingCover.png";
        }
    }
}
</script>
