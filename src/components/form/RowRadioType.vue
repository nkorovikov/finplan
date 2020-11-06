<template>
  <v-radio-group @change="handler" :value="value" row>
    <v-radio :label="$t('categories.income')" :value="1"></v-radio>
    <v-radio :label="$t('categories.outcome')" :value="2"></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VRadioGroup, VRadio } from "vuetify/lib";

@Component({
  components: {
    VRadioGroup,
    VRadio,
  },
})
export default class CategoriesCreate extends Vue {
  @Prop() readonly value!: number;

  handler(value: number) {
    this.$emit("input", value);
  }
}
</script>
