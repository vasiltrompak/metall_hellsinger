import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import SideNav from './SideNav'

describe('<SideNav />', () => {
    const expectedLinks = [
        { name: 'Introduction', path: '/' },
        { name: 'Trailer', path: '/trailer' },
        { name: 'Gameplay', path: '/gameplay' },
        { name: 'Artists', path: '/artists' },
        { name: 'Modding', path: '/modding' },
    ]

    it('renders all navigation items correctly', () => {
        cy.mount(
            <MemoryRouter>
                <SideNav />
            </MemoryRouter>
        )

        cy.get('nav.sideNav').should('exist')

        cy.get('a').should('have.length', expectedLinks.length)

        expectedLinks.forEach(item => {
            cy.contains('a', item.name)
                .should('have.attr', 'href', item.path)
        })
    })

})