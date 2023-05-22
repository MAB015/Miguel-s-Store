import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // SHOPPING CART - INCREMENT QUANTITY
    const [counter, setCounter] = useState(0)

    // OPEN - CLOSE
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => {
        setIsProductDetailOpen(true)
    }
    const closeProductDetail = () => {
        setIsProductDetailOpen(false)
    }

    // PRODUCT DETAIL - SHOW PRODUCT
    const [productToShow, setProductToShow] = useState({})


    return (
        <ShoppingCartContext.Provider value={{
            counter,
            setCounter,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}