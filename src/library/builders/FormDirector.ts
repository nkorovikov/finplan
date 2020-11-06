import CategoryProvider from "@/providers/CategoryProvider.vue";
import IconsSelect from "@/components/form/IconsSelect.vue";
import RowRadioType from "@/components/form/RowRadioType.vue";
import FormInput from "@/components/form/FormInput.vue";
import CategoryIcons from "@/sets/CategoryIcons";
import FormBuilder from "./FormBuilder";

export default class FormDirector {
  private builder: FormBuilder;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  makeCategoryForm() {
    return this.builder
      .withProvider(CategoryProvider)
      .addField({
        component: FormInput,
        name: "name",
        options: {
          props: {
            outlined: true,
          },
          attrs: {
            ref: "nameInput",
            placeholder: "categories.title",
          },
        },
      })
      .addField({
        component: IconsSelect,
        name: "icon",
        options: {
          props: {
            items: CategoryIcons,
          },
        },
      })
      .addField({
        component: RowRadioType,
        name: "type",
        options: {},
      })
      .build();
  }
}
