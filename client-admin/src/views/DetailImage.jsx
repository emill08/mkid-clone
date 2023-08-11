import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getOneProduct } from "../stores/actions/productAction";
import { useParams } from "react-router-dom";

export default function DetailImage() {
    const [data, setData] = useState({ name: '', image1:'', image2: '' })
    const { id } = useParams();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getOneProduct(id))
            .then((perProduct) => {
                setData({ name: perProduct.name, image1: perProduct.Images[0].imageUrl, image2: perProduct.Images[1].imageUrl });
                console.log(perProduct.Images[0].imageUrl);
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
      <div className="flex justify-center">
        <div className="card w-96 bg-black mt-32 shadow-xl mr-4">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={data.image1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="justify-center card-title">{data.name}'s Detail Picture</h2>
          </div>
        </div>
        <div className="card w-96 bg-black mt-32 shadow-xl">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={data.image2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="justify-center card-title">{data.name}'s Detail Picture</h2>
          </div>
        </div>
      </div>
    );
  }
}