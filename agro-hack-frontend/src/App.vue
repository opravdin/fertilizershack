<template>
  <div id="app">
    <div class="w-menu h-full shadow-side z-30 overflow-y-auto">
      <Menu />
    </div>
    <div class="flex-grow z-20 flex flex-col">
      <div class="h-full overflow-y-auto bg-appbg">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./components/menu/SideMenu";
// import SearchBox from "./components/search/SearchBox";
export default {
  components: {
    Menu,
    // SearchBox
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  font-family: "TT Firs Neue";
}
.plus {
  min-width: 30px;
  height: 30px;
}
</style>
