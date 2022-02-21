export default function resolveRenderer(component) {
  return ({ component }) => <div>[component: {component.type}]</div>;
};
