import React, { useEffect, useState } from 'react'
import './Categories.css'
import axios from 'axios'
import { Watch } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

export default function Categories() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

  async function getCategories() {
    let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    setCategories(data.categories)
    setLoading(false)
  }

  useEffect(() => {
    getCategories()
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
    </div> : <div className='main-categories'>
      <div className="container">
        <div className="row g-5">
          {categories.map(category => <div key={category.idCategory} className='col-lg-3 '>
            <Link className='text-decoration-none text-light' to={`/meals/${category.strCategory}`}>
              <div className="meal position-relative">
                <img src={category.strCategoryThumb} className='w-100 rounded-2 ' alt="" />
                <div className="cap p-3">
                  <h2 className="h4 text-center fw-bold">{category.strCategory == "Pork" ? "Roasted" : category.strCategory}</h2>
                  <p className='lead fw-bold'>{category.strCategoryDescription.split(' ').slice(0,9).join(' ')}</p>
                </div>
              </div>
            </Link>
          </div>)}
        </div>
      </div>
    </div>}
  </>
}
