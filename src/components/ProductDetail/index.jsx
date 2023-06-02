import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext( ShoppingCartContext )
    
    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail overflow-y-scroll flex-col fixed right-0 border border-black rounded-lg bg-[#1A1A1D] pb-5`}
        > 
            <div className='flex justify-between items-center border-b-2 border-gray-600 w-full pl-6 py-4 mb-6'>
                <h2 className='font-medium text-4xl'>Detail</h2>
                <div
                    onClick={() => context.closeProductDetail() }
                    className='cursor-pointer pr-6'
                >
                    <XMarkIcon className='h-6 w-6'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6 h-40'>
                <img
                    className='w-auto h-full  p-4 rounded-lg bg-white'
                    src={ context.productToShow.image }
                    alt={ context.productToShow.title }
                />
            </figure>
            <p className='flex flex-col px-6 pt-6 gap-4 mb-4'>
                <span className='font-medium text-2xl mb-2'>${ context.productToShow.price }</span>
                <span className='font-medium text-md'>{ context.productToShow.title }</span>
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