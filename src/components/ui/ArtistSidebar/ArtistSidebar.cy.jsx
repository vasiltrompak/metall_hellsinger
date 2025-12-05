import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import ArtistSidebar from './ArtistSidebar'

import tatianaImgOn from '../../../../public/assets/artists/tatiana_shmayluk_button_1.webp'
import tatianaImgOff from '../../../../public/assets/artists/tatiana_shmayluk_button_2.webp'

import bjornImgOn from '../../../../public/assets/artists/bjorn_strid_button_1.webp'
import bjornImgOff from '../../../../public/assets/artists/bjorn_strid_button_2.webp'

describe('<ArtistSidebar />', () => {
    it('renders artists list correctly based on DB data', () => {

        const mockArtists = [
            {
                id: 'tatiana',
                name: 'Tatiana Shmaluk',
                btnOff: tatianaImgOn,
                btnOn: tatianaImgOff
            },
            {
                id: 'bjorn',
                name: 'Bjorn Strid',
                btnOff: bjornImgOn,
                btnOn: bjornImgOff
            }
        ]

        cy.intercept('GET', '**/artists/', {
            statusCode: 200,
            body: mockArtists
        }).as('getArtists')

        cy.mount(
            <MemoryRouter initialEntries={['/']}>
                <ArtistSidebar />
            </MemoryRouter>
        )

        cy.wait('@getArtists')

        cy.get('nav').should('exist')
        cy.get('a').should('have.length', 2)

        cy.get('a').first().should('have.attr', 'href', '/artists/tatiana')
    })
})