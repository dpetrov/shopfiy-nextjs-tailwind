import React from 'react'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between main-h-screen">
      <Nav />
      <main>
        {children}
      </main>
    </div>
  )
}
