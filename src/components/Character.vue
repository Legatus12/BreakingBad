<template>
    <div id="character">
        <div>
            <img :src="obj.img">
        </div>
        <div>
            <p>{{ obj.name }} <i>"{{ obj.nickname }}"</i></p>
            <p>fecha de nacimiento: {{ obj.birthday }}</p>
            <ul>
                <li v-for="occupation in obj.occupation">{{ occupation }}</li>
            </ul>
            <button @click="clickFav">FAV</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Character",
        emits: ["favClicked"],
        props:{
            obj: Object
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