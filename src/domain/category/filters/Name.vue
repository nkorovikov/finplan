<template>
  <div>
    <v-text-field v-model.trim="text" @input="filter" />
  </div>
</template>

<script lang="ts">
import IFilterSetValue from "@/domain/abstract/filters/IFilterSetValue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VTextField } from "vuetify/lib";

@Component({
  components: {
    VTextField,
  },
})
export default class Name extends Vue {
  @Prop() readonly name?: string;
  @Prop() readonly default?: string;
  @Prop() readonly values?: IFilterSetValue;
  private text = "";

  public created() {
    this.text = this.default || "";
  }

  private filter() {
    this.$emit("filter", Object.fromEntries(new Map([[this.name, this.text]])));
  }
}
</script>
