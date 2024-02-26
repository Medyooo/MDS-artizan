
import PropTypes from 'prop-types'
import ProductListItem from "./ProductListItem"


  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
}

const ProductList = ({products}) => {
    if (!products || products.length < 1) {
        return 'No data'}
      
  return (
    <div className='list-container'>
      <h2>Artisan Products :</h2>
      <div className='list'>
        {
          products.map(product => (
         <ProductListItem key={product.id} product={product} variants={item}/>
          ))
        }
      </div>
    </div>
  )
}
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
  }
  

export default ProductList
