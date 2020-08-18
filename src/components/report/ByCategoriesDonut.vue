<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { Doughnut, mixins } from "vue-chartjs";

@Component({
  components: {}
})
export default class ByCategories extends Mixins(
  Doughnut,
  mixins.reactiveProp
) {
  @Prop({
    default: (): any => null
  })
  readonly options!: any;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>