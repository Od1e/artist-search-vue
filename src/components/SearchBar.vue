<template>
    <div id="SearchBar">
        <input type="text" placeholder="Enter an artist to begin" v-model.lazy="artist">
    </div>
</template>

<style scoped>
    input {
        padding: 10px 50px;
        border-radius: 10px;
        border: 2px solid gray;
        font-size: 20px;
        text-align: center;
    }
</style>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";

    @Component
    export default class MainComponent extends Vue {
        artist = "";
        @Watch('artist')
        onPropertyChanged() {
            console.log(`New artist: ${this.artist}`)
            this.$emit("artist-changed", this.artist);
        }
    }
</script>
