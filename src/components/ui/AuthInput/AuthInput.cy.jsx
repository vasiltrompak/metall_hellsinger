import React, { useState } from 'react'
import AuthInput from './AuthInput'

describe('<AuthInput />', () => {
    it('renders and accepts input', () => {

        const TestWrapper = () => {
            const [val, setVal] = useState('')
            return (
                <AuthInput
                    type="text"
                    name="email"
                    label="Email"
                    value={val}  // Прив'язуємо до стану
                    onChange={(e) => setVal(e.target.value)}
                />
            )
        }

        cy.mount(<TestWrapper />)

        cy.get('input').type('test@gmail.com')
        cy.get('input').should('have.value', 'test@gmail.com')
    })
})