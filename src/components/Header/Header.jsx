import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header className="app-header">
      <h1>A tax-smart approach to holistic financial planning</h1>
      <p className="header-text">
        Build wealth for your clients with HS Vest&apos;s holistic approach to financial planning.
        As a tax professional, your unique insight into your clients&apos;
        financial situation allows you to uncover opportunities that other advisors often miss.
        Create tailored plans based on life goals, tax-based financial opportunities and
        unbiased investment solutions.
      </p>
      <p className="learn-more-link-container">
        <a
          className="learn-more-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          LEARN MORE &#8594;
        </a>
      </p>
    </header>
  )
}

Header.propTypes = {}

export default Header
