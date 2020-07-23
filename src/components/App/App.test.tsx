import React from 'react'
import { matchers } from 'jest-emotion'
import { render } from '@testing-library/react'

import App from './App'

expect.extend(matchers)

describe('App', () => {
  it('Should render properly', () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })

  it('Show correct name from props', () => {
    const name = 'Noppanan Sinroungrong'

    const { findByText } = render(<App name={name} />)

    expect(findByText(name)).toBeTruthy()
  })

  it('Should display color on name correctly', () => {
    const { container } = render(<App />)
    const spanTag = container.querySelector('span')

    expect(spanTag).toHaveStyleRule('color', 'red')
  })
})
