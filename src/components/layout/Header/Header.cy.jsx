import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import Header from './Header'

describe('<Header />', () => {
    const wrapperStyle = {
        padding: '20px',
        width: '100%'
    }

    it('renders account button on home page ("/")', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <div style={wrapperStyle}>
                    <Header/>
                </div>
            </MemoryRouter>
        )

        cy.get('a').should('exist')
        cy.get('a').should('have.attr', 'href', '/auth')

        cy.get('img[src*="account"]').should('be.visible')
    })

    it('does NOT render account button on other pages', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/menu']}>
                <div style={wrapperStyle}>
                    <Header/>
                </div>
            </MemoryRouter>
        )

        cy.get('a').should('not.exist')
        cy.get('img[src*="account"]').should('not.exist')
    })
})