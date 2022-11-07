<template>
    <div>
        <h1>list</h1>
        <div v-for="character in this.characters">
            <Character :obj="character" @favClicked="listenFav"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Character from './Character.vue';

    export default {
        name: "List",
        emits: ["favListened"],
        components:{Character},
        props:{
            characters: Array,
        },
        methods:{
            listenFav(obj){
                this.$emit("favListened", obj);
            }
        }
    }
</script>

<style></style>