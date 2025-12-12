import React from 'react'
import Loader from './Loader'

describe('<Loader />', () => {
    it('renders loading image with correct attributes', () => {
        const wrapperStyle = {
            height: '100vh',
            width: '100%',
            position: 'relative'
        }

        cy.mount(
            <div style={wrapperStyle}>
                <Loader />
            </div>
        )

        cy.get('img').should('be.visible')

        cy.get('img').should('have.attr', 'alt', 'Завантаження...')

        cy.get('img')
            .should('have.attr', 'src')
            .and('include', 'loading.webp')
    })

})