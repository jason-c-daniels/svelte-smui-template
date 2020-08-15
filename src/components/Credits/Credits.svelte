<style lang="scss">
    @import "Credits.scss";
</style>

<script>
    import ExpandingPanel from '../ExpandingPanel'

    export let expanded = true;
</script>

<ExpandingPanel title="Credits" bind:expanded={expanded}>
    <div>
        <h3>My contributions</h3>
        <p> I created this project when looking to learn more about both Svelte and CSS3 custom properties.
            Since I'm a n00b, and old, I wanted simplicity out of a template that allowed me to store style info
            separate from markup and code. I didn't find a single template project that met my wants. So I made my own.
            My real role here was as integrator of others' works, as well as providing an opinionated structure for
            storing the files and handling global style information. (Inspect the GlobalCss component for more info)
        </p>

        <h3>Source Material</h3>
        <ul>
            <li><a href="https://github.com/sveltejs/template">github:svelejs/template</a> is the base template</li>
            <li><a href="https://github.com/sveltejs/component-template">github:svelejs/component-template</a> is the
                base template for the _ComponentTemplate folder
            </li>
            <li><a href="https://github.com/sveltejs/svelte-preprocess">github:sveltejs/svelte-preprocess</a> is the
                official svelte tooling needed to use postcss
            </li>
            <li><a href="https://github.com/postcss/postcss">github:postcss/postcss</a> is the tooling that allows us to
                store styles in separate .css files.
            </li>
            <li>
                <a href="https://stackoverflow.com/questions/59792844/rollup-js-have-postcss-process-whole-bundle-css-instead-of-individual-files-fr">Stack
                    Overflow Q#:59792844</a> is what showed me how to properly hook it all up.
            </li>
        </ul>

    </div>
</ExpandingPanel>