import FormFactory from "@/components/form/FormFactory.vue";
import { CreateElement, VueConstructor, VNode } from "vue/types/umd";
import IField from "./IField";
import IProp from "./IProp";

export default class FormBuilder {
  private props: IProp = {
    fields: [],
  };
  private provider?: VueConstructor;

  withProvider(provider: VueConstructor) {
    this.provider = provider;
    return this;
  }

  addField(field: IField) {
    this.props.fields.push(field);
    return this;
  }

  build() {
    const Provider = this.provider;
    const props = this.props;

    return {
      name: "Form",
      props: {
        id: {
          default: null,
          type: [Number, String],
        },
      },
      render(h: CreateElement): VNode {
        return h(Provider, [
          h(FormFactory, { props: { id: this.id, ...props } }),
        ]);
      },
    } as any;
  }
}
