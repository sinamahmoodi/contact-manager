import React from 'react'

 const Navbar = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-sm shadow'>
        <div className='container'>
            <div className='row w-100'>
                <div className='col'>
                    <i className='fas fa-id-badge'/>
                    Manage app
                    <span style={{ color : "purple" }}> Contact </span>
                </div>
                <div className="col">
                    <div className="input-group mx-2 w-75" dir='ltr'>
                        <span 
                        className='input-group-text'
                        id='basic-addon1'
                        style={{ backgroundColor : "purple"}}
                        >
                            <i className='fas fa-search '/>
                        </span>
                         <input 
                         type="text"
                         dir='rtl' 
                         style={{backgroundColor:"gray" , borderColor:"purple"}}
                         className='form-control'
                         placeholder='Search Contacts'
                         aria-label='Search'
                         aria-describedby='basic-addon1'/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;