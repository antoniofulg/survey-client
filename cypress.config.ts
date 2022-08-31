import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: 'src/main/test/cypress/support/e2e.ts',
    fixturesFolder: false,
    specPattern: 'src/main/test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
