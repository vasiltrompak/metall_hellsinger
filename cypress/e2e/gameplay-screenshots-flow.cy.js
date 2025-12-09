describe('Gameplay & Screenshots Integration Flow', () => {
    it('tests video, navigates to screenshots, tests slider, and navigates back', () => {
        cy.visit('/gameplay')

        cy.get('img[alt="Play Trailer"]').should('be.visible').click()
        cy.get('iframe[src*="youtube"]', { timeout: 10000 }).should('be.visible')

        cy.get('img[src*="close_button.webp"]').should('be.visible').click()
        cy.get('iframe[src*="youtube"]').should('not.exist')

        cy.contains('button', 'Screenshots').click()
        cy.url().should('include', '/screenshots')

        cy.get('img[alt^="Screenshot"]').first().as('slideImg')
        cy.get('@slideImg').should('be.visible')

        cy.get('@slideImg').invoke('attr', 'src').then((initialSrc) => {
            cy.get('main button').eq(1).click()

            cy.wait(500)

            cy.get('@slideImg')
                .should('have.attr', 'src')
                .and('not.equal', initialSrc)
        })

        cy.contains('button', 'Gameplay').click()
        cy.url().should('include', '/gameplay')
    })
})