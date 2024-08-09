import React from 'react'
import './index.scss'

const HeaderComponent = () => {
  return (
    <div className='header'>
        <ul className='navList'>
            <span>Giới thiệu</span>
            <span>Năng lực<i className="fa-solid fa-caret-down"></i></span>
            <span>Lĩnh vực</span>
            <span>Liên hệ</span>
        </ul>
    </div>
  )
}

export default HeaderComponent