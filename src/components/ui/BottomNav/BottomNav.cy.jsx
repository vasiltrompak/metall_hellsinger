import React from 'react'
import BottomNav from './BottomNav'

describe('<BottomNav />', () => {

    it('renders label, icon and handles click', () => {
        const onClickSpy = cy.spy().as('onClickSpy')
        const testLabel = 'Next Page'

        cy.mount(
            <BottomNav
                label={testLabel}
                onClick={onClickSpy}
            />
        )

        cy.get('button').should('exist')

        cy.contains(testLabel).should('be.visible')

        cy.get('img')
            .should('be.visible')
            .and('have.attr', 'alt', testLabel)

        cy.get('button').click()

        cy.get('@onClickSpy').should('have.been.called')
    })

})