import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between mx-16'>
        <div>
            <p>William La</p>
        </div>

        <div className=''>
            <ul className='flex'>
                <li className='mr-8'>
                    <a href='#hero'>Home</a>
                </li>
                <li className='mr-8'>
                    <a href='#about'>About Me</a>
                </li>
                <li className='mr-8'>
                    <a href='#skills'>Skills</a>
                </li>
                <li className='mr-8'>
                    <a href='#projects'>Projects</a>
                </li>
                <li className=''>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
