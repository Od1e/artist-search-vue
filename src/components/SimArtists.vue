<template>
    <div id="SimArtist">
        <span id="artistName">{{artist.name}}</span>
        <span id="artistMatch"><span :class="matchColor">{{matchPct}}</span> match</span>
        <a :href="artist.url">Profile</a>
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
        height: 100px;
    }

    a {
        text-decoration: none;
        background-color: rgb(161, 161, 161);
        color: rgb(255, 255, 255);
        padding: 10px 20px;
        border-radius: 5px;
        transition: 0.3s;
    }

    a:hover {
        background-color: rgb(90, 192, 233);
    }

    #artistName {
        font-weight: bold;
    }

    .lowMatch {
        color:#808080;
    }

    .medMatch {
        color:  #cc00ff;
    }

    .highMatch {
        color: #01ccc2;
    }

    .extremeMatch {
        color: #00c40a;
    }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { similarArtistsResponse ,topAlbumsResponse, TopAlbums, SimilarArtists, albums, artists, images } from "../datatypes";

@Component
export default class SimilarArtistComponent extends Vue {
    @Prop() artist!: artists;

    matchPct: string;
    matchColor: string;

    beforeMount() : void {
        this.updatePct();
    }

    beforeUpdate() : void {
        this.updatePct();
    }

    updatePct() : void {
        let matchNumPct = Math.round(this.artist.match * 1000) / 10;
        this.matchPct = matchNumPct + "%";

        if (matchNumPct == 100) {
            this.matchColor = "extremeMatch";
            this.matchPct = "🌟 " + this.matchPct;
        }
        else if (matchNumPct >= 80) {
            this.matchColor = "highMatch";
        }
        else if (matchNumPct >= 40) {
            this.matchColor = "medMatch";
        }
        else {
            this.matchColor = "lowMatch";
        }
    }
}
</script>
