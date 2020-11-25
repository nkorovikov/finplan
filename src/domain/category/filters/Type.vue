<template>
  <div>
    <v-btn block @click.prevent="filter" outlined>{{ values[type] }}</v-btn>
  </div>
</template>

<script lang="ts">
import IFilterSetValue from "@/domain/abstract/filters/IFilterSetValue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { VBtn } from "vuetify/lib";

@Component({
  components: {
    VBtn,
  },
})
export default class Type extends Vue {
  @Prop() readonly name?: string;
  @Prop() readonly default?: number;
  @Prop() readonly values?: IFilterSetValue;
  private type = 1;

  public created() {
    this.type = Number(this.default);
  }

  private filter() {
    this.type = this.type === 1 ? 2 : 1;
    this.$emit("filter", Object.fromEntries(new Map([[this.name, this.type]])));
  }
}
</script>
