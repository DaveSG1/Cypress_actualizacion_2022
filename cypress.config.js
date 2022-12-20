const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
module.exports = defineConfig({
e2e: {

    "viewportWidth": 1500,
    "viewportHeight": 900,
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 4000,
    "pageLoadTimeout":6000,

    "experimentalStudio": true,  //con ésta linea le añado el Cypress Studio (sección e2e/Record)


    async setupNodeEvents(on, config) {
    const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
    });

    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config);

    return config;
},

specPattern: "cypress/e2e/",
},



});