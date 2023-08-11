import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneCategory, putCategory } from "../stores/actions/categoryAction"
import Swal from 'sweetalert2'

export default function editCategory() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();
    const [data, setData] = useState({ name: '' })

    function handleEdit(event) {
        event.preventDefault()
        dispatch(putCategory(data, id))
            .then(() => {
                navigate('/categories')
                Swal.fire({
                    icon: 'success',
                    text: `Category with name ${data.name} has been updated`,
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
        dispatch(getOneCategory(id))
            .then((perCategory) => {
                setData({ name: perCategory.name });
                console.log(perCategory);
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
                    <h2 className="card-title text-2xl font-bold mb-4">Edit Category</h2>
                    <form onSubmit={handleEdit}>
                        <input onChange={changeValue} defaultValue={data.name} name="name" type="text" placeholder="Category Name" className="input input-bordered input-info w-full mb-7" />
                        <div className="card-actions flex justify-end">
                            <button type="submit" className="btn btn-success text-black">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}