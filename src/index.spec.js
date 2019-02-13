import { render, fireEvent, waitForElement } from 'react-testing-library'
import React from 'react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
