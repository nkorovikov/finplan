<template>
  <div>
    <h3>{{ $t('history.last-week-outcomes') }}</h3>
    <v-sparkline
      :value="data"
      :gradient="gradient"
      :smooth="15"
      :line-width="lineWidth"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :type="type"
      auto-draw
      auto-draw-easing="ease-in-out"
    ></v-sparkline>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class History extends Vue {
  private lineWidth = 1;
  private lineCap = "round";
  private gradient = ["red", "orange", "yellow", "green"];
  private gradientDirection = "top";
  private type = "trend";

  @Prop() readonly data!: Array<any>;
}
</script>