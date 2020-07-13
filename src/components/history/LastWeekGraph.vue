<template>
  <div>
    <h3>Last five days outcomes</h3>
    <v-sparkline
      :value="data"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="lineWidth"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
      :show-labels="showLabels"
      :label-size="labelSize"
    ></v-sparkline>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class History extends Vue {
  private showLabels = false;
  private lineWidth = 1;
  private labelSize = 10;
  private radius = 20;
  private padding = 0;
  private lineCap = "round";
  private gradient = ["red", "orange", "yellow", "green"];
  private gradientDirection = "top";
  private fill = false;
  private type = "trend";
  private autoLineWidth = false;

  @Prop() readonly data!: Array<any>;
}
</script>