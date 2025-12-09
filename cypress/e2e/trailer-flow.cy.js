describe('Trailer Page Video & Navigation Flow', () => {
    it('plays video, closes it, navigates to VR mode and back', () => {
        cy.visit('/trailer')

        cy.get('img[alt="Play Trailer"]').should('be.visible').click()
        cy.get('iframe[src*="youtube"]').should('be.visible')

        cy.get('img[src*="close_button.webp"]')
            .should('be.visible')
            .click()

        cy.get('iframe[src*="youtube"]').should('not.exist')

        cy.contains('button', 'Trailer VR').click()

        cy.url().should('include', '/trailer-vr')

        cy.get('img[alt="Play Trailer"]').should('be.visible').click()

        cy.get('iframe[src*="youtube"]').should('be.visible')

        cy.get('img[src*="close_button.webp"]').click()
        cy.get('iframe[src*="youtube"]').should('not.exist')

        cy.go('back')

        cy.url().should('include', '/trailer')
        cy.url().should('not.include', '-vr')
    })
})