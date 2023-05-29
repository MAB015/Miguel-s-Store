import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // SHOPPING CART - INCREMENT QUANTITY
    const [counter, setCounter] = useState(0)

    // PRODUCT DETAIL: OPEN - CLOSE
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }

    // CHECKOUP SIDE MENU: OPEN - CLOSE
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true)
    }
    const closeCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(false)
    }

    // PRODUCT DETAIL - SHOW PRODUCT
    const [productToShow, setProductToShow] = useState({})

    // SHOPPING CART - ADD PRODUCT TO CART
    const [cartProducts, setCartProducts] = useState([])

    // SHOPPING CART - ORDER
    const [order, setOrder] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,

            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,

            productToShow,
            setProductToShow,

            cartProducts,
            setCartProducts,

            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,

            order,
            setOrder
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}