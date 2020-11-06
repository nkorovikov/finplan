<template>
  <v-text-field
    @input="handler"
    :value="value"
    :placeholder="$t($attrs.placeholder)"
    outlined
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VTextField } from "vuetify/lib";

@Component({
  components: {
    VTextField,
  },
})
export default class FormInput extends Vue {
  @Prop() readonly value!: string;

  handler(value: string) {
    this.$emit("input", value);
  }
}
</script>
