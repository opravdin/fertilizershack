<template>
  <div class="border bg-white p-1 rounded  px-2 flex items-center">
      <slot></slot>
      <inline-svg :src="require('@/assets/icons/cross.svg')" class="ml-2 cursor-pointer fill-current text-appmenu" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>