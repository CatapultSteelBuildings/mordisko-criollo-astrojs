import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess({
    defaults: {
      style: 'postcss',
    },
    markHotUpdate: true,
    compilerOptions: {
      typescript: {
        sourceMap: true,
        noEmit: true,
      },
    },
  }),
};
