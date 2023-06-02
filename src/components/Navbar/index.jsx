import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const context = useContext( ShoppingCartContext )
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 text-sm font-light bg-black bg-opacity-90 shadow-lg shadow-[#6f2232]'>
            <ul className='flex items-center gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'
                        onClick={() => context.setSearchByCategory(null)}
                    >
                            Miguel&apos;s Store
                    </NavLink>
                </li>
                {
                    context.categories?.map((category, index) => (
                        <li key={index} className='text-sm hover:border-b border-white'>
                            <NavLink
                                to={ '/' + category }
                                onClick={() => context.setSearchByCategory(category)}
                            >
                                    { category }
                            </NavLink>
                        </li>
                    ))
                }
                
            </ul >
            <ul className="flex items-center gap-3">
                <li className='hover:border-b border-white'>
                    <NavLink
                        to='mailto:mab015@hotmail.com'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            mab015@mab015.com
                    </NavLink>
                </li>
                <li className='hover:border-b border-white'>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            My Orders
                    </NavLink>
                </li>
                <li className='hover:border-b border-white'>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            My Account
                    </NavLink>
                </li>
                <li className='hover:border-b border-white'>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            Sign out
                    </NavLink>
                </li>
                <li
                    className='flex items-center cursor-pointer'
                    onClick={() => context.openCheckoutSideMenu() }
                >
                    <ShoppingBagIcon className='h-6 w-6'></ShoppingBagIcon>
                    <div className='text-lg font-bold px-2'>
                        { context.cartProducts.length }
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar