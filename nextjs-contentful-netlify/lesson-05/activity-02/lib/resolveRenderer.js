export default function resolveRenderer(component) {
  // eslint-disable-next-line react/display-name
  return ({ component }) => <div>[component: {component.type}]</div>;
}
