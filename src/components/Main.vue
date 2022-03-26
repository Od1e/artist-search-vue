<template>
  <div id="main">
      <div class="flex" id="topBar">
          <h1>Artist Search</h1>
          <SearchBar @artist-changed="getArtistInfo" />
          <p>Hit enter to search</p>
      </div>

      <div id="moduleContent">
          <div class="flex" id="topAlbumsModule">
              <h2 class="column-header" v-show="searched">Top Albums</h2>
              <ArtistAlbums v-for="(rAlbum, pos) in albums" :key="`album-${pos}`"
                :album="rAlbum">
              </ArtistAlbums>
          </div>

          <div class="flex" id="similarArtistsModule">
              <h2 class="column-header" v-show="searched">Top Artists</h2>
              <SimArtists v-for="(rArtist, pos) in artists" :key="`artist-${pos}`"
                :artist="rArtist">
              </SimArtists>
          </div>

          <div id="LastFMDisplayModule">

          </div>
      </div>
  </div>
</template>

<style scoped>
    * {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #topBar {
        flex-direction: column;
        flex-basis: 100%;
        flex-wrap: wrap;
    }

    #topBar > p {
        color: gray;
        font-size: 12px;
    }

    #moduleContent {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-basis: 100%;
    }

    #topAlbumsModule, #similarArtistsModule {
        flex-direction: column;
        margin-left: 30px;
        margin-right: 30px;
    }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios, { Axios, AxiosResponse } from "axios";
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
    fetchAmountSimArtists = 5;

    albums: Array<albums> = [];
    artists: Array<artists> = [];
    searched =  false;

    getArtistInfo(artist: string): void {
        console.log(`Searching artist: ${artist}`);
        this.searched = true;

        axios
            .request({
                method: "GET",
                url: "https://ws.audioscrobbler.com/2.0",
                params: { method: "artist.gettopalbums", artist: artist, limit: this.fetchAmountAlbums,
            autocorrect: 1, api_key: this.apiKey, format: "json" },
            })
            .then((r: AxiosResponse) => r.data)
            .then((returnedAlbums: topAlbumsResponse) => {
                this.albums.splice(0);
                this.albums.push(...returnedAlbums.topalbums.album);
            })

        axios
            .request({
               method: "GET",
            url: "https://ws.audioscrobbler.com/2.0",
            params: { method: "artist.getSimilar", artist: artist, limit: this.fetchAmountSimArtists,
            autocorrect: 1, api_key: this.apiKey, format: "json" } 
            })
            .then((r: AxiosResponse) => r.data)
            .then((returnedArtists: similarArtistsResponse) => {
                this.artists.splice(0);
                this.artists.push(...returnedArtists.similarartists.artist);
            })
    }
}
</script>
