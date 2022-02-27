import './Loader.scss'
import React from 'react'

const Loader = () => {
  return (
    <div className="loading-icon has-text-centered">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader