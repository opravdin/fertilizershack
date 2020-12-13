<template>
  <div
    class="flex p-3 pl-8 items-center cursor-pointer text-apptext"
    @click="pushRoute"
  >
    <inline-svg :src="require(`@/assets/icons/${this.item}.svg`)" class="fill-current" :style="styleButton"/>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    isActive() {
      return this.$route.path.startsWith(`/${this.item}`);
    },
    styleButton() {
      let st = {
        color: "#D8D8D8"
      }
      if ( this.isActive ) {
        st.color = "#21D3EB"
      }
      return st
    }
  },

  methods: {
    pushRoute() {
      if (!this.isActive) {
        this.$router.push(this.item);
      }
    },
  },
};
</script>

<style>
</style>