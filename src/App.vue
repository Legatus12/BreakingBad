<template>
  <div class="w-full h-full flex flex-col bg-[#2d572c] font-Montserrat">
    <Header @modifiedInput="searchCharacter" class="w-full h-60"/>

    <Menu @charactersClicked="renderCharacters" @favsClicked="renderFavs" :menu=this.control />

    <List v-if="this.loading === false" :characters="this.activeList" @favListModified="modFavList" :favId="this.favList.map(x => x.char_id)" class="w-full h-full"/>
    <div v-else class="w-full h-full text-[#f6f6f6] text-4xl gap-8 p-8 flex items-center justify-center">
      
      <div role="status">
        <svg aria-hidden="true" class="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#ffba00]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
      cargando...
    </div>

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
        setTimeout(() => {
          this.loading = false;
          console.log(response.data);
          this.list = response.data;
          this.renderCharacters();
        }, "500")
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