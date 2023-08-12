'use client'

import { StoreProvider } from '@/redux/StoreProvider'
// import { useDispatch, useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import Header from './Header'

export default function App({ children }) {


  return (
    <div>
      <div>
        <Header />
        <main className="p-4">
            <StoreProvider>
            {children}
            </StoreProvider>
            </main>
      </div>
      <CartSidebar />
    </div>
  )
}
