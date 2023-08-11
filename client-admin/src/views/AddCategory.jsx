import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postCategory } from "../stores/actions/categoryAction"
import { useEffect } from "react"
import Swal from "sweetalert2"

export default function AddCategory() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({ name: '' })

    function handleAddCategory(event) {
        event.preventDefault()
        dispatch(postCategory(data))
            .then(() => {
                navigate('/categories')
                Swal.fire({
                    icon: 'success',
                    text: `Category with name ${data.name} has been added`
                  })
            })
            .catch((error) => {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                  })
            })
    }

    function changeValue(event) {
        let { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }

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
                <div className="card lg:card-side bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold mb-4">Add New Category</h2>
                        <form onSubmit={handleAddCategory}>
                            <input onChange={changeValue} name="name" type="text" placeholder="Category Name" className="input input-bordered input-info w-full mb-7" required/>
                            <div className="card-actions flex justify-end">
                                <button type="submit" className="btn btn-success text-black">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}