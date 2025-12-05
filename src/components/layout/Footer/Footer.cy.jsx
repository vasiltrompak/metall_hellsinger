import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
    const wrapperStyle = {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0
    }

    it('renders both LogoReveal and Music buttons on "intro" page', () => {
        const onLogoSpy = cy.spy().as('onLogoSpy')
        const onMusicSpy = cy.spy().as('onMusicSpy')

        cy.mount(
            <div style={wrapperStyle}>
                <Footer
                    activePage="intro"
                    onLogoRevealClick={onLogoSpy}
                    isMusicPlaying={false}
                    onMusicToggle={onMusicSpy}
                />
            </div>
        )

        cy.get('button').should('have.length', 2)

        cy.get('img[src*="logo_reveal"]').should('be.visible')

        cy.get('img[src*="logo_reveal"]').click()
        cy.get('@onLogoSpy').should('have.been.called')

        cy.get('img[src*="play_music"]').should('be.visible')

        cy.get('img[src*="play_music"]').click()
        cy.get('@onMusicSpy').should('have.been.called')
    })

    it('renders ONLY Music button on other pages', () => {
        cy.mount(
            <div style={wrapperStyle}>
                <Footer
                    activePage="trailer" // Не "intro"
                    onLogoRevealClick={cy.spy()}
                    isMusicPlaying={false}
                    onMusicToggle={cy.spy()}
                />
            </div>
        )

        cy.get('button').should('have.length', 1)

        cy.get('img[src*="logo_reveal"]').should('not.exist')

        cy.get('img[src*="play_music"]').should('exist')
    })

    it('toggles music icon based on isMusicPlaying prop', () => {
        cy.mount(
            <div style={wrapperStyle}>
                <Footer
                    activePage="trailer"
                    isMusicPlaying={false}
                    onMusicToggle={cy.spy()}
                />
            </div>
        )
        cy.get('img[src*="play_music_button"]').should('have.attr', 'src')
            .and('not.include', '_on')

        cy.mount(
            <div style={wrapperStyle}>
                <Footer
                    activePage="trailer"
                    isMusicPlaying={true}
                    onMusicToggle={cy.spy()}
                />
            </div>
        )

        cy.get('img[src*="play_music_button"]').should('have.attr', 'src')
            .and('include', '_on')
    })

})