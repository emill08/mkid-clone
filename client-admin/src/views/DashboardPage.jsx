import TableProduct from "../components/TableProduct";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from "../stores/actions/productAction";

export default function DashboardPage() {

    const [loading, setLoading] = useState(true)
    const { products } = useSelector((state) => {
        return state.productReducer
    })
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
                <h1 className="text-center ml-6 mt-16 mb-10 text-3xl">Dashboard</h1>
                <div className="card-actions flex justify-end mb-5 mr-5">
                    <Link to="/add-product" className="btn btn-outline btn-secondary mr-28">Add Product</Link>
                </div>
                {!loading && (
                    <TableProduct products={products} />
                )}
            </>
        )
    }
}