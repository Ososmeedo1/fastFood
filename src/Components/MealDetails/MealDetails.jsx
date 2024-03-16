import React, { useEffect, useState } from 'react'
import './MealDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Watch } from 'react-loader-spinner'

export default function MealDetails() {

  let { id } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)


  async function getDetails(id) {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    setDetails(data.meals)
    console.log(details);
    setLoading(false);
  }

  useEffect(() => {
    getDetails(id)
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
    </div> : <div className="main-detail">
      <div className="container">
        <div className="row align-items-center">
          {details.map(detail => <>
            <div key={detail.idMeal} className='col-md-4'>
              <img src={detail.strMealThumb} className='w-100' alt="" />
            </div>
            <div className="col-md-8">
              <h2>Instructions</h2>
              <p>{detail.strInstructions}</p>
              <p className='fw-bold fs-2'>Area : {detail.strArea}</p>
              <p className='fw-bold fs-2'>Category : {detail.strCategory}</p>
            </div>
          </>

          )}
        </div>
      </div>
    </div>
    }
  </>
}
