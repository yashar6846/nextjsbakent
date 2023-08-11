'use client'

// import { useDispatch, useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import Header from './Header'

export default function App({ children }) {


  return (
    <div>
      <div>
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <CartSidebar />
    </div>
  )
}
