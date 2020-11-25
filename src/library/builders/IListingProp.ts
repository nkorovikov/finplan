import IFilterSet from "@/domain/abstract/filters/IFilterSet";

export default interface IListingProp {
  showFilter: boolean;
  showPagination: boolean;
  view: string;
  filters: Array<IFilterSet>;
}
