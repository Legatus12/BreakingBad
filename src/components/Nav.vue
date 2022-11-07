<template>
    <div class="basis-1/5 bg-[#86895d] flex flex-wrap">
        <div class="basis-1/2">
            <h1>Breaking Bad</h1> 
            <h1>Characters</h1>
        </div>
        <div class="basis-1/2">
            <label for="entrada" class="">Busca a un personaje</label>
            <br>
            <input
                ref="input"
                v-model="input"
                id="character"
                type="text"
                name="input"
                class=""
                @keypress="sendInput" @keyup.delete="sendInput"
            />
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