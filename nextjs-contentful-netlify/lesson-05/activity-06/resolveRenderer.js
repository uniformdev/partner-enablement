import * as components from "../components";
import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";

const componentMap = new Map(
  Object.keys(components).map((key) => [
    String(key).toLowerCase(),
    components[key],
  ])
);

export default function resolveRenderer(component) {
  const componentType = String(component.type).toLowerCase();
  return componentMap.get(componentType) || DefaultNotImplementedComponent;
}
