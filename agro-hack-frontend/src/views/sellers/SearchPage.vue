<template>
  <div class="flex h-full w-full">
    <transition name="fade">
      <div v-show="tab === 'map'" class="flex-grow relative">
        <!-- оверлей поверх карты -->
        <div
          class="absolute h-full w-full z-10 flex flex-col pointer-events-none"
        >
          <div class="w-full">
            <TagCloud class="flex-grow pointer-events-auto" :tags="tags" />
          </div>
          <div class="flex-grow"></div>
          <div v-if="showFilter" class="flex w-full justify-center pointer-events-auto"><FilterCard class="shadow-block" /></div>
          <div class="flex justify-items-center w-full justify-center m-4 mb-8">
            <div class="flex bg-white p-2 shadow-block pointer-events-auto">
              <div
                class="text-appfilter cursor-pointer flex items-center"
                @click="$router.push('/search/products?mode=map')"
              >
                <span>ПОСТАВЩИКИ</span>
                <inline-svg
                  class="cursor-pointer h-7 fill-current ml-4"
                  :src="require(`@/assets/icons/expand.svg`)"
                />
              </div>
              <div class="border border-appdivider h-8 mx-4"></div>
              <div class="text-appfilter cursor-pointer flex items-center" @click="toggleFilter">
                <inline-svg
                  class="cursor-pointer h-7 fill-current mr-4"
                  :src="require(`@/assets/icons/filter.svg`)"
                />
                <span>ФИЛЬТРЫ</span>
              </div>
            </div>
          </div>
        </div>
        <MapTab @filter="toggleFilter" />
      </div>
    </transition>
    <div class="flex flex-col h-full data-col" :class="isList ? 'w-full' : ''">
      <div class="h-bar z-10 shadow-bottom relative flex items-center bg-white">
        <TagCloud class="flex-grow" :tags="tags" v-if="isList" />
        <SearchBox class="flex-grow" />
        <div class="h-full border-l flex items-center p-4">
          <div class="mx-4">
            <inline-svg
              class="cursor-pointer h-7 fill-current"
              :class="tab === 'list' ? 'text-appmenuactive' : 'text-appmenu'"
              :src="require(`@/assets/icons/list.svg`)"
              @click="tab = 'list'"
            />
          </div>
          <div class="mx-4">
            <inline-svg
              class="cursor-pointer h-7 fill-current"
              :class="tab === 'map' ? 'text-appmenuactive' : 'text-appmenu'"
              :src="require(`@/assets/icons/map.svg`)"
              @click="tab = 'map'"
            />
          </div>
        </div>
        <div class="h-full border-l flex items-center p-4">
          <div class="mr-2">
            <inline-svg
              class="cursor-pointer h-7"
              :src="require(`@/assets/icons/bell.svg`)"
            />
          </div>
        </div>
      </div>
      <div class="flex-grow overflow-y-auto">
        <ListTab
          :mode="tab === 'list' ? 'table' : 'cards'"
          @filter="toggleFilter"
        />
      </div>
      <div class="w-full bg-white h-bar"></div>
    </div>
  </div>
</template>

<script>
import SearchBox from "../../components/search/SearchBox";
import TagCloud from "../../components/ui/TagCloud";
import ListTab from "./modules/TableSearch";
import MapTab from "./modules/MapSearch";
import FilterCard from "./modules/FilterCard";
export default {
  components: { SearchBox, ListTab, MapTab, TagCloud, FilterCard },
  data() {
    return {
      tab: "list",
      tags: [], // ["Азот", "Водород"],
      showFilter: false,
    };
  },
  created() {
    this.$store.dispatch("sellers/get");
    this.$store.dispatch("products/get");
  },
  mounted() {
    if (this.$route.query.mode) {
      this.tab = this.$route.query.mode
    }
  },
  computed: {
    isList() {
      return this.tab === "list";
    },
  },
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.data-col {
  transition: width 0.5s;
}
</style>