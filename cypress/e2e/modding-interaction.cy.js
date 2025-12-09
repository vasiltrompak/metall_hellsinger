describe("Modding Interactions", () => {
    it("check video play and close on Modding page", () => {
        cy.visit('/modding')

        cy.get('img[alt^="Metal Hellsinger Jazz Mod"]')
            .should('be.visible')
            .click()

        cy.get('iframe[src*="youtube"]', {timeout: 10000}).should('be.visible')

        cy.get('img[src*="close_button.webp"]')
            .should('be.visible')
            .click()
    })

    it("checks all external links and download buttons", () => {
        cy.visit('/modding')

        cy.get('img[alt^="Steam Logo"]')
            .closest('a')
            .should('have.attr', 'target', '_blank')
            .and('have.attr', 'href')
            .and('include', 'store.steampowered.com')

        cy.contains('a', 'FMOD.com')
            .should('be.visible')
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'href')

        cy.contains('a', 'MODDING PACKAGE')
            .should('be.visible')
            .and('have.attr', 'href')
            .and('include', '.zip')

        cy.contains('a', 'TUTORIAL PDF')
            .should('be.visible')
            .should('have.attr', 'target', '_blank')
            .and('have.attr', 'href')
            .and('include', '.pdf')
    })

    it("checks tutorial video modal", () => {
        cy.visit('/modding')

        cy.contains('button', 'TUTORIAL VIDEO')
            .should('be.visible')
            .click()

        cy.get('iframe[src*="youtube"]', {timeout: 10000}).should('be.visible')

        cy.get('img[src*="close_button.webp"]').click()
        cy.get('iframe[src*="youtube"]').should('not.exist')
    })
})