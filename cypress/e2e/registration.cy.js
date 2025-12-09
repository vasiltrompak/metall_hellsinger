describe('Authentication Flow', () => {
    beforeEach(() => {
        cy.visit('/auth')
    })

    it('switches to Register mode and creates a new account', () => {
        cy.get('form button').last().should('be.visible').click()
        cy.get('#confirmPassword').should('be.visible')

        const timestamp = Date.now()
        const userName = `Hellsinger`
        const email = `test_${timestamp}@metal.com`
        const password = 'SuperSecurePass123!'

        cy.get('#userName').type(userName)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#confirmPassword').type(password)

        cy.contains('button', 'Register')
            .should('not.be.disabled')
            .click()

        cy.url().should('not.include', '/auth')
    })
})