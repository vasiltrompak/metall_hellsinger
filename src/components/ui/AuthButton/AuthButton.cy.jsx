import React from 'react'
import AuthButton from './AuthButton'

describe('<AuthButton />', () => {
    it('renders with correct text and handles click', () => {
        cy.mount(<AuthButton type="button">Login</AuthButton>)

        cy.get('button').should('contain.text', 'Login')

        cy.get('button').should('be.visible')
    })
})