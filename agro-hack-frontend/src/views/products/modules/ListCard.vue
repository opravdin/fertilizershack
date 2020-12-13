<template>
  <div class="w-full my-1 flex flex-col p-2">
    <div
      class="px-2 border-appmapoption flex flex-col"
      :class="isSelected ? 'border-l-4' : ''"
    >
      <div class="flex">
          <div class="font-medium">{{item.fullname}}</div>
          <div class="flex-grow"></div>
          <div class="font-medium flex items-center"><span class="mx-2">4,7</span> <inline-svg
            class="cursor-pointer h-7 fill-current"
            :src="require(`@/assets/icons/star.svg`)"
            v-if="website"
            @click="openSite"
          /></div>
      </div>
      <div>
          {{item.addr}}
      </div>
      <div class="flex">
        <div>
          <inline-svg
            class="cursor-pointer h-7 fill-current"
            :src="require(`@/assets/icons/website.svg`)"
            v-if="website"
            @click="openSite"
          />
        </div>
        <div class="flex-grow"></div>
        <div>от 20 000 Р</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// import Filter from "./Filter"
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    selectedId() {
      return this.$store.state.sellers.selectedId;
    },
    isSelected() {
      return this.selectedId === this.item.id
    //   return true;
    },
    website() {
      let items = this.item.sites.split("\n");
      return items.length > 0 ? items[0] : null;
    },
  },
  methods: {
      openSite() {
          window.open(this.website, '_blank');
      }
  }
};
</script>

<style>
</style>