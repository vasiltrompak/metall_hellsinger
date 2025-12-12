import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './RootLayout'

describe('<RootLayout />', () => {

    it('renders layout structure (Header, Footer, SideNav, Main)', () => {
        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<h1 data-testid="child-content">Child Page Content</h1>} />
                    </Route>
                </Routes>
            </MemoryRouter>
        )

        cy.get('header').should('exist') // Header
        cy.get('footer').should('exist') // Footer

        cy.get('nav').should('exist')    // SideNav

        cy.get('main').should('exist')
        cy.get('[data-testid="child-content"]')
            .should('be.visible')
            .and('have.text', 'Child Page Content')
    })

    it('toggles music state on footer click', () => {
        cy.spy(console, 'log').as('consoleLog')

        cy.mount(
            <MemoryRouter>
                <RootLayout />
            </MemoryRouter>
        )

        cy.get('footer img[src*="play_music"]').click()

        cy.get('@consoleLog').should('be.calledWith', 'Вмикаємо музику')

        cy.get('footer img[src*="play_music"]').click()

        cy.get('@consoleLog').should('be.calledWith', 'Зупиняємо музику')
    })

    it('handles modal state (initially closed)', () => {
        cy.mount(
            <MemoryRouter>
                <RootLayout />
            </MemoryRouter>
        )

        cy.get('iframe').should('not.exist')
        cy.get('video').should('not.exist')
    })

})