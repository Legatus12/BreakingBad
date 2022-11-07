<template>
  <Nav @modifiedInput="searchCharacter"/>
  <List :characters="this.list" @favListened="addToFavs"/>
  <FavList :favCharacters="this.favlist"/>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import List from '@/components/List.vue';
  import FavList from '@/components/FavList.vue';

  import axios from 'axios';

  export default {
    name: "App",
    components: {Nav, List, FavList},
    data(){
      return{
        list: [],
        favlist: [],
        searched: "",
      }
    },
    methods:{
      async searchCharacter(name){
        try {
          const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
          console.log(response.data)
          this.list = response.data;
        } catch (error) {
          console.log(error);
        }
      },
      addToFavs(obj){
        this.favlist.push(obj)
      }
    }
  }
</script>

<style></style>