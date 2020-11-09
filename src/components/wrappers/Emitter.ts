import { CreateElement, VNode, VueConstructor } from "vue";
import EventInterface from "./EventInterface";
import { eventBus } from "@/main";

export default (Child: VueConstructor, event: EventInterface) =>
  ({
    name: "Emitter",
    functional: true,
    render(h: CreateElement, context: any): VNode {
      return h(
        Child,
        {
          ...context.data,
          nativeOn: {
            click: () => eventBus.$emit(event.name, event.data),
          },
        },
        context.children
      );
    },
  } as any);
