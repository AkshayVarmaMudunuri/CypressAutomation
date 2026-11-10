# Cypress Automation – SauceDemo

## Project Overview

This project contains end-to-end (E2E) automated tests for the [SauceDemo](https://www.saucedemo.com/) web application using Cypress and JavaScript.

The objective is to validate key e-commerce functionalities, including user authentication, product management, shopping cart operations and checkout workflows.

## Tech Stack

- **Automation Tool:** Cypress
- **Programming Language:** JavaScript
- **Testing Type:** End-to-End (E2E) Testing
- **Application Under Test:** SauceDemo
- **Version Control:** Git & GitHub

## Project Structure

```text
QA_Automation/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── product_page.cy.js
│   │   ├── cart.cy.js
│   │   └── checkout.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Test Coverage

### 1. Login Tests
- Successful login
- Invalid username and password
- Empty login fields
- Login error validation

### 2. Product Page Tests
- Product page visibility
- Product names, prices and descriptions
- Product images
- Product sorting
- Product details
- Add-to-cart functionality

### 3. Shopping Cart Tests
- Add and remove products
- Cart item count
- Product details and prices
- Continue shopping
- Checkout navigation

### 4. Checkout Tests
- Checkout page validation
- Required field validation
- Checkout overview
- Subtotal, tax and total verification
- Order completion

## Installation and Execution

Clone the repository:

```bash
git clone https://github.com/AkshayVarmaMudunuri/CypressAutomation.git
```

Navigate into the project:

```bash
cd CypressAutomation
```

Install dependencies:

```bash
npm install
```

Open Cypress:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Application Under Test

https://www.saucedemo.com/

## Author

Akshay Varma Mudunuri

GitHub: https://github.com/AkshayVarmaMudunuri