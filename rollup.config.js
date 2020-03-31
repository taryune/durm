import preprocess from 'svelte-preprocess'
import postcss from 'rollup-plugin-postcss'

export default {
    plugins: [
        ...,
        svelte({
            ..,
            css: css => {
                css.write('public/css/bundle.css');
            },
            preprocess: preprocess({
                scss: true,
                postcss: {
                    plugins: [
                        require('autoprefixer')({ browsers: 'last 2 versions' })
                    ],
                },
            }),
        }),
      postcss(),
    ],
}
