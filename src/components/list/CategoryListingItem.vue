<template>
  <router-link
    :to="{ name: 'CategoriesShow', params: { id: entity.id } }"
    tag="tr"
  >
    <td>
      <i class="material-icons mr-1">{{ entity.icon }}</i>
      <span style="vertical-align: super;">
        {{ entity.name }}
      </span>
    </td>
  </router-link>
</template>

<script lang="ts">
/**
 * todo class
 */
export default {
  props: {
    entity: {},
  },
};
</script>
