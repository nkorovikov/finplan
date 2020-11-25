import { VueConstructor } from "vue/types/umd";
import IFilterSetValue from "./IFilterSetValue";

export default interface IFilterSet {
  component: VueConstructor;
  props: {
    name: string;
    default: number | string;
    values?: IFilterSetValue;
  };
}
