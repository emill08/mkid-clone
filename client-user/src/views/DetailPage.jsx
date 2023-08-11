import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getOneProduct } from "../stores/actions/productAction"
import { useParams, Link } from "react-router-dom";

export default function DetailPage() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({ CategoryId: null, name: '', price: null, description: '', mainImage: '', image1: '', image2: '', author: '', category: '' })
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneProduct(id))
            .then((perProduct) => {
                setData({ CategoryId: perProduct.CategoryId, price: perProduct.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).split(',')[0], author: perProduct.User.email, category: perProduct.Category.name, mainImage: perProduct.mainImage, description: perProduct.description, name: perProduct.name, image1: perProduct.Images[0].imageUrl, image2: perProduct.Images[1].imageUrl });
                console.log(perProduct.price);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                <div className="text-gray-700 body-font overflow-hidden bg-white">
                    <h1 className="text-center text-6xl text-neutral font-mono mt-10">Product Detail</h1>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <div className="carousel w-full rounded-lg">
                                <div id="slide1" className="carousel-item relative w-full">
                                    <img src={data.mainImage} style={{ width: '1600px', height: '400px' }} />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide4" className="btn btn-circle">❮</a>
                                        <a href="#slide2" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" className="carousel-item relative w-full">
                                    <img src={data.image1} style={{ width: '1600px', height: '400px' }} />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" className="btn btn-circle">❮</a>
                                        <a href="#slide3" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                                <div id="slide3" className="carousel-item relative w-full">
                                    <img src={data.image2} style={{ width: '1600px', height: '400px' }} />
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide2" className="btn btn-circle">❮</a>
                                        <a href="#slide4" className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
                        /> */}
                        <div className="flex justify-center mt-8">
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{data.name}</h1>
                                <div className="flex flex-col">
                                    <span className="title-font font-medium text-2xl text-gray-900">{data.price}</span>
                                    <span className="title-font font-medium text-md text-gray-900 mt-5">Author: {data.author}</span>
                                    <span className="title-font font-medium text-md text-gray-900 mt-5">Category: {data.category}</span>
                                </div>
                                <p className="leading-relaxed mt-5">
                                    <span className="font-bold">Description <br /></span>
                                    {data.description}
                                </p>

                                <div className="flex mt-10">
                                    <Link to="/products" className="rounded-lg flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600">
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}