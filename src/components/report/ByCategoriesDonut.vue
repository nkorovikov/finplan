<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { Doughnut, mixins } from "vue-chartjs";
import IChartOption from "@/library/interfaces/IChartOption";

@Component({
  components: {},
})
export default class ByCategories extends Mixins(
  Doughnut,
  mixins.reactiveProp
) {
  @Prop()
  readonly options!: IChartOption;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>
