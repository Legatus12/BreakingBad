<template>
    <div class="md:hover:-translate-y-4 duration-300 w-full md:w-fit h-60 md:h-fit overflow-hidden rounded-3xl bg-[#232323] text-[#f6f6f6] text-sm md:text-xl flex flex-row md:flex-col justify-between shrink-0 drop-shadow-2xl">
        <!--Image and more info-->
        <div class="w-64 md:h-full flex items-center">
            <img :src="this.obj.img" v-if="this.more == false" class="object-cover h-full md:h-96 border-r-2 md:border-b-2 md:border-r-0 border-solid border-[#f6f6f6]">
            <div v-else class="h-full md:h-96 w-full bg-[#f6f6f6] text-[#232323] p-4 overflow-y-scroll md:overflow-y-hidden">
                <p>interpretado&nbsp;por:</p>
                <p class="bg-[#232323] text-[#f6f6f6] w-fit">{{ this.obj.portrayed }}</p>
                <br>
                <p>fecha&nbsp;de nacimiento:</p>
                <p class="bg-[#232323] text-[#f6f6f6] w-fit">{{ this.obj.birthday }}</p>
                <br>
                <p>status:</p>
                <p class="bg-[#232323] text-[#f6f6f6] w-fit">{{ this.obj.status }}</p>
                <ul class="list-disc p-4">
                <li v-for="occupation in this.obj.occupation" class="">{{ occupation }}</li>
            </ul>
            </div>
        </div>
        <!--Name, nickname and buttons-->
        <div class="w-64 flex flex-col justify-center p-4 gap-4">
            <div class="h-1/2 md:h-fit md:flex md:flex-col md:items-center">
                <p><b>{{ this.obj.name }}</b></p>
                <p><i>"{{ this.obj.nickname }}"</i></p>
            </div>
            <button @click="clickMore"
            class="w-full bg-[#2d572c] hover:bg-[#468845] active:bg-[#2d572c] duration-300 text-[#f6f6f6] text-base font-bold rounded-2xl p-2">
                {{ this.info }}
            </button>
            <button @click="clickFav"
            class="w-full bg-[#ffba00] hover:bg-[#ffe190] active:bg-[#ffba00] duration-300 text-[#232323] text-base font-bold rounded-2xl p-2">
                {{ this.isFav }}
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: "Character",
    emits: ["favClicked"],
    data(){
        return{
            info: "+ info",
            more: false
        }
    },
    props:{
        obj: Object,
        favourites: Array
    },
    methods:{
        clickMore(){
            if(!this.more){
                this.more = true;
                this.info = "- info";
            }
            else{
                this.more = false;
                this.info = "+ info";
            }
        },
        clickFav(){
            if(this.favourites.filter(x => x == this.obj.char_id) > 0){
                if (confirm(`¿Quieres eliminar a ${ this.obj.name } de la lista de favoritos?`))
                    this.$emit("favClicked", this.obj);
            }
            else
                this.$emit("favClicked", this.obj);
        }       
    },
    computed:{
        isFav(){
            return this.favourites.filter(x => x == this.obj.char_id) > 0 ? "quitar de favoritos" : "añadir a favoritos"
        }
    }
}

</script>

<style></style>