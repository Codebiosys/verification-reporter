import { client } from 'nightwatch-cucumber';

export default function takeScreenshot() {
  const world = this;
  return new Promise((resolve) => {
    client.screenshot(true, ({ value }) => {
      world.attach(value, 'image/png');
    }).then(resolve);
  });
}
