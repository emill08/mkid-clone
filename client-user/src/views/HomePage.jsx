import carousel1 from '../assets/carousel/1.png'
import carousel2 from '../assets/carousel/2.jpg'
import carousel3 from '../assets/carousel/3.jpg'
import carousel4 from '../assets/carousel/4.jpg'
import akko from '../assets/footer/akko.png'
import cherry from '../assets/footer/cherry.png'
import gmmk from '../assets/footer/gmmk.png'
import fantech from '../assets/footer/fantech.png'
import PopularCard from '../components/PopularCard'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../stores/actions/productAction'

export default function HomePage() {
    const [loading, setLoading] = useState(true)
    const { products } = useSelector((state) => {
        return state.productReducer
    })
    console.log(products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
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
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={carousel1} style={{ width: '1600px', height: '400px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={carousel2} style={{ width: '1600px', height: '400px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={carousel3} style={{ width: '1600px', height: '400px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={carousel4} style={{ width: '1600px', height: '400px' }} />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-gray-500 text-5xl mt-10 mb-10 font-mono hover:font-serif'>MOST POPULAR</h1>

                {!loading && (
                    <PopularCard products={products} />
                )}

                <div className="flex justify-center items-center">
                    <Link to="/products" className="btn btn-outline mt-5 mb-5 btn-center btn-secondary">SEE ALL PRODUCTS</Link>
                </div>
                <div className="primary-color-div w-full h-80 mt-5 bg-gray-200">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <img className="h-32 object-cover m-2" src={akko} alt="akko" />
                        <img className="h-32 object-cover m-2" src={fantech} alt="akko" />
                        <img className="h-32 object-cover m-2" src={gmmk} alt="akko" />
                        <img className="h-32 object-cover m-2" src={cherry} alt="akko" />
                    </div>
                </div>
                <div className="flex justify-center mt-20">
                    <div className="grid grid-cols-2 gap-20 ml-24 mr-24">
                        <Link to="/keyboard-page" className="hover:opacity-95">
                            <img src="https://cdn.vox-cdn.com/thumbor/GjsRFc4YwECWNYccEaxJZB0a7zU=/0x0:1989x1325/1400x1400/filters:focal(1009x781:1010x782)/cdn.vox-cdn.com/uploads/chorus_asset/file/22834530/jporter_210906_4744_0001.jpg" alt="Image 1" className="w-65 h-auto" />
                        </Link>
                        <Link to="/switch-page" className="hover:opacity-95">
                            <img src="https://cf.shopee.co.id/file/d7e3362e256b415e14d10d9dea7c037b" alt="Image 2" className="w-65 h-auto" />
                        </Link>
                        <Link to="/accessories-page" className="hover:opacity-95">
                            <img src="https://m.media-amazon.com/images/I/71EpZKJ-JAL.jpg" alt="Image 3" className="w-65 h-auto" />
                        </Link>
                        <Link to="/accessories-page" className="hover:opacity-95">
                            <img src="https://m.media-amazon.com/images/I/81dNBiMsvFL.jpg" alt="Image 4" className="w-65 h-auto" />
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}