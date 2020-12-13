<template>
  <div class="h-full overflow-y-auto">
    <template v-if="isCards">
      <div class="divide-y-2 divide-appdivider p-4 max-w-md">
        <Card v-for="item in paginated" :key="item.id" :item="item" />
      </div>
    </template>
    <template v-else>
      <div class="p-4 flex flex-col">
        <div class="flex items-center">
          <div class="text-apppagetitle text-2xl">Поиск</div>
          <div class="border border-appdivider h-8 mx-4"></div>
          <div
            class="text-appfilter cursor-pointer flex items-center"
            @click="this.$router.push('/search')"
          >
            <span>ПРОДУКЦИЯ</span>
            <inline-svg
              class="cursor-pointer h-7 fill-current ml-4"
              :src="require(`@/assets/icons/expand.svg`)"
            />
          </div>
          <div class="border border-appdivider h-8 mx-4"></div>
          <div class="text-appfilter cursor-pointer flex items-center">
              <inline-svg
              class="cursor-pointer h-7 fill-current mr-4"
              :src="require(`@/assets/icons/filter.svg`)"
            />
            <span>ФИЛЬТРЫ</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Card from "./ListCard";
export default {
  components: {
    Card,
  },
  props: {
    mode: String,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    isCards() {
      return this.mode === "cards";
    },
    points() {
      return this.$store.state.sellers.items;
    },
    perPage() {
      return this.isCards ? 10 : 40;
    },
    paginated() {
      return this.points.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
};
</script>

<style>
</style>