<template>
  <div class="menu w-100px h-screen border border-gray-200 flex flex-col">
      <div class="flex flex-col" style="padding: 24px;">
        <img src="@/assets/logo.svg" >
        <!-- <MenuButton icon="setting"></MenuButton> -->
      </div>
      <div class="flex-grow justify-center align-middle flex flex-col">
        <MenuButton v-for="item in items" :key="item" :item="item"></MenuButton>
      </div>
      <div class="flex flex-col items-center mb-4">
        
          <img
              class="cursor-pointer rounded-full w-8 h-8"
              :src="require(`@/assets/images/avatar.png`)"
            />
      </div>
    </div>
</template>

<script>
import MenuButton from "./MenuButton";
export default {
  name: "App",
  data() {
    return {
      items: [
        'search', 'chats', 'cart', 'delivery', 'settings'
      ]
    }
  },
  components: { MenuButton },
  computed: {},
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  font-family: 'Gilroy';
}
</style>
