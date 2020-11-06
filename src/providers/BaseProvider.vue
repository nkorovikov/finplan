<script lang="ts">
import { CreateElement, VNode } from "vue";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class BaseProvider extends Vue {
  public render(h: CreateElement): VNode {
    return this.$slots.default as any;
  }
}
</script>
