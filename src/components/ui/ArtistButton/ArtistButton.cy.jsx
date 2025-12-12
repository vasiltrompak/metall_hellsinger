import React from 'react'
import ArtistButton from './ArtistButton'
import { MemoryRouter } from 'react-router-dom'
import tatianaImg from '../../../../public/assets/artists/tatiana_shmayluk.webp'

describe('<ArtistButton />', () => {
    it('renders with correct link and background image', () => {
        const mockLink = '/artists/tatiana'

        cy.mount(
            <MemoryRouter>
                <ArtistButton to={mockLink} img={tatianaImg} />
            </MemoryRouter>
        )

        cy.get('a').should('exist')
            .and('have.attr', 'href', mockLink)
            .and('have.css', 'background-image')
            .and('include', 'tatiana')
    })
})