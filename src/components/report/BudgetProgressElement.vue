<template>
  <div v-if="budgetLimit > 0">
    <v-tooltip color="black" open-on-click :open-on-hover="false" right>
      <template v-slot:activator="{ on, attrs }">
        <h3 v-bind="attrs" v-on="on">{{ progressTitle }}</h3>
      </template>
      <span>{{ budgetUsed + "/" + budgetLimit }}</span>
    </v-tooltip>
    <v-progress-linear
      rounded
      :height="lineWidth"
      :value="renderableProgress"
      :color="renderableProgress === 100 ? '#FF6040' : '#FF9070'"
    />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { VTooltip, VProgressLinear } from "vuetify/lib";

@Component({
  components: { VTooltip, VProgressLinear },
})
export default class BudgetProgressElement extends Vue {
  private renderableProgress = 0;
  private lineWidth = 14;

  @Prop() readonly budgetLimit!: number;
  @Prop() readonly budgetUsed!: number;
  @Prop() readonly progressTitle!: string;

  @Watch("budgetLimit")
  async budgetLimitChanged(newVal: number) {
    const sleep = (m: number) => new Promise((r) => setTimeout(r, m));
    await sleep(250);
    const progress = (this.budgetUsed / newVal) * 100;
    this.renderableProgress = progress > 100 ? 100 : progress;
  }
}
</script>
