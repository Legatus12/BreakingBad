<template>
  <div class="w-full h-full flex flex-col bg-[#2d572c]">
    <Nav @modifiedInput="searchCharacter" class="w-full h-full basis-1/5"/>
    <div class="w-full h-full basis-4/5">
      <List :characters="this.list" @favListModified="addToFavList" btnText="add"/>
      <List :characters="this.favList" @favListModified="removeFromFavList" btnText="remove"/>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  import List from '@/components/List.vue';

  import axios from 'axios';

  export default {
    name: "App",
    components: {Nav, List},
    data(){
      return{
        list: [],
        favList: localStorage.getItem("array") ? JSON.parse(localStorage.getItem("array")) : [],
      }
    },
    methods:{
      async searchCharacter(name){
        try {
          const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${name}`);
          console.log(response.data);
          console.log(this.favList)
          this.list = response.data;
        } catch (error) {
          console.log(error);
        }
      },
      addToFavList(obj){
        if(!this.favList.filter(x => x.char_id === obj.char_id).length > 0)
          this.favList.push(obj); 

        localStorage.setItem("array", JSON.stringify(this.favList));
      },
      removeFromFavList(obj){
        this.favList = this.favList.filter(x => x.char_id !== obj.char_id);

        localStorage.setItem("array", JSON.stringify(this.favList));
      },
    }
  }
</script>

<style></style>