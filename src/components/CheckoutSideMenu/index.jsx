import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext( ShoppingCartContext )

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
        > 
            <div className='flex justify-between items-center px-4 py-4 border-b-2 border-gray-500'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div
                    onClick={() => context.closeCheckoutSideMenu() }
                    className='cursor-pointer'
                >
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <div className='overflow-y-scroll pt-4 px-4 pr-2'>
                {
                    context.cartProducts.map( product => (
                        <OrderCard
                            key={ product.id }
                            id={ product.id }
                            title={ product.title }
                            imageUrl={ product.image }
                            price={ product.price }
                            handleDelete={ handleDelete }
                        />
                    ))
                }
            </div>
            <div className='py-4 px-4 relative bottom-0 bg-white w-full border-t-2 border-gray-500'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total price:</span>
                    <span className='font-medium text-2xl'>${ totalPrice( context.cartProducts ) }</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu