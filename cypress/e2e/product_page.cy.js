/// <reference types="Cypress" />

describe("Product page test", () => {

    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

        cy.get("#user-name").type("standard_user")

        cy.get("#password").type("secret_sauce")

        cy.get("#login-button").click()


    })

    it("Should display the Products page after successful login", () => {

        cy.url().should("include", "inventory")

        cy.get('[data-test="title"]').should("be.visible")

    })

    it("Should display Six Products in the page", () => {

        cy.get('[data-test="inventory-list"]').should("be.visible")
        
        cy.get('[data-test="inventory-item"]').should("have.length", 6)

        cy.get('[data-test="inventory-item-name"]').each((productName) => {
            cy.wrap(productName).should("not.be.empty")
        })

        cy.get('[data-test="inventory-item-price"]').should("be.visible")

        cy.get('[data-test="inventory-item-price"]').should("have.length", 6)

        cy.get('[data-test="inventory-item-price"]').each((productPrice) => {
            cy.wrap(productPrice).should("not.be.empty")
        })

        cy.get('[data-test="inventory-item-desc"]').should("be.visible")

        cy.get('[data-test="inventory-item-desc"]').should("have.length", 6)

        cy.get('[data-test="inventory-item-desc"]').each((productDescription) => {
            cy.wrap(productDescription).should("not.be.empty")
        })

        cy.get("img.inventory_item_img").should("be.visible")

        cy.get("img.inventory_item_img").should("have.length", 6)

        cy.get("img.inventory_item_img").each((productImage) => {
            cy.wrap(productImage).should("be.visible")
            cy.wrap(productImage).should("have.attr", "alt")
        })

        cy.get(".btn_inventory").should("be.visible")

        cy.get(".btn_inventory").should("have.length", 6)

        cy.get(".btn_inventory").each((productCartButton) => {
            cy.wrap(productCartButton).should("have.text", 'Add to cart')
        })

    })

    it("Item Should Add to cart", () => {

        const expectedItems = 2

        cy.get('.inventory_list').find('.inventory_item').eq(0).contains('Add to cart').click()
        cy.get('.inventory_list').find('.inventory_item').eq(3).contains('Add to cart').click()

        cy.get('[data-test="shopping-cart-badge"]').should("have.text", expectedItems.toString())

    })

    it("Should open Cart Page When Clicked", () => {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.url().should("include", "cart")
    })

    it("Should Display Product Sort Dropdown with 4 Options", () => {

        cy.get('[data-test="product-sort-container"]').should("be.visible")

        cy.get('[data-test="product-sort-container"] option').should("have.length", 4)

    })

    it("Should sort the products from A to Z", ()=> {

        cy.get('[data-test="product-sort-container"]').select("az")

        cy.get('[data-test="product-sort-container"]').should("have.value", "az")

        cy.get('[data-test="inventory-item-name"]').each((productName) => {
            cy.wrap(productName).should("not.be.empty")

        }) 

    }) 

    it("Should sort the products from Z to A", () => {

        cy.get('[data-test="product-sort-container"]').select("za")

        cy.get('[data-test="product-sort-container"]').should("have.value", "za")

        cy.get('[data-test="product-sort-container"]').each((productName) => {
            cy.wrap(productName).should("not.be.empty")
        })
    })

    it("Should sort the products from Low to High", () => {

        cy.get('[data-test="product-sort-container"]').select("lohi")

        cy.get('[data-test="product-sort-container"]').should("have.value", "lohi")

        cy.get('[data-test="product-sort-container"]').each((productName) => {
            cy.wrap(productName).should("not.be.empty")
        })
    })

    it("Should sort the products from Low to High", () => {

        cy.get('[data-test="product-sort-container"]').select("lohi")

        cy.get('[data-test="product-sort-container"]').should("have.value", "lohi")

        cy.get('[data-test="product-sort-container"]').each((productName) => {
            cy.wrap(productName).should("not.be.empty")
        })

    })

    it("Should sort the products from High to Low", () => {

        cy.get('[data-test="product-sort-container"]').select("hilo")

        cy.get('[data-test="product-sort-container"]').should("have.value", "hilo")

        cy.get('[data-test="product-sort-container"]').each((productName) => {
            cy.wrap(productName).should("not.be.empty")
        })

    })

    it("Should open product details when product is clicked", () => {

        cy.get('[data-test="item-4-title-link"]').click()

        cy.url().should("include", "inventory-item.html")

        cy.get('[data-test="add-to-cart"]').click()

    })


})