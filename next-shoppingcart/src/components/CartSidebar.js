// import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'


export default function CartSidebar() {

  return (
    <div
      className="">
        <>
          <div className="p-2 flex flex-col items-center border-b border-b-gary-600">
            <div>subtotal</div>
            <div className="font-bold text-orange-700"></div>
            <div>
              <Link
                href="/cart"
                className="w-full text-center p-1  rounded-2xl border-2"
              >
                Go to cart
              </Link>
            </div>
            
              <div
                
                className="p-2 flex flex-col items-center border-b border-b-gary-600"
              >
                <Link
                  href={`/product/`}
                  className="flex items-center"
                >
                  <Image
                    width={50}
                    height={50}
                    className="p-1"
                  ></Image>
                </Link>
                <select
                
                >
                
                </select>
                <button
                  className="default-button mt-2"
                 >
                  Delete
                </button>
              </div>
           
          </div>
        </>
    
    </div>
  )
}
