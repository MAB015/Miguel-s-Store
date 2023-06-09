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
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const deleteProductsFromCart = (event, id) => {
        event.stopPropagation()
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
        context.closeProductDetail()
        context.openCheckoutSideMenu()
    }

    const renderButton = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart) {
            return (
                <button
                    className='absolute bottom-0 right-0 flex justify-center items-center bg-black w-6 h-6 text-white  rounded-full m-2 p-1 shadow-sm shadow-black'
                    onClick={(event) => deleteProductsFromCart(event, id)}
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
            className=' cursor-pointer w-64 h-80 shadow-md shadow-black/20'
            onClick={() => showProduct(data.data)}
        >
            <figure className='bg-white relative p-4 w-full h-4/5 rounded-xl hover:p-0'>
                <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-1 shadow-sm shadow-black'>{ data.data.category }</span>
                <img className='w-full h-full object-contain rounded-lg' src={ data.data.image } alt={ data.data.title } />
                { renderButton(data.data.id) }
            </figure>
            <p className='flex justify-between gap-4 px-4 items-center h-1/5 border rounded-xl'>
                <span className='text-sm font-light'>{ titleProduct() }</span>
                <span className='text-lg font-medium'>${ data.data.price }</span>
            </p>
        </div>
    )
}

export default Card