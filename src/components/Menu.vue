<template>
    <div class="w-full h-14 flex justify-around bg-[#232323] text-[#ffba00]">
        <button @click="clickChars" class="active:border-2 border-solid border-[#ffba00]">Personajes</button>
        <button @click="clickFavs">Favoritos</button>
    </div>
    <div class="w-full h-2 bg-[#232323] flex">
        <div class="w-1/2 h-1.5 bg-[#ffba00] absolute left-0" v-show="this.r == 1"></div>
        <div class="w-1/2 h-1.5 bg-[#ffba00] absolute left-1/2" v-show="this.r == 2"></div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        data(){
            return{
                r: 1,
            }
        },
        emits: ["charactersClicked", "favsClicked"],
        methods:{
            clickChars(){
                console.log("switching to characters");
                this.$emit("charactersClicked");
                this.r = 1;
            },
            clickFavs(){
                console.log("switching to favs");
                this.$emit("favsClicked");
                this.r = 2;
            }
        }
    }
</script>

<style scoped></style>