<template>
  <v-select
    :value="value"
    :items="items"
    :label="$t('categories.icon')"
    @input="handler"
    outlined
  >
    <template v-slot:item="{ item }">
      <div v-html="item.text" />
    </template>
    <template v-slot:selection="{ item }">
      <div v-html="item.text" />
    </template>
  </v-select>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VSelect } from "vuetify/lib";

@Component({
  components: {
    VSelect,
  },
})
export default class IconsSelect extends Vue {
  @Prop() readonly value!: number;
  @Prop() readonly items!: Array<object>;

  handler(value: number) {
    this.$emit("input", value);
  }
}
</script>
