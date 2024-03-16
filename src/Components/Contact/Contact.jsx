import React from 'react'
import './Contact.css'

export default function Contact() {
  return <>
    <div className="main-page">
      <div className="container">
        <div className="w-75 mx-auto py-3">
          <form>
            <label htmlFor="name" className='mb-2'>User Name</label>
            <input type="text" id='name' name='name' className='mb-3' />

            <label htmlFor="age" className='mb-2'>User Age</label>
            <input type="number" id='age' name='age' className='mb-3' />

            <label htmlFor="email" className='mb-2'>User Email</label>
            <input type="email" id='email' name='email' className='mb-3' />

            <label htmlFor="desc" className='mb-2'>Description</label>
            <textarea type="text" id='desc' name='desc' className='mb-3'></textarea>
          </form>
        </div>
      </div>
    </div>
  </>
}
