<template>
  <EntityListingLayout>
    <NavFilter
      @filter="filterHandler"
      v-if="filters.length"
      :filters="filters"
      slot="filter"
    />
    <EntityListingTable
      v-if="view === 'table'"
      :entities="entities"
      v-slot="{ entity }"
    >
      <slot :entity="entity" />
    </EntityListingTable>
  </EntityListingLayout>
</template>

<script lang="ts">
import EntityListingLayout from "./EntityListingLayout.vue";
import EntityListingTable from "./EntityListingTable.vue";
import NavFilter from "./NavFilter.vue";

import { Component, Vue, Prop, Inject, Watch } from "vue-property-decorator";
import IFilter from "../../domain/abstract/filters/IFilter";
import IFilterSet from "../../domain/abstract/filters/IFilterSet";
import Model from "@/domain/abstract/models/Model";

@Component({
  components: {
    EntityListingLayout,
    EntityListingTable,
    NavFilter,
  },
})
export default class EntityListing extends Vue {
  @Inject("fetch") private fetch!: CallableFunction;

  @Prop() readonly view?: string;
  @Prop() readonly filters?: Array<IFilterSet>;

  private entities: Model = [];

  private async filterHandler(payload: IFilter) {
    this.entities = await this.fetch(payload);
  }

  @Watch("$route")
  async route(to: any, from: any) {
    const filters = this.filters || [];
    const defaultPayload: IFilter = Object.fromEntries(
      filters.map((filter: IFilterSet) => [
        filter.props.name,
        filter.props.default,
      ])
    );
    this.entities = await this.fetch(defaultPayload);
  }

  public async created() {
    const filters = this.filters || [];
    const defaultPayload: IFilter = Object.fromEntries(
      filters.map((filter: IFilterSet) => [
        filter.props.name,
        filter.props.default,
      ])
    );
    this.entities = await this.fetch(defaultPayload);
  }
}
</script>
