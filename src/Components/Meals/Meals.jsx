import React, { useEffect, useState } from 'react'
import './Meals.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Watch } from 'react-loader-spinner'
import { Link } from 'react-router-dom'


export default function Meals() {

  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)

  let { id } = useParams()

  async function getMeals() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    setDishes(data.meals)
    setLoading(false)
  }


  useEffect(() => {
    getMeals()
  }, [])


  return <>
    {loading ? <div className='loading'>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div> : <div className='main-meals'>
      <div className="container">
        <div className="row g-3">
          {dishes.map(dish => <div key={dish.idMeal} className="col-lg-2">
            <Link className="text-decoration-none text-light" to={`/mealdetails/${dish.idMeal}`}>
              <div className="meals position-relative">
                <img src={dish.strMealThumb} className="w-100" alt="" />
                <div className="cap">
                  <h2 className="h4">{dish.strMeal}</h2>
                </div>
              </div>
            </Link>
          </div>)}
        </div>
      </div>
    </div>}
  </>
}
