<template>
    <div class="w-full h-full overflow-y-scroll flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8 p-8 md:gap-16 md:p-8">
        <Character v-for="character in this.characters" :obj="character" @favClicked="modifyFavs" :favourites="this.favId"/>
        <div v-if="characters.length < 1"
        class="w-full h-full text-[#f6f6f6] text-4xl flex items-center justify-center">
        No se ha encontrado nada.
        </div>
    </div>
</template>

<script>

import Character from '@/components/Character.vue';

export default {
    name: "List",
    emits: ["favListModified"],
    components:{Character},
    props:{
        characters: Array,
        favId: Array
    },
    methods:{
        modifyFavs(obj){
            this.$emit("favListModified", obj);
        }
    }
}

</script>

<style></style>