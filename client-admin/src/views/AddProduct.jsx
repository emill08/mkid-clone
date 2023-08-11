import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postProduct } from "../stores/actions/productAction"
import { fetchCategories } from "../stores/actions/categoryAction"
import Swal from "sweetalert2"

export default function AddProduct() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({ CategoryId: null, name: '', price: null, description: '', mainImage: '', images: '', images2: '' })
    const { categories } = useSelector((state) => {
        return state.categoryReducer
    })

    useEffect(() => {
        dispatch(fetchCategories())
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    function handleAddProduct(event) {
        event.preventDefault()
        let newData = { ...data, images: [data.images, data.images2] }
        dispatch(postProduct(newData))
            .then(() => {
                navigate("/home")
                Swal.fire({
                    icon: 'success',
                    text: `Product with name ${data.name} has been added`,
                  })
            })
            .catch((err) => {
                console.log(err)
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

    return (
        <>
            <div className="flex justify-center">
                <div className="card lg:card-side bg-base-100 w-3/4">
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold mb-4 mt-16">Add New Product</h2>
                        <form onSubmit={handleAddProduct}>
                            <input onChange={changeValue} name="name" type="text" placeholder="Product Name" className="input input-bordered input-info w-full mb-7" />
                            <select defaultValue={""} onChange={changeValue} className="select select-bordered mb-7 w-full" name="CategoryId">
                                <option disabled value={""}>Select Category</option>
                                {
                                    categories.map((el) => {
                                        return <option value={el.id} key={el.id}>{el.name}</option>
                                    })
                                }
                            </select>
                            {/* <input type="text" placeholder="Category" className="input input-bordered input-info w-full mb-7" /> */}
                            <input onChange={changeValue} name="price" type="number" placeholder="Price" className="input input-bordered input-info w-full mb-7" />
                            <textarea onChange={changeValue} name="description" className="w-full mb-7 textarea textarea-secondary" placeholder="Description"></textarea>
                            <input onChange={changeValue} name="mainImage" type="text" placeholder="Main Image Url" className="input input-bordered input-info w-full mb-7" />
                            <input onChange={changeValue} name="images" type="text" placeholder="Detail Image Url" className="input input-bordered input-info w-full mb-7" />
                            <input onChange={changeValue} name="images2" type="text" placeholder="Detail Image Url" className="input input-bordered input-info w-full mb-7" />
                            <div className="card-actions flex justify-end">
                                <button type="submit" className="btn btn-success text-black">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}