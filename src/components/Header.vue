<template>
    <div class="w-full bg-[#f6f6f6] flex flex-col md:flex-row-reverse justify-center md:justify-start items-center gap-10 p-2 md:p-4">
        <!--Logo-->
        <div class="hidden md:block w-52 md:w-54 md:h-40">
            <img src="https://img.icons8.com/ios/500/breaking-bad.png" class="md:w-54 md:h-40 duration-300 hover:scale-110">
        </div>
        <!--Input-->
        <div class="w-full flex flex-col gap-1 md:gap-6">
            <p class="w-full text-sm md:text-base text-[#888888] text-center md:text-left">
                fetching data from <a href="https://breakingbadapi.com/">breakingbadapi.com</a> 
            </p>
            <p class="w-full text-xl md:text-4xl text-center md:text-left">
                Buscador de <span class="underline decoration-[#ffba00] font-bold">personajes</span> de <span class="text-[#2d572c] font-black">Breaking&nbsp;Bad</span>
            </p>
            <div class="flex justify-center md:justify-start gap-2">
                <input ref="input" v-model="this.input" id="input" type="text" @keydown.enter="sendInput" :placeholder="this.search"
                class="w-full md:w-96 bg-[#2d572c] text-sm md:text-xl text-[#f6f6f6] p-4 rounded-full"/>
                <button @click="cancelSearch" v-if="searching"
                class="rounded-full p-4 w-14 md:w-16 text-sm md:text-xl bg-[#ffba00] hover:bg-[#ffe190] active:bg-[#ffba00] duration-300">x</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Header",
    emits: ["modifiedInput"],
    data(){
        return{
            input: "",
            search: "Introduce un nombre...",
            searching: false
        }
    },
    methods:{
        sendInput(){
            this.$emit("modifiedInput", this.input);
            this.search = `Buscando a '${this.input}'`;
            this.input = "";
            this.searching = true;
        },
        cancelSearch(){
            this.$emit("modifiedInput", "");
            this.search = "Introduce un nombre...";
            this.input = "";
            this.searching = false;
        }
    }
}

</script>

<style></style>