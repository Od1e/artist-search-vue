<template>
  <div id="main">
      <div id="topBar">
          <h1>Artist Search</h1>
          <SearchBar/>
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
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchBar from "./SearchBar.vue";
import ArtistAlbums from "./ArtistAlbums.vue";
import SimilarArtists from "./SimilarArtists.vue";
import LastFMDisplay from "./LastFMDisplay.vue";

@Component({
  components: {
    SearchBar, ArtistAlbums, SimilarArtists, LastFMDisplay,
  },
})
export default class App extends Vue {}
</script>
