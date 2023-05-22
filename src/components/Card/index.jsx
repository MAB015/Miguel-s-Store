import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ( data ) => {

    const context = useContext( ShoppingCartContext )

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCounter( context.counter + 1 )
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderButton = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart) {
            return (
                <button
                    className='absolute bottom-0 right-0 flex justify-center items-center bg-black w-6 h-6 text-white  rounded-full m-2 p-1 shadow-sm shadow-black'
                >
                        <CheckIcon className='h-6 w-6'></CheckIcon>
                </button>
            )
        } else {
            return (
                <button
                    className='absolute bottom-0 right-0 flex justify-center items-center bg-white w-6 h-6 text-black  rounded-full m-2 p-1 border border-gray-400 shadow-sm shadow-black hover:bg-black hover:text-white'
                    onClick={(event) => addProductsToCart(event, data.data)}
                >
                        <PlusIcon className='h-6 w-6'></PlusIcon>
                </button>
            )
        }
    }

    const titleProduct = () => {
        if(data.data.title.length > 40) {
            return data.data.title.slice(0, 40) + ' ...'
        } else {
            return data.data.title
        }
    }

    return (
        <div
            className='bg-white cursor-pointer w-64 h-80 shadow-md shadow-black/20'
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-1 shadow-sm shadow-black'>{ data.data.category }</span>
                <img className='w-full h-full object-contain rounded-lg' src={ data.data.image } alt={ data.data.title } />
                { renderButton(data.data.id) }
            </figure>
            <p className='flex justify-between gap-3 px-3 items-center h-1/5'>
                <span className='text-sm font-light'>{ titleProduct() }</span>
                <span className='text-lg font-medium'>${ data.data.price }</span>
            </p>
        </div>
    )
}

export default Card