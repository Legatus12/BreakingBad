<template>
  <div class="w-full h-full flex flex-col bg-[#2d572c] font-Montserrat">
    <Header @modifiedInput="searchCharacter" class="w-full h-60"/>

    <Menu @charactersClicked="renderCharacters" @favsClicked="renderFavs" :menu=this.control />

    <List v-if="this.loading === false" :characters="this.activeList" @favListModified="modFavList" :favId="this.favList.map(x => x.char_id)" class="w-full h-full"/>
    <div v-else class="w-full h-full text-[#f6f6f6] text-4xl gap-8 p-8 flex items-center justify-center">cargando...</div>

  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';
import List from '@/components/List.vue';

import axios from 'axios';

export default {
  name: "App",
  components: {Header, Menu, List},
  mounted(){
    console.log("loading characters.");
    this.searchCharacter("");
  },
  data(){
    return{
      activeList: [],
      list: [],
      favList: localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [],
      loading: true,
      control: true
    }
  },
  methods:{
    async searchCharacter(name){
      try {
        this.loading = true;
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
        this.loading = false;
        console.log(response.data);
        this.list = response.data;
        this.renderCharacters();
      } 
      catch (error) {
        console.log(error);
      }
    },
    modFavList(obj){
      if(!this.favList.filter(x => x.char_id === obj.char_id).length > 0)
        this.favList.push(obj); 
      else{
        this.favList = this.favList.filter(x => x.char_id !== obj.char_id);
        if(!this.control)
          this.activeList = this.favList;
      }
      localStorage.setItem("array", JSON.stringify(this.favList));
    },
    renderCharacters(){
      this.activeList = this.list;
      this.control = true;
      console.log("switched to characters");
    },
    renderFavs(){
      this.activeList = this.favList;
      this.control = false;
      console.log("switched to favs");
    },
  },
}
</script>

<style></style>