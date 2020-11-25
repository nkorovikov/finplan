<template>
  <div>
    <div v-if="$slots.filter">
      <slot name="filter" />
    </div>
    <div>
      <slot />
    </div>
    <div v-if="$slots.pagination">
      <slot name="pagination" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class EntityListingLayout extends Vue {}
</script>
