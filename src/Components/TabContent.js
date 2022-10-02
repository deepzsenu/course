import React from 'react'

import Course from './tabContentdata'

const TabContent = () => {
  let devider = {
    
    color:"#285746",
  }
  let mainDiv = {
    marginLeft:"15%",
    marginRight:"15%",
  }

  return (
    <>
    <div style = {mainDiv}>
      <div>
      <>
      <nav style={devider} aria-label="breadcrumb">
          <ol  className="breadcrumb">
            <li  className="breadcrumb-item" style={devider}>All Courses</li>
            <li  style = {devider} className="breadcrumb-item active" aria-current="page">Introduction to Machine Learning</li>
          </ol>
      </nav>
      </>

      </div>
      <div>
      <Course/>
      </div>
      <div>

      </div>
    </div>
    </>
  )
}

export default TabContent
