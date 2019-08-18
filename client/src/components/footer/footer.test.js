/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './Footer'

test('Renders the footer component', () => {
  const component = renderer.create(
    <Footer />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
