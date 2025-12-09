describe('Global Navigation Flow', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/artists').as('getArtists')

        cy.visit('/')
    })

    it('navigates through all sidebar links', () => {
        cy.contains('Introduction').should('be.visible')
        cy.url().should('eq', 'http://localhost:5173/')

        cy.get('nav').contains('Trailer').click()
        cy.url().should('include', '/trailer')
        cy.get('nav a[href="/trailer"]').should('exist')

        cy.get('nav').contains('Gameplay').click()
        cy.url().should('include', '/gameplay')

        cy.get('nav').contains('Artists').click()
        cy.wait('@getArtists')
        cy.url().should('include', '/artists')

        cy.get('nav').contains('Modding').click()
        cy.url().should('include', '/modding')
    })

    it('shows 404 page for non-existent routes', () => {
        cy.visit('/some-random-page-123', { failOnStatusCode: false })

        cy.contains('Page Not Found').should('be.visible')

        cy.contains('404').should('be.visible')
    })
})