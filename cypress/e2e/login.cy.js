/// <reference types="Cypress" />


describe("Login test", () => {

  beforeEach(() => {

    cy.visit("https://www.saucedemo.com/")


  })

  it("Should Login Successfull", () => {

    cy.get("#user-name").should("be.visible").type("standard_user")

    cy.get("#password").should("be.visible").type("secret_sauce")

    cy.get("#login-button").click()

    cy.url().should("include", "inventory")

  })

  it("Should not allow login with Wrong Username", () => {

    cy.get("#user-name").should("be.visible").type("Akshay_varma")

    cy.get("#password").should("be.visible").type("secret_sauce")

    cy.get("#login-button").click()

    cy.contains("Epic sadface: Username and password do not match any user in this service")


  })

  it("Should not allow login with Wrong Password", () => {

    cy.get("#user-name").should("be.visible").type("standard_user")

    cy.get("#password").should("be.visible").type("Akshay_varma")

    cy.get("#login-button").click()

    cy.contains("Epic sadface: Username and password do not match any user in this service")


  })

  it("Should not allow login with Incorrect Credentials", () => {

    cy.get("#user-name").should("be.visible").type("Akshay_varma")

    cy.get("#password").should("be.visible").type("Varma_akshay")

    cy.get("#login-button").click()

    cy.contains("Epic sadface: Username and password do not match any user in this service")

  })

  it("should not allow login with an Empty Password", () => {

    cy.get("#user-name").should("be.visible").type("standard_user")

    cy.get("#password").should("be.visible")

    cy.get("#login-button").click()

    cy.contains("Epic sadface: Password is required")
  })

  it("should not allow login with an Empty Username", () => {

    cy.get("#user-name").should("be.visible")

    cy.get("#password").should("be.visible").type("secret_sauce")

    cy.get("#login-button").click()

    cy.contains("Epic sadface: Username is required")


  })

  it("should not allow login with an Empty Credentials", () => {

    cy.get("#user-name").should("be.visible")

    cy.get("#password").should("be.visible")

    cy.get("#login-button").click()

    cy.contains("Epic sadface: Username is required")


  })

  it("Should Mask the Password input", () => {

    cy.get("#user-name").should("be.visible").type("standard_user")

    cy.get("#password").should("be.visible").type("secret_sauce")

    cy.get("#password").should("have.attr", "type", "password")

    cy.get("#login-button").click()

  })




})