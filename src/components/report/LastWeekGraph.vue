<template>
  <v-card color="#00E5FF" dark class="pl-2 pt-1 pr-2">
    <h3>{{ $t("history.last-week-outcomes") }}</h3>
    <v-sparkline
      :value="data"
      color="white"
      :smooth="15"
      :line-width="lineWidth"
      :stroke-linecap="lineCap"
      :type="type"
      auto-draw
      auto-draw-easing="ease-in-out"
    ></v-sparkline>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class History extends Vue {
  private lineWidth = 2;
  private lineCap = "round";
  private type = "trend";

  @Prop() readonly data!: Array<number>;
}
</script>
