<template>
  <nav>
    <component
      @filter="filterHandler"
      :is="filter.component"
      v-bind="filter.props"
      v-for="(filter, index) in filters"
      :key="index"
    />
  </nav>
</template>

<script lang="ts">
import IFilter from "../../domain/abstract/filters/IFilter";
import IFilterSet from "../../domain/abstract/filters/IFilterSet";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavFilter extends Vue {
  @Prop() readonly filters?: Array<IFilterSet>;

  private values: IFilter = {};

  public created() {
    const filters = this.filters || [];
    this.values = Object.fromEntries(
      filters.map((filter: IFilterSet) => [
        filter.props.name,
        filter.props.default,
      ])
    );
  }

  filterHandler(payload: IFilter) {
    // todo
    this.values = { ...this.values, ...payload };
    this.$emit("filter", this.values);
  }
}
</script>
