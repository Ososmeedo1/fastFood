import React, { useEffect, useState } from 'react'
import './Ingredients.css'
import axios from 'axios'
import { Watch } from 'react-loader-spinner'

export default function Ingredients() {


  

  return <>
    <div className="main-page">
      <div className="container">
        <div className="alert text-center text-light bg-danger">
          <h2 className='fs-5 fw-bold'>Oops! No Data here</h2>
        </div>
      </div>
    </div>
  </>
}
