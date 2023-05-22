import { useState, useEffect } from "react"
import Layout from "../../components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            Home
            <div className='grid gap-10 grid-cols-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home
