<template>
    <div id="favList">
        <h1>favlist</h1>
        <div v-for="favCharacter in this.favCharacters">
            {{ favCharacter.name }}
        </div>
    </div>
</template>

<script>
    export default {
        emits: [""],
        props:{
            favCharacters: Array,
        }
    }
</script>

<style></style>