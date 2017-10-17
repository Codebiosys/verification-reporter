import { client } from 'nightwatch-cucumber';

export default function takeScreenshot() {
  const world = this;

  const attach = ({ value }) => {
    world.attach(value, 'image/png');
  };

  return new Promise((resolve) => {
    client.screenshot(true, attach)
      .then(resolve);
  });
}
