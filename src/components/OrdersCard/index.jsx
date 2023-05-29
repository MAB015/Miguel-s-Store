import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return(
        <div className='flex justify-between items-center mb-8 gap-5  w-80 p-4 rounded-lg shadow-md shadow-gray-400 cursor-pointer'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <p className='flex items-center gap-2'>
                        <CalendarDaysIcon className='h-4 w-4 text-black'/>
                        <span className='font-light'>01.02.23</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <ShoppingBagIcon className='h-4 w-4 text-black'/>
                        <span className='font-light'>{ totalProducts } articles</span>
                    </p>
                </div>
                <p className='flex items-center gap-4'>
                    <span className='font-medium text-2xl'>${ totalPrice }</span>
                    <ChevronRightIcon className='h-6 w-6 text-black'/>
                </p>
            </div>
        </div>
    )
}

export default OrdersCard