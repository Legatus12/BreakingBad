<template>
    <!--Header-->
    <div class="bg-[#f6f6f6] flex flex-col md:flex-row-reverse justify-center md:justify-start items-center gap-10 p-4">
        <!--Logo-->
        <div class="hidden md:block w-52 md:w-54 md:h-40">
            <img src="https://img.icons8.com/ios/500/breaking-bad.png" class="md:w-54 md:h-40">
        </div>
        <!--Input-->
        <div class="w-full flex flex-col gap-1 md:gap-6">
            <p class="w-full text-sm md:text-base text-[#888888] text-center md:text-left">
                fetching data from <a href="https://breakingbadapi.com/">breakingbadapi.com</a> 
            </p>
            <p class="w-full text-xl md:text-4xl text-center md:text-left">
                Buscador de <span class="underline decoration-[#ffba00] font-bold">personajes</span> de <span class="text-[#2d572c] font-black">Breaking&nbsp;Bad</span>
            </p>
            <input ref="input" v-model="input" id="input" type="text" @keydown.enter="sendInput" placeholder="Introduce un nombre..."
            class="w-full md:w-96 bg-[#2d572c] text-[#f6f6f6] p-4 rounded-full"/>
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
                search: "A"
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