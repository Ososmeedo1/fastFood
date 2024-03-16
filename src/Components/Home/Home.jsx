import React from 'react'
import './Home.css'

import img1 from '../../Assets/cart1.jpeg'
import img2 from '../../Assets/cart2.jpeg'
import img3 from '../../Assets/cart3.jpeg'
import img4 from '../../Assets/cart4.jpeg'
import burger from '../../Assets/BurgerKing.png'
import client1 from '../../Assets/client1.jpeg'
import client2 from '../../Assets/client2.jpeg'
import client3 from '../../Assets/client3.jpeg'
import client4 from '../../Assets/client4.jpeg'
import client5 from '../../Assets/client5.jpeg'
import 'animate.css';

export default function Home() {
  return <>
    <section className="home-page">
      <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className="container">
          <div className="row h-100">
            <div class="col-md-6 w-auto position-absolute top-50 translate-middle-y">
              <h6 className='fw-bold text-uppercase d-flex align-items-center'>fast food burgers</h6>
              <h1>The fastest food, for instant hunger.</h1>
              <p className='lead text-secondary w-50'>Some food has looked so awful that it is looked like something that the dog is brought home, yet after one mouthful I have been left eating my thoughts, my words & my food and gone back for seconds.</p>
              <button className='bgMain btn text-light btn-lg'>ORDER NOW</button>
            </div>
          </div>
        </div>
      </header>

      <section className={`section1 h-100 min-vh-50 p-5`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-3 animate__animated animate__fadeInUp">
              <div className="content">
                <img src={img1} className='w-100 rounded-top-3' alt="" />
                <div className="cap text-center py-2 bg-second rounded-bottom-3">
                  <h4 className='text-light'>Chicken Paell</h4>
                  <p className='lead  text-secondary fw-semibold fs-5'>We just don't make and sell food.Good food warms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  animate__animated animate__fadeInUp">
              <div className="content">
                <img src={img2} className='w-100 rounded-top-3' alt="" />
                <div className="cap text-center py-2 bg-second rounded-bottom-3">
                  <h4 className='text-light'>Chicken Paell</h4>
                  <p className='lead  text-secondary fw-semibold fs-5'>We just don't make and sell food.Good food warms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 animate__animated animate__fadeInUp">
              <div className="content">
                <img src={img3} className='w-100 rounded-top-3' alt="" />
                <div className="cap text-center py-2 bg-second rounded-bottom-3">
                  <h4 className='text-light'>Chicken Paell</h4>
                  <p className='lead  text-secondary fw-semibold fs-5'>We just don't make and sell food.Good food warms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  animate__animated animate__fadeInUp">
              <div className="content">
                <img src={img4} className='w-100 rounded-top-3' alt="" />
                <div className="cap text-center py-2 bg-second rounded-bottom-3">
                  <h4 className='text-light'>Chicken Paell</h4>
                  <p className='lead  text-secondary fw-semibold fs-5'>We just don't make and sell food.Good food warms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2 bg-second">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src={burger} className='w-75' alt="" />
            </div>
            <div className="col-sm-6 d-flex justify-content-center flex-column">
              <h2 className='fs-1 fw-bold text-light'>Burger King</h2>
              <p className='lead text-secondary fw-bold'>Together with Buffalo’s, Burger King has grown to become synonymous with burgers in the Egypt.</p>
              <p className='main-color fs-1 fw-bold'>$6</p>
              <button className='bgMain btn text-light w-md-25 btn-lg'>ORDER NOW</button>
            </div>
          </div>
        </div>
      </section>

      <section className={` section3 meals p-5`}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="image1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="active1">
                      <div className="title text-light p-4">
                        <h2>Espresso</h2>
                        <p>Espresso is one of the most popular drinks.</p>
                        <p className='fw-bold fs-3 main-color'>$2</p>
                        <button className='btn bgMain text-light'>Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="active2 d-flex justify-content-start">
                      <div className="title text-light p-4">
                        <h2>Primos Pizza</h2>
                        <p>Primos is one of the most popular pizzas.</p>
                        <p className='fw-bold fs-3 main-color'>$6</p>
                        <button className='btn bgMain text-light'>Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="active3 d-flex justify-content-start">
                      <div className="title text-light p-4">
                        <h2>Buffalo Burger</h2>
                        <p>Buffalo is one of the most popular Burgers.</p>
                        <p className='fw-bold fs-3 main-color'>$4</p>
                        <button className='btn bgMain text-light'>Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="active4 d-flex justify-content-start">
                      <div className="title text-light p-4">
                        <h2>Dairy Queen</h2>
                        <p>Dairy Queen is one of the biggest fast-food.</p>
                        <p className='fw-bold fs-3 main-color'>$4</p>
                        <button className='btn bgMain text-light'>Order Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section4 p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row  g-4">
                <div className="col-md-4">
                  <img src={client1} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={client2} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={client3} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={client3} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={client4} className='w-100' alt="" />
                </div>
                <div className="col-md-4">
                  <img src={client5} className='w-100' alt="" />
                </div>
              </div>


            </div>

            <div className="col-md-6">
              <div className="cap position-relative rounded-circle m-sm-3 mx-sm-auto">
                <div className="icon position-absolute bottom-0 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#F6762C" class="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                </div>
              </div>

              <div className="title text-center">
                <p className='w-50 mx-auto lead text-secondary'>Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>
                <h2>Osama El-Gamal</h2>
                <p className='text-uppercase lead text-secondary fw-bold'>Egyptian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content d-flex justify-content-center">
                <h2>Download Our Menu</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content d-flex justify-content-center">
                <button className='btn bgMain text-light btn-lg'>Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      


    </section>



  </>
}
