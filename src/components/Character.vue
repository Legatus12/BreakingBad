<template>
    <div id="character">
        <div>
            <img :src="this.obj.img">
        </div>
        <div>
            <p>{{ this.obj.name }} <i>"{{ this.obj.nickname }}"</i></p>
            <p>fecha de nacimiento: {{ this.obj.birthday }}</p>
            <ul>
                <li v-for="occupation in this.obj.occupation">{{ occupation }}</li>
            </ul>
            <button @click="clickFav">{{ this.favBtn }}</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Character",
        emits: ["favClicked"],
        props:{
            obj: Object,
            favBtn : String
        },
        methods:{
            clickFav(){
                this.$emit("favClicked", this.obj);
            }
        }
    }
</script>

<style scoped>

#character{
    background-color: black;
    color: white;
    aspect-ratio: 1/2;
}

#character > div{
    height: 50%;
    overflow: hidden;
}

</style>