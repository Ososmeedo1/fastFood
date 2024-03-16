import React from 'react'
import './Footer.css'
import logo from '../../Assets/fast-food-logo.svg'

export default function Footer() {
  return <>
    <div className="main-footer p-sm-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="content text-center">
              <img src={logo} alt="" />
              <p><i className='fas fa-envelope main-color me-1'></i> ososmeedo@gmail.com</p>
              <p><i className='fas fa-globe main-color me-2'></i> www.fastfood_usa.com</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="conten text-center">
              <p className='fs-4 fw-bold'>Our menu</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Breakfast</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Lunce</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Dinner</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="content text-center">
              <p className='fs-4 fw-bold'>Information</p>
              <p className='fs-6 lead text-secondary fw-semibold'>About us</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Testimonial</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Event</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="content text-center">
              <p className='fs-4 fw-bold'>Useful Links</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Services</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Support</p>
              <p className='fs-6 lead text-secondary fw-semibold'>Conditions</p>
            </div>
          </div>
          <div className="col-md-2  text-center">
            <p className='fs-4 fw-bold'>Social Handles</p>
            <p className='py-4'>
              <span><i className='fab fa-facebook text-primary me-2'></i></span>
              <span><i className='fab fa-twitter text-primary me-2'></i></span>
              <span><i className='fab fa-instagram text-danger me-2'></i></span>
              <span><i className='fab fa-linkedin text-primary-emphasis'></i></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}
