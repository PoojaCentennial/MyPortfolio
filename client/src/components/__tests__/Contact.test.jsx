import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '../Contact'
import '@testing-library/jest-dom'

describe('ContactForm', () => {
  beforeEach(() => {
    // clear mocks and localStorage
    global.fetch = undefined
    localStorage.clear()
  })

  it('renders contact form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('submits the form successfully and shows success message', async () => {
    const mockResponse = { ok: true, json: async () => ({ message: 'ok' }) }
    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Jane' } })
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello there' } })

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => expect(screen.getByText(/Thank you for your message/i)).toBeInTheDocument())

    expect(global.fetch).toHaveBeenCalled()
    expect(global.fetch.mock.calls[0][0]).toContain('/api/contacts')
    // request should be POST
    expect(global.fetch.mock.calls[0][1].method).toBe('POST')
  })

  it('shows error message when submission fails', async () => {
    const mockResponse = { ok: false }
    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Smith' } })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hi' } })

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => expect(screen.getByText(/Education submission failed/i)).toBeInTheDocument())
  })
})
