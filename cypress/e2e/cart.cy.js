describe("Cart Page Test", () =>{

    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("standard_user")

        cy.get("#password").type("secret_sauce")

        cy.get("#login-button").click()

    })

    it("Should open the cart page when clicked", () => {

        cy.get('[data-test="shopping-cart-link"]').should("be.visible")

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="title"]').should("be.visible")

        cy.url().should("include", "cart")

    })


    it("Should display added products in the cart", () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="inventory-item"]').first().within(() => {

            cy.get('[data-test="item-4-title-link"]').should("be.visible")

            cy.get('[data-test="inventory-item-price"]').should("be.visible").should("have.text", "$29.99")

        })

        cy.get('[data-test="inventory-item"]').eq(1).within(() => {

            cy.get('[data-test="item-0-title-link"]').should("be.visible")

            cy.get('[data-test="inventory-item-price"]').should("be.visible").should("have.text", "$9.99")

        })
    
    })

    it("Should return to the Products page when Continue Shopping is clicked", () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="continue-shopping"]').click()

        cy.url().should("include", "inventory")

        cy.get('[data-test="title"]').should("be.visible")
    })


    it("Should Remove the product iteam when cicked", () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("not.exist")

        
    })

    it("Should navigate to the Checkout page when Checkout is clicked", () => {

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="checkout"]').click()

        cy.url().should("include", "checkout")
    })



})