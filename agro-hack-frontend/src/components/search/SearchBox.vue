<template>
  <div class="flex h-full w-full align-middle items-center p-6">
    <div class="icon">
        <inline-svg :src="require('@/assets/icons/search.svg')" class="fill-current text-appmenu" />
    </div>
    <div class="flex-grow ml-3">
      <input class="w-full outline-none" placeholder="Поиск по тегам и названиям" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>