/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Header from './Header'

test('Renders the header component', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
