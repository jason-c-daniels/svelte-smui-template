# Svelte PostCSS Template

## About
This is an opinionated nearly bare bones Svelte project template that uses PostCSS and related tools. 
The `index.html` and other portions have been pared down to bare bones.
This should eliminate much of the desire or need to tinker with the `public` folder.

As well this project template expresses a strong opinion on HOW to use global settings.
It provides a `GlobalCss` component that pulls in items such as global.css, and normalize.css.
It also expresses the opinion that any and all modifications to the document `head` section happen within `App.svelte`
by using the `<svelte:head />` element. It's even used to set the application title.

Also, the project was created with a preference towards using an `index.js` within a named component 
folder for components. This allows you to keep all files related to the development of a single component in one place.
As well if there are subcomponents used only in the creation of the main export, they will ideally live in the same 
folder with the main component.

This work is based heavily on the work done by the `sveltejs` team on github and others.
Run the template app to see the full list.

## Using this template
1. As a github template project  you can just click the "Use This Template" button.
2. Run `npx degit jason-c-daniels/svelte-sass-template your-project-name`
3. Download a zip of the master branch from github.

## Where to go from here
You'll need to modify `package.json` and `main.js` with the actual name of your application. 
(`main.js` passes it to the App component)  From there remove the default code and begin 
coding your own application.

