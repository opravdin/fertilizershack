<template>
  <MarkerMap alignment="righttop" :marker="item" v-if="isVisible" @click="updateSelected">
    <div class="map-option-marker flex flex-col text-lg">
      <div v-if="zoom >= 14" class="flex hover:z-40">
        <div class="marker-indicator bg-appmapoptionbest"></div>
        <div class="flex flex-col">
          <div>
            <div class="bg-white flex flex-col p-2 pr-8 pb-0">
              <div>от 25 000 ₽</div>
              <div class="mt-1 font-medium">34 км</div>
            </div>
          </div>
          <div class="trapezoid"></div>
        </div>
      </div>
      <div
        class="-ml-4 -mb-4 mt-4 bg-appmapmarker w-7 h-7 rounded-full border-point border-white shadow-block"
      ></div>
    </div>
  </MarkerMap>
</template>

<script>
import MarkerMap from "vue2-gmap-custom-marker";
export default {
  components: {
    MarkerMap,
  },
  props: {
    item: Object,
    zoom: Number,
    bounds: Object,
  },
  computed: {
    isInBounds() {
      if (!this.bounds) {
        return false;
      }
      if (
        this.item.lat > this.bounds.Wa.i &&
        this.item.lat < this.bounds.Wa.j &&
        this.item.lng > this.bounds.Ra.i &&
        this.item.lng < this.bounds.Ra.j
      ) {
          return true
      }
      return false;
    },
    isVisible() {
      if (this.zoom < 12) {
        return false;
      }
      if (!this.isInBounds) {
        return false;
      }
      return true;
    },
  },
  methods: {
      updateSelected() {
          this.$store.dispatch('sellers/updateSelected', this.item)
      }
  }
};
</script>

<style>
.map-option-marker {
  font-family: "TT Firs Neue";
}

.marker-indicator {
  width: 4px;
  height: auto;
}
.trapezoid {
  height: 20px;
  border-color: white transparent transparent transparent;
  border-width: 20px 150px 0 0;
}
</style>