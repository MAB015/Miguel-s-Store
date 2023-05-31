import { createContext, useState, useEffect } from 'react'

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

    // GET PRODUCTS
    const [items, setItems] = useState(null)
    
    // GET FILTERED PRODUCTS BY TITLE
    const [filteredItems, setFilteredItems] = useState(null)
    
    // SEARCH BY TITLE - GET PRODUCTS
    const [searchByTitle, setSearchByTitle] = useState(null)

    // GET CATEGORIES
    const [categories, setCategories] = useState(null)

    // SEARCH BY CATEGORY - GET PRODUCTS
    const [searchByCategory, setSearchByCategory] = useState(null)

    // PRODUCTS
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

    // CATEGORIES
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    useEffect(() => {
        if(searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory))
    }, [items, searchByCategory])

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
            setOrder,

            items,
            setItems,

            searchByTitle,
            setSearchByTitle,
            searchByCategory,
            setSearchByCategory,

            filteredItems,

            categories,
            setCategories

        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}