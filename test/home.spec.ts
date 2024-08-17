import { IRouter, RouterConfiguration } from '@aurelia/router-lite';
import { createFixture } from '@aurelia/testing';
import { describe, it } from 'vitest';
import { Home } from '../src/home/home';

describe('home', () => {
  it('example #1', async () => {
    const { assertText, container } = await createFixture(
      '<au-viewport></au-viewport>',
      class {
        static routes = [Home];
      },
      [RouterConfiguration],
    ).started;

    const router = container.get(IRouter);
    await router.load('home');
    assertText('Router-Lite Home', { compact: true });
  });
  it('example #2', async () => {
    const { assertText } = await createFixture(
      '<au-viewport></au-viewport>',
      class {
        static routes = [{ path: '', component: Home }];
      },
      [RouterConfiguration],
    ).started;

    assertText('Router-Lite Home', { compact: true });
  });
});
