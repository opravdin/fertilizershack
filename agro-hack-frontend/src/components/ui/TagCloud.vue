<template>
  <div class="w-full flex space-x-3 p-2">
      <Tag v-for="tag in tags" :key="tag" :tag="tag">
          {{tag}}
      </Tag>
  </div>
</template>

<script>
import Tag from "./Tag"
export default {
    props: {
        tags: Array
    },
    components: {Tag}

}
</script>

<style>

</style>