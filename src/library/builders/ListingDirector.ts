import CategoryListingItem from "@/components/list/CategoryListingItem.vue";
import Type from "@/domain/category/filters/Type.vue";
import Name from "@/domain/category/filters/Name.vue";
import CategoryProvider from "@/providers/CategoryProvider.vue";
import ListingBuilder from "./ListingBuilder";

export default class ListingDirector {
  private builder: ListingBuilder;

  constructor(builder: ListingBuilder) {
    this.builder = builder;
  }

  makeCategoryListing() {
    return this.builder
      .withProvider(CategoryProvider)
      .withListingItem(CategoryListingItem)
      .withFilters([
        {
          component: Type,
          props: {
            name: "type",
            default: 2,
            values: {
              1: "Income",
              2: "Outcome",
            },
          },
        },
        {
          component: Name,
          props: {
            name: "name",
            default: "",
          },
        },
      ])
      .view("table")
      .build();
  }
}
