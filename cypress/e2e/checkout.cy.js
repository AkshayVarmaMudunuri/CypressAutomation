describe("Checkout Page Test", () => {

    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("standard_user")

        cy.get("#password").type("secret_sauce")

        cy.get("#login-button").click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="checkout"]').click()

    })

    it("Should Display the Checkout Page", () => {

        cy.url().should("include", "checkout")

        cy.get('[data-test="title"]').should("be.visible")

        cy.get('[data-test="firstName"]').should("be.visible").type("Akshay Varma")

        cy.get('[data-test="lastName"]').should("be.visible").type("Mudunuri")

        cy.get('[data-test="postalCode"]').should("be.visible").type("LS17 7SU")

        cy.get('[data-test="continue"]').click()

        cy.url().should("include", "checkout-step-two")

    })


    it("Should not processed to checkout without First Name", () => {

        cy.get('[data-test="lastName"]').type("Mudunuri")

        cy.get('[data-test="postalCode"]').type("LS17 7SU")

        cy.get('[data-test="continue"]').click()

        cy.contains("Error: First Name is required")

    })

    it("Should not processed to checkout without Last Name", () => {

        cy.get('[data-test="firstName"]').type("Akshay")

        cy.get('[data-test="postalCode"]').type("LS17 7SU")

        cy.get('[data-test="continue"]').click()

        cy.contains("Error: Last Name is required")

    })

    it("Should not processed to checkout without Postcode", () => {

        cy.get('[data-test="firstName"]').type("Akshay")

        cy.get('[data-test="lastName"]').type("Mudunuri")

        cy.get('[data-test="continue"]').click()

        cy.contains("Error: Postal Code is required")

    })

    it("Should not processed to checkout without details", () => {

        cy.get('[data-test="continue"]').click()

        cy.contains("Error: First Name is required")

    })

    it("Should Display the checkout overview page", () => {

        cy.get('[data-test="firstName"]').should("be.visible").type("Akshay Varma")

        cy.get('[data-test="lastName"]').should("be.visible").type("Mudunuri")

        cy.get('[data-test="postalCode"]').should("be.visible").type("LS17 7SU")

        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="item-0-title-link"]').should("be.visible")

        cy.get('[data-test="inventory-item-price"]').should("have.text", "$9.99")

        cy.get('[data-test="subtotal-label"]').should("have.text", "Item total: $9.99")

        cy.get('[data-test="tax-label"]').should("have.text", "Tax: $0.80")

        cy.get('[data-test="total-label"]').should("have.text", "Total: $10.79")

        cy.get('[data-test="finish"]').click()

        cy.url().should("include", "checkout-complete")


    })

    it("Should complete the order and return to the Products page", () => {

        cy.get('[data-test="firstName"]').should("be.visible").type("Akshay Varma")

        cy.get('[data-test="lastName"]').should("be.visible").type("Mudunuri")

        cy.get('[data-test="postalCode"]').should("be.visible").type("LS17 7SU")

        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="finish"]').click()

        cy.url().should("include", "checkout-complete")

        cy.get('[data-test="pony-express"]').should("be.visible")

        cy.get('[data-test="complete-header"]').should("have.text", "Thank you for your order!")

        cy.get('[data-test="complete-text"]').should("have.text", "Your order has been dispatched, and will arrive just as fast as the pony can get there!")

        cy.get('[data-test="generate-pdf-order"]').click()

        cy.get('[data-test="back-to-products"]').click()

        cy.url().should("include", "inventory")


    })


})