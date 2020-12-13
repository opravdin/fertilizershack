<template>
  <div class="w-full h-full">
    <GmapMap
      :center="center"
      :zoom="zoom"
      class="w-full h-full"
      ref="map"
      @zoom_changed="updateZoom"
      @bounds_changed="updateBounds"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUI: false,
      }"
    >
      <!-- <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      /> -->
      <MapMarker v-for="item in points" :item="item" :key="item.id" :zoom="zoom" :bounds="bounds"/>
    </GmapMap>
  </div>
</template>

<script>
import MapMarker from "./MapMarker"
export default {
    components: {
        MapMarker
    },
    props: {
        geopos: Object
    },
    data() {
        return {
            center: {
                lat: 55.7558,
                lng: 37.6173
            },
            currentPos: {
                lat: 55.7558,
                lng: 37.6173
            },
            zoom: 12,
            bounds: null
        }
    },
    computed: {
        points() {
            return this.$store.state.sellers.items
        },
        // radius() {
        //     if (!this.bounds) {
        //         return 100
        //     }

        //     let lat1 = this.bounds.Ra, lat2 = 

        //     var p = 0.017453292519943295;    // Math.PI / 180
        //     var c = Math.cos;
        //     var a = 0.5 - c((lat2 - lat1) * p)/2 + 
        //             c(lat1 * p) * c(lat2 * p) * 
        //             (1 - c((lon2 - lon1) * p))/2;

        //     return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
        // }
    },
    methods: {
        updateZoom(val) {
            this.zoom = val
        },
        updateBounds(val) {
            this.$set(this, 'bounds', val)
        }
    }
};
</script>

<style>
</style>