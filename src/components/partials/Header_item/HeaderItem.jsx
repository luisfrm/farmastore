import React from 'react'
import PropTypes from 'prop-types'

export default function HeaderItem ({name, url, text, subItems}) {
  if (subItems.length === 0) {
    return (
      <li className={`nav-item ${name}`}>
        <a className="nav-link" href={url}>{text}</a>
      </li>
    )
  }else {
    return (
      <li className={`dropdown nav-item dropdown ${name}`}>
        <div className="dropdown-toggle nav-link" type="button" id={name} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {text}
        </div>
        <div className="dropdown-menu" aria-labelledby={name}>
          {
            subItems.map((item)=>{
              return <a className={`dropdown-item ${item.name}`} href={item.url} key={item.name}>{item.text}</a>
            })
          }
        </div>
      </li>
    )
  }
  
}

HeaderItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subItems: PropTypes.array
}

HeaderItem.defaultProps = {
  subItems: []
}