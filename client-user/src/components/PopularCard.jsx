import { Link } from 'react-router-dom'

export default function PopularCard({ products }) {
    return (
        <>
          <div className='mt-16 mb-16 flex justify-center'>
            <div className='grid grid-cols-3 gap-8 w-3/4'>
              {products
                ?.filter((product) => product.description.includes("popular"))
                .map((product, index) => (
                  <div className='card bg-gray-300' key={index}>
                    <Link to={`/detail/${product.id}`}>
                      <img
                        className='rounded-t-lg card-image hover:scale-110'
                        src={product.mainImage}
                        alt='Shoes'
                        style={{ width: '100%' }}
                      />
                    </Link>
                    <div className='card-body'>
                      <h2 className='card-title'>{product.name}</h2>
                      <p>{product.description}</p>
                      <hr className='bg-black-800' />
                      <p>
                        {product.price.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      );
}