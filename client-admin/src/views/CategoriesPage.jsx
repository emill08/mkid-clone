import { Link } from "react-router-dom";
import TableCategory from "../components/TableCategory";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from "../stores/actions/categoryAction";

export default function CategoriesPage() {
    const [loading, setLoading] = useState(true)
    const { categories } = useSelector((state) => {
        return state.categoryReducer
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
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
                <h1 className="text-center ml-6 mt-10 mb-10 text-3xl">Categories</h1>
                <div className="card-actions flex justify-end mb-5 mr-48">
                    <Link to="/add-category" className="btn btn-outline btn-white justify-end">Add Category</Link>
                </div>
                {!loading && (
                    <TableCategory categories={categories} />
                )}
            </>
        )
    }
}