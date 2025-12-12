describe('Artists Page & Media Flow', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/artists').as('getArtists')
        cy.visit('/artists')
        cy.wait('@getArtists')
    })

    it('opens artist, plays video, switches to next artist via sidebar, plays video again, and closes', () => {
        cy.get('a[href="/artists/tatiana"]')
            .click()

        cy.get('img[alt^="Play Music"]')
            .click()

        cy.get('img[src*="close_button.webp"]')
            .first()
            .should('be.visible')
            .click()

        cy.get('a[href*="/artists/bjorn"]')
            .click()

        cy.get('img[alt^="Play Music"]')
            .click()

        cy.get('img[src*="close_button.webp"]').first()
            .should('be.visible')
            .click()

        cy.get('img[src*="close_button.webp"]')
            .should('be.visible')
            .click()
    })
})