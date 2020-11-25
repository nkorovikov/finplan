import IFilter from "@/domain/abstract/filters/IFilter";

export default interface ICategoryFilter extends IFilter {
  type: number;
  name: string;
}
