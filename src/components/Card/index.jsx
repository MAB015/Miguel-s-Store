import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ( data ) => {
    const context = useContext( ShoppingCartContext )

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60'
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/80 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ data.data.category }</span>
                <img className='w-full h-full object-cover rounded-lg' src={ data.data.image } alt={ data.data.title } />
                <button
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 text-black  rounded-full m-2 p-1 border border-gray-400 shadow-sm shadow-black hover:bg-black hover:text-white'
                    onClick={() => context.setCounter( context.counter + 1 )}
                >
                    <PlusIcon className='h-6 w-6'>ss</PlusIcon>
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{ data.data.title }</span>
                <span className='text-lg font-medium'>${ data.data.price }</span>
            </p>
        </div>
    )
}

export default Card