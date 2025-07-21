import { describe, beforeEach, it } from "cypress"
import { cy } from "cypress"

// Cypress E2E tests for CommUnity
describe("CommUnity App", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should display the homepage correctly", () => {
    cy.contains("CommUnity")
    cy.contains("Votre communauté, vos événements")
    cy.get('[data-testid="search-input"]').should("be.visible")
  })

  it("should allow user to search for events", () => {
    cy.get('[data-testid="search-input"]').type("concert")
    cy.get('[data-testid="search-button"]').click()
    cy.url().should("include", "/events")
    cy.contains("concert", { matchCase: false })
  })

  it("should navigate to pricing page", () => {
    cy.get('[data-testid="menu-button"]').click()
    cy.contains("Premium").click()
    cy.url().should("include", "/pricing")
    cy.contains("Plans Tarifaires")
  })

  it("should handle authentication flow", () => {
    cy.get('[data-testid="auth-button"]').click()
    cy.url().should("include", "/auth")
    cy.contains("Se connecter")
    cy.contains("Continuer avec Google")
    cy.contains("Continuer avec Apple")
  })

  it("should display events correctly", () => {
    cy.visit("/events")
    cy.get('[data-testid="event-card"]').should("have.length.at.least", 1)
    cy.get('[data-testid="event-card"]')
      .first()
      .within(() => {
        cy.get("h3").should("be.visible")
        cy.contains("€").should("be.visible")
        cy.get('[data-testid="see-details-button"]').should("be.visible")
      })
  })
})
