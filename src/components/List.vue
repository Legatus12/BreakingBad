<template>
    <div>
        <h1>list</h1>
        <div v-for="character in this.characters">
            <Character :obj="character" @favClicked="send" :favBtn="this.btnText"/>
        </div>
    </div>
</template>

<script>
    import Character from './Character.vue';

    export default {
        name: "List",
        emits: ["favAdded", "favRemoved"],
        components:{Character},
        props:{
            characters: Array,
            btnText: String
        },
        methods:{
            send(obj){
                this.$emit("favListModified", obj);
            }
        }
    }
</script>

<style></style>