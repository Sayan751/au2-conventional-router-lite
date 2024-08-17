import { IRouter, RouterConfiguration } from '@aurelia/router-lite';
import { createFixture } from '@aurelia/testing';
import { describe, it } from 'vitest';
import { MyApp } from '../src/my-app';

describe('my-app', () => {
  it('should render message', async () => {
    const { assertText, container } = await createFixture(
      '<au-viewport></au-viewport>',
      MyApp,
      [RouterConfiguration],
    ).started;

    assertText('Router-Lite Home', { compact: true });
    
    const router = container.get(IRouter);
    await router.load('about');
    assertText('Everything about router-lite is awesome!', { compact: true });
  });
});
