import React from 'react'
import AuthLink from './AuthLink'

describe('<AuthLink />', () => {

    it('renders correct text and handles click', () => {
        const onClickSpy = cy.spy().as('onClickSpy')

        cy.mount(
            <AuthLink onClick={onClickSpy}>
                Login
            </AuthLink>
        )

        cy.get('button').should('exist')
        cy.get('button').should('have.text', 'Login')

        cy.get('button').click()

        cy.get('@onClickSpy').should('have.been.called')
    })

})