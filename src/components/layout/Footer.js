import React from 'react'

const Footer = () => {
  return (
    <footer className="footer has-background-white">
        <div className="content has-text-centered">
            <p>Copyright © RealState {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer