import React from 'react'
import VideoModal from './VideoModal'

import localVid from '../../../assets/introduction/logoreveal.mp4'

describe('<VideoModal />', () => {
    it('renders YouTube iframe correctly', () => {
        const testVideoId = 'PiD6_pPT8W0'
        cy.mount(<VideoModal show={true} onClose={cy.spy()} videoId={testVideoId} />)

        cy.get('iframe').should('be.visible')
        cy.get('iframe').should('have.attr', 'src').and('include', testVideoId)
    })

    it('renders local video correctly', () => {
        cy.mount(<VideoModal show={true} onClose={cy.spy()} localVideo={localVid} />)

        cy.get('video').should('be.visible')
        cy.get('video').should('have.attr', 'src', localVid)
    })

    it('handles closing interactions correctly', () => {
        const onCloseSpy = cy.spy().as('onCloseSpy')

        cy.mount(
            <VideoModal
                show={true}
                onClose={onCloseSpy}
                videoId="test"
            />
        )

        cy.get('img[src*="close"]').click()
        cy.get('@onCloseSpy').should('have.callCount', 1)

        cy.get('iframe').click({ force: true })
        cy.get('@onCloseSpy').should('have.callCount', 1)

        cy.get('div[class*="backdrop"]')
            .click(10, 10, { force: true })

        cy.get('@onCloseSpy').should('have.callCount', 2)
    })

    it('does not render when show is false', () => {
        cy.mount(<VideoModal show={false} onClose={cy.spy()} videoId="test" />)
        cy.get('iframe').should('not.exist')
    })

})