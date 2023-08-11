import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from "../stores/actions/userAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({ email: '', password: '' });

    function doLogin(event) {
        event.preventDefault();
        dispatch(postLogin(data))
            .then(() => {
                navigate('/home');
                Swal.fire({
                    icon: 'success',
                    title: 'Hi!',
                    text: `Welcome ${data.email}`,
                  })
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                  })
            });
    }

    function changeValue(event) {
        let { name, value } = event.target;
        setData({
            ...data,
            [name]: value
        });
    }

    return (
        <>
            <div className="mt-36 card lg:card-side bg-base-100">
                <div className="card-body" style={{ flex: 1 }}>
                    <h2 className="card-title text-2xl font-bold mb-4">Log In</h2>
                    <form onSubmit={doLogin}>
                        <input onChange={changeValue} name="email" type="text" placeholder="Email" className="input input-bordered input-info w-full mb-2" />
                        <input onChange={changeValue} name="password" type="password" placeholder="Password" className="input input-bordered input-info w-full mb-2" />
                        <div className="card-actions flex justify-end">
                            <button type="submit" className="btn btn-secondary">Sign In</button>
                        </div>
                    </form>
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        className="rounded-r-lg"
                        src="https://assetsio.reedpopcdn.com/digitalfoundry-best-mechanical-keyboard-for-gaming-typing-coding-7008-1641577436931.jpg"
                        alt="Album"
                    />
                </div>
            </div>
        </>
    );
}
