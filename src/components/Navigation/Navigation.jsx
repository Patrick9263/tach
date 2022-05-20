import React from 'react'
import './Navigation.scss'

function Navigation() {
  const sections = [
    'Home',
    'How to Invest',
    'About Us',
  ]

  return (
    <div className="navigation">
      {sections.map((name, index) => (
        <div className="section">
          <div className="divider">
            <p className="divider-index">
              {index < 10 ? `0${index + 1}` : index + 1}
            </p>
            <div className="hr-container">
              <hr />
              <p className="section-name">{name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Navigation
