<template>
    <div class="w-full h-14 flex justify-around bg-[#232323] text-[#ffba00]">
        <button @click="clickChars" class="duration-200 hover:text-[#ffe190] text:bg-[#ffba00]">Personajes</button>
        <button @click="clickFavs" class="duration-200 hover:text-[#ffe190] text:bg-[#ffba00]">Favoritos</button>
    </div>
    <div class="w-full h-2 bg-[#232323] flex">
        <div class="w-1/2 h-1.5 bg-[#ffba00] absolute left-0" v-show="this.menu == true"></div>
        <div class="w-1/2 h-1.5 bg-[#ffba00] absolute left-1/2" v-show="this.menu == false"></div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props:{
            menu: Boolean
        },
        emits: ["charactersClicked", "favsClicked"],
        methods:{
            clickChars(){
                console.log("switching to characters");
                this.$emit("charactersClicked");
            },
            clickFavs(){
                console.log("switching to favs");
                this.$emit("favsClicked");
            }
        }
    }
</script>

<style scoped></style>