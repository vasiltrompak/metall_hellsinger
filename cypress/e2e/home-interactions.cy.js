describe('Home Page Interactions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('redirects to Auth page when clicking top-left shield icon', () => {
        cy.get('a[href="/auth"]').should('be.visible').click()

        cy.url().should('include', '/auth')
    })

    it('interacts with the bottom-left diamond button', () => {
        cy.get('footer button img').as('musicIcon')

        cy.get('@musicIcon')
            .should('have.attr', 'src')
            .and('include', 'play_music_button.webp')
            .and('not.include', '_on.webp')

        cy.get('footer button').click()

        cy.get('@musicIcon')
            .should('have.attr', 'src')
            .and('include', 'play_music_button_on.webp')
    })

    it('has a visible Call-to-Action button', () => {
        cy.get('img[alt="Buy Now"]')
            .parent('a')
            .should('be.visible')
            .and('have.attr', 'href', 'https://store.steampowered.com/app/1061910/Metal_Hellsinger/')
            .and('have.attr', 'target', '_blank')
    })
})