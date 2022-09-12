import React from 'react'
import s from './Header.module.css'

export const Header=()=> {
  return (
    <header>
      <div>
        <span className={s.logo}>Store</span>
        <ul className={s.nav}>
          <li>Contacts</li>
          <li>About us</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className={s.presentation}>

      </div>
    </header>
  )
}
