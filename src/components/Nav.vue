<template>
    <div class="bg-[#f6f6f6] flex flex-col md:flex-row justify-start items-center gap-20 p-8">
        <div class="w-64 bg-[url(https://img.icons8.com/ios/500/breaking-bad.png)] bg-cover aspect-square">&nbsp;</div>
        <div class="w-full flex flex-col justify-start items-start">
            <label for="input">Buscador de personajes de Breaking Bad</label>
            <br>
            <input ref="input" v-model="input" id="input" type="text" @keydown.enter="sendInput" class="w-full bg-[#2d572c]"/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Nav",
        emits: ["modifiedInput"],
        data(){
            return{
                input: "",
            }
        },
        methods:{
            sendInput(){
                this.$emit("modifiedInput", this.input);
            },
        }
    }

</script>

<style></style>