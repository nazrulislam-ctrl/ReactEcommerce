import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router.jsx'
import { CartProvider } from './context/CartCounter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render( 
<CartProvider>
<RouterProvider router={router}/>
</CartProvider>
)
