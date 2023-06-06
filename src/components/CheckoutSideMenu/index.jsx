import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Navigate } from 'react-router-dom'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext( ShoppingCartContext )

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
            const orderToAdd = {
                date: '01.02.23',
                products: context.cartProducts,
                totalProducts: context.cartProducts.length,
                totalPrice: totalPrice(context.cartProducts)
            }
            context.setOrder([...context.order, orderToAdd])
            context.setCartProducts([])
            context.setCounter(0)
            context.closeCheckoutSideMenu()
            context.setSearchByTitle(null)
    }	

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-[#1A1A1D]`}
        > 
            <div className='flex justify-between items-center border-b-2 border-gray-600 w-full pl-6 py-4 mb-6'>
                <h2 className='font-medium text-4xl'>Detail</h2>
                <div
                    onClick={() => context.closeCheckoutSideMenu() }
                    className='cursor-pointer pr-6'
                >
                    <XMarkIcon className='h-6 w-6'></XMarkIcon>
                </div>
            </div>
            <div className='overflow-y-scroll pt-4 px-4 pr-2 flex-1'>
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
            <div className='px-4 relative bottom-0 w-full border-t-2 border-gray-600 py-4'>
                <p className='flex justify-between items-center mb-4'>
                    <span className='font-light'>Total price:</span>
                    <span className='font-medium text-2xl'>${ totalPrice( context.cartProducts ) }</span>
                </p>
                <Link to='my-orders/last'>
                    <button
                        className='w-full bg-black py-2 text-white rounded-lg'
                        onClick={ () => handleCheckout() }
                        disabled={ !context.cartProducts }
                    >
                            Checkout
                        </button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu