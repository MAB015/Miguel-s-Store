import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext( ShoppingCartContext )
    
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail overflow-y-scroll flex-col fixed right-0 border border-black rounded-lg bg-white pb-5`}
        > 
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div
                    onClick={() => context.closeProductDetail() }
                    className='cursor-pointer'
                >
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6 w-40 h-40'>
                <img
                    className='w-full h-full object-cover'
                    src={ context.productToShow.image }
                    alt={ context.productToShow.title }
                />
            </figure>
            <p className='flex flex-col px-6 pt-6'>
                <span className='font-medium text-2xl mb-2'>${ context.productToShow.price }</span>
                <span className='font-medium text-md mb-1'>{ context.productToShow.title }</span>
                <span className='font-light text-md'>{ context.productToShow.description }</span>
            </p>
            <p className='px-6 pt-3'>
                <span className='font-medium text-md mr-5'>Category:</span>
                <span className='font-light text-md'>{ context.productToShow.category}</span>
            </p>
        </aside>
    )
}

export default ProductDetail