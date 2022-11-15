import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    serviceWorker: {
      register: true,
      files: (filepath) => /\.(png|svg|ico|webmanifest)$/.test(filepath)
    }
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
