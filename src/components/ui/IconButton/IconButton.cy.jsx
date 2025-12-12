import React from 'react'
import IconButton from './IconButton'
import icon from '../../../assets/menu/play_music_button.webp'

describe('<IconButton />', () => {
    it('renders icon and handles click', () => {
        const onClickSpy = cy.spy().as('clickSpy')

        cy.mount(
            <IconButton
                icon={icon}
                onClick={onClickSpy}
                className="test-class"
            />
        )

        cy.get('img').should('have.attr', 'src', icon)

        cy.get('button').click({ force: true })

        cy.get('@clickSpy').should('have.been.called')
    })
})