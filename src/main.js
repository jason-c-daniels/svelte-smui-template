import App from './App';

const app = new App({
    target: document.body,
    props: {
        /* passing global application settings as a single object makes them easier to share among components
        if you're not using a store */
        appSettings: {applicationName: "Svelte PostCSS Demo App"},
        name:"Generic User"
    }
});

export default app;