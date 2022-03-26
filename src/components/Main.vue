<template>
  <div id="main">
      <div id="topBar">
          <h1>Artist Search</h1>
          <SearchBar @artist-changed="getArtistInfo" />
          <p>Hit enter to search</p>
      </div>

      <div id="moduleContent">

      </div>
  </div>
</template>

<style scoped>
    * {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    #topBar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-basis: 100%;
        flex-wrap: wrap;
    }

    #topBar > p {
        color: gray;
        font-size: 12px;
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosResponse } from "axios";
import { similarArtistsResponse ,topAlbumsResponse, TopAlbums, SimilarArtists, albums, artists, images } from "../datatypes";

import SearchBar from "./SearchBar.vue";
import ArtistAlbums from "./ArtistAlbums.vue";
import SimArtists from "./SimArtists.vue";
import LastFMDisplay from "./LastFMDisplay.vue";

@Component({
  components: {
    SearchBar, ArtistAlbums, SimArtists, LastFMDisplay,
  },
})

export default class MainComponent extends Vue {
    apiKey = "c5acce9c66b154433c1e5358fff84170";
    fetchAmountAlbums = 5;

    getArtistInfo(artist: string): void {
        console.log(`Searching artist: ${artist}`);

        axios
            .request({
                method: "GET",
                url: "https://ws.audioscrobbler.com/2.0",
                params: { method: "artist.gettopalbums", artist: artist, limit: this.fetchAmountAlbums,
            autocorrect: 1, api_key: this.apiKey, format: "json" },
            })
            .then((r: AxiosResponse) => r.data)
        
    }
}
</script>
