<script>
    import GlobalCss from "../GlobalCss";
    import Credits from "../components/Credits";

    export let name;
    export let appSettings = {applicationName: "WARNING: Please pass appSettings from within main.js props."};

</script>
<style lang="scss">
    @import "App.scss";
</style>

<svelte:head>
    <title>{appSettings.applicationName}</title>
</svelte:head>

<GlobalCss/>

<main>
    <h1>Hello {name}</h1>
    <Credits/>
</main>