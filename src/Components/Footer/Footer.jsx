import React from 'react'
import Icons from './Icons'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="FooterContainer">
        <div className="social-icons">
         < Icons 
          twitterUrl="twitter.com"
          githubUrl={"github.com"}
          linkedinUrl={"linkedin.com"} 
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
