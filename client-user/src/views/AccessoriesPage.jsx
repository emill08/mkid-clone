import AccessoriesCard from "../components/AccessoriesCard";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../stores/actions/productAction'

export default function ProductPage() {
    const [loading, setLoading] = useState(true)
    const { products } = useSelector((state) => {
        return state.productReducer
    })
    console.log(products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading === true) {
        return (
            <div className="flex justify-center">
                <div className="grid-rows-8">
                    <img
                        src="https://i.stack.imgur.com/hzk6C.gif"
                        alt="loading"
                        width="500"
                    />
                    <div className="container ml-16"></div>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div>
                    <h1 className="text-center text-6xl text-gray-400 mt-8">ACCSESORIES</h1>
                </div>

                {!loading && (
                    <AccessoriesCard products={products} />
                )}

            </>
        )
    }
}