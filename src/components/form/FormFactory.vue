<template>
  <form class="form-factory" @submit.prevent="submit">
    <template>
      <FormGroup v-for="field in fieldsWithDefaults" :key="field.name">
        <Component
          v-model="data[field.name]"
          :is="field.component"
          v-bind="{
            ...field.options.props,
            ...field.options.attrs,
          }"
          :id="`${_uid}-${field.name}`"
        />
      </FormGroup>

      <v-btn outlined @click.prevent="submit">{{ $t("common.save") }}</v-btn>
    </template>
  </form>
</template>

<script lang="ts">
import { Inject, Component, Vue, Prop } from "vue-property-decorator";
import FormGroup from "./FormGroup.vue";
import { VBtn } from "vuetify/lib";

const defaultField = {
  component: null,
  label: "",
  name: "",
  options: {},
};

@Component({
  components: {
    FormGroup,
    VBtn,
  },
})
export default class FormFactory extends Vue {
  @Inject("fetchOrDefault") private fetchOrDefault!: CallableFunction;
  @Inject("post") private post!: CallableFunction;
  @Inject("put") private put!: CallableFunction;

  @Prop() readonly fields!: any; //todo
  @Prop() readonly id!: number | string; //todo

  private data = {};

  get fieldsWithDefaults() {
    return this.fields.map((x: any) => ({ ...defaultField, ...x }));
  }

  public async created() {
    this.data = await this.fetchOrDefault(this.id);
  }

  public async submit() {
    if (this.id) {
      await this.put(this.id, this.data);
      return;
    }
    await this.post(this.data);
  }
}
</script>
