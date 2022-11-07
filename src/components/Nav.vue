<template>
    <div id="nav">
        <div>
            <h1>Breaking Bad Characters</h1>
        </div>
        <div>
            <label for="input">Busca a un personaje</label>
            <br>
            <input ref="input" v-model="input" id="input" type="text" @keydown.enter="sendInput"/>
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