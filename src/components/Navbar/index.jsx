import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const context = useContext( ShoppingCartContext )
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-4'>
                <li className='font-semibold text-lg'>
                    <NavLink
                        to='/'>
                            Miguel&apos;s Store
                    </NavLink>
                </li>
                {
                    context.categories?.map((category, index) => (
                        <li key={index} className='text-sm'>
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
                <li className="text-black/60">
                    mab015@mab015.com
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                            Sign out
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>
                        { context.counter }
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar