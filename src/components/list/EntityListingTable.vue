<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <template v-for="entity in entities">
          <slot :entity="entity" />
        </template>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { VSimpleTable } from "vuetify/lib";
import Model from "@/domain/abstract/models/Model";

@Component({
  components: {
    VSimpleTable,
  },
})
export default class EntityListingTable extends Vue {
  @Prop() readonly entities!: Array<Model>;
}
</script>
