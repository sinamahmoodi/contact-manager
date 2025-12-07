import React from 'react'
import SearchContact from './SearchContact';
import {Purple, Background} from '../helpers/color'

 const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm shadow-lg'
         style={{backgroundColor:Background}}
         dir='rtl'>
        <div className='container'>
            <div className='row w-100'>
                <div className='col'>
                    <div className="navbar-barnd "  style={{ color : 'white' }}>
                    <i className='fas fa-id-badge' style={{ color : Purple }} /> {" "}
                    Manage app {" "}
                    <span style={{ color : Purple }}> Contact </span>
                </div>
                </div>
                <div className="col">
                    <SearchContact/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;