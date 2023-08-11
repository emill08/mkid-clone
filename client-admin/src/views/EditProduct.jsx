import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCategories } from "../stores/actions/categoryAction"
import { putProduct, getOneProduct } from "../stores/actions/productAction"
import Swal from "sweetalert2"


export default function editProduct() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({ CategoryId: null, name: '', price: null, description: '' })
    const { categories } = useSelector((state) => {
        return state.categoryReducer
    })

    function handleEdit(event) {
        event.preventDefault()
        dispatch(putProduct(data, id))
            .then(() => {
                navigate('/home')
                Swal.fire({
                    icon: 'success',
                    text: `Product with name ${data.name} has been updated`,
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

    useEffect(() => {
        dispatch(fetchCategories())
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        dispatch(getOneProduct(id))
            .then((perProduct) => {
                setData({ CategoryId: perProduct.CategoryId, name: perProduct.name, price: perProduct.price, description: perProduct.description });
                console.log(perProduct);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function changeValue(event) {
        let { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <>
            <div className="card lg:card-side bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Edit Product</h2>
                    <form onSubmit={handleEdit}>
                        <input onChange={changeValue} name="name" defaultValue={data.name} type="text" placeholder="Product Name" className="input input-bordered input-info w-full mb-7" />
                        <select onChange={changeValue} defaultValue={data.CategoryId} className="select select-bordered mb-7 w-full" name="CategoryId">
                                <option disabled value={""}>Select Category</option>
                                {
                                    categories.map((el) => {
                                        return <option value={el.id} key={el.id}>{el.name}</option>
                                    })
                                }
                            </select>
                        {/* <input type="text" placeholder="Category" className="input input-bordered input-info w-full mb-7" /> */}
                        <input onChange={changeValue} name="price" defaultValue={data.price} type="number" placeholder="Price" className="input input-bordered input-info w-full mb-7" />
                        <textarea onChange={changeValue} name="description" defaultValue={data.description} className="w-full mb-7 textarea textarea-secondary" placeholder="Description"></textarea>
                        <div className="card-actions flex justify-end">
                            <button type="submit" className="btn btn-success text-black">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}