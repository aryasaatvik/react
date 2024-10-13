function Component(props) {
  let x = 0;
  for (let i = 0; i < props.count; ) {
    x += i;
    i += 1;
    continue;
  }
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ['TodoAdd'],
  isComponent: 'TodoAdd',
};
