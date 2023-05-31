import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props

    let renderXMarkIcon
    if(handleDelete) {
        renderXMarkIcon = <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => {
                handleDelete( id )
            }}
        ></XMarkIcon>
    }

    return(
        <div className='flex justify-between items-center mb-8 gap-5'>
            <div className='flex items-center'>
                <figure className='w-20 h-20'>
                    <img 
                        className='w-full h-full rounded-lg object-contain'
                        src={ imageUrl }
                        alt={ title }
                    />
                </figure>
            </div>
            <p className='text-sm font-light'>{ title }</p>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{ price }</p>
                
                {
                    renderXMarkIcon
                }
            </div>
        </div>
    )
}

export default OrderCard