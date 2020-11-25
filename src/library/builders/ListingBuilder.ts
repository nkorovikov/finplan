import EntityListing from "@/components/list/EntityListing.vue";
import IListingProp from "./IListingProp";
import { CreateElement, VueConstructor, VNode } from "vue/types/umd";
import IFilterSet from "@/domain/abstract/filters/IFilterSet";

/**
 * todo item type
 */
export default class ListingBuilder {
  private props: IListingProp = {
    showFilter: false,
    filters: [],
    showPagination: false,
    view: "table",
  };
  private provider?: VueConstructor;
  // eslint-disable-next-line
  private item?: any;

  withProvider(provider: VueConstructor) {
    this.provider = provider;
    return this;
  }

  // eslint-disable-next-line
  withListingItem(item: any) {
    this.item = item;
    return this;
  }

  withFilters(filters: Array<IFilterSet>) {
    this.props.filters = filters;
    this.props.showFilter = true;
    return this;
  }

  showPagination() {
    this.props.showPagination = true;
    return this;
  }

  view(view: string) {
    this.props.view = view;
    return this;
  }

  build() {
    const Provider = this.provider;
    const Item = this.item;
    const props = this.props;

    return {
      render(h: CreateElement): VNode {
        return h(Provider, [
          h(
            EntityListing,
            {
              props,
              scopedSlots: { default: (props) => h(Item, { props }) },
            },
            [Item]
          ),
        ]);
      },
      // eslint-disable-next-line
    } as any;
  }
}
