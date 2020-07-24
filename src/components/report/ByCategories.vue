<script lang="ts">
import { Component, Mixins, Prop } from "vue-property-decorator";
import { Pie } from "vue-chartjs";

@Component({
  components: {}
})
export default class ByCategories extends Mixins(Pie) {
  @Prop({
    default: (): any => null
  })
  readonly chartdata!: any;

  @Prop({
    default: (): any => null
  })
  readonly options!: any;

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>