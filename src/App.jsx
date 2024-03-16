import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Ingredients from './Components/Ingredients/Ingredients.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Meals from './Components/Meals/Meals.jsx'
import MealDetails from './Components/MealDetails/MealDetails.jsx'

export default function App() {
  
  let routers = createBrowserRouter([
    {
      path: '' , element: <Layout/> , children: [
        {index: true , element: <Home/>},
        {path: 'categories' , element: <Categories/>},
        {path: 'ingredients' , element: <Ingredients/>},
        {path: 'contact' , element: <Contact/>},
        {path: 'meals/:id' , element: <Meals/>},
        {path: 'mealdetails/:id' , element: <MealDetails/>},
      ]
    }
  ])
  
  
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
