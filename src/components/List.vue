<template>
    <div class="basis-2/5 bg-[#2e3a23] h-full flex overflow-x-scroll p-10">
        <div v-for="character in characters">
            <div class="h-2/3 aspect-square overflow-hidden">
                <img :src="character.img">
            </div>
            <div class="h-1/3 bg-[#f6f6f6]">
                {{ character.name }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            characters: Array,
        }
    }
</script>

<style></style>