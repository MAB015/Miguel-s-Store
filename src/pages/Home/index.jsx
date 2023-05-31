import { useContext } from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
    const context = useContext(ShoppingCartContext)

    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

    const renderView = () => {
        if (context.searchByTitle?.length > 0) {
            if(context.filteredItems?.length > 0){
                return (
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            }else{
                return (
                    <div className="text-center">
                        <p className="text-3xl font-bold text-gray-800">
                            No results found
                        </p>
                    </div>
                )
            }
        } else if (index.length > 0) {
            if(context.categories?.length > 0){
                return (
                    context.filteredItems?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                )
            }
        } else {
            return (
                context.items?.map(item => (
                    <Card key={item.id} data={item} />
                ))
            )
        }
    }

    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-4'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input
                type='text'
                placeholder='Search a product'
                className='rounded-lg border shadow-md shadow-gray-400 w-80 p-4 mb-8 focus:outline-none'
                onChange={(e) => context.setSearchByTitle(e.target.value)}
            />
            <div className='grid gap-10 grid-cols-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                { renderView() }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home
