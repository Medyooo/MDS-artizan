import PropTypes from 'prop-types'
import './ProductList.css'
const ProductListItem = ({ product }) => {
  const { name, description, picture, price } = product.attributes
  const imgUrl = 'http://localhost:1337' + picture?.data[0]?.attributes?.url
  return (
    <div className='card' style={{ height: 'auto' }}>
      <img className='product-picture' alt={`${name} picture`} src={imgUrl} />
      <h3 className=''>{name}</h3>
      <p className=''>{description}</p>
      <div className='price'>
        <p>{price} $</p>
      </div>
    </div>

  )
}
ProductListItem.propTypes = {
  product: PropTypes.object
}

export default ProductListItem
