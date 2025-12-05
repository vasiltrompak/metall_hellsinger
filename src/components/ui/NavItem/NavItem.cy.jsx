import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import NavItem from './NavItem'

describe('<NavItem />', () => {
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }

    it('renders with correct label and href', () => {
        const testLabel = 'Introduction'
        const testPath = '/'

        cy.mount(
            <MemoryRouter>
                <div style={centerStyle}>
                    <NavItem label={testLabel} path={testPath} />
                </div>
            </MemoryRouter>
        )

        cy.get('a').should('have.text', testLabel)
        cy.get('a').should('have.attr', 'href', testPath)
    })

    it('applies active style when path matches', () => {
        const path = '/menu'

        cy.mount(
            <MemoryRouter initialEntries={[path]}>
                <div style={centerStyle}>
                    <NavItem label="Menu" path={path} />
                </div>
            </MemoryRouter>
        )

        cy.get('a')
            .should('have.attr', 'class')
            .and('include', 'active')
    })

    it('does NOT apply active style when path differs', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/modding']}>
                <div style={centerStyle}>
                    <NavItem label="Trailer" path="/trailer" />
                </div>
            </MemoryRouter>
        )

        cy.get('a')
            .should('have.attr', 'class')
            .and('not.include', 'active')
    })

})