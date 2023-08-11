import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { postRegister } from "../stores/actions/userAction"
import Swal from 'sweetalert2'

export default function RegisterAdmin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState({email: '', password: '', address: '', phoneNumber: null})

    function doRegister(event) {
        event.preventDefault()
        dispatch(postRegister(data))
        .then(() => {
            navigate('/home')
            // kasih swall disini
            Swal.fire({
                icon: 'success',
                title: 'Thankyou',
                text: `The new admin has been successfully added`,
              })
        })
        .catch((error) => {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
              })
            // ini juga swall, errornya dari throw di action
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
            <div className="card lg:card-side bg-base-100">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Add New Admin</h2>
                    <form onSubmit={doRegister}>
                        <input onChange={changeValue} name="email" type="text" placeholder="Email" className="input input-bordered input-info w-full mb-7" />
                        <input onChange={changeValue} name="password" type="password" placeholder="Password" className="input input-bordered input-info w-full mb-7" />
                        <input onChange={changeValue} name="address" type="text" placeholder="Address" className="input input-bordered input-info w-full mb-7" />
                        <input onChange={changeValue} name="phoneNumber" type="number" placeholder="Phone Number" className="input input-bordered input-info w-full mb-7" />
                        <div className="card-actions flex justify-end">
                            <button  type="submit" className="btn btn-success text-black">Add Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}