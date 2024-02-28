import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/Api'
import ArtisanHeader from '../components/artisans/ArtisanHeader'
import ProductList from '../components/products/ProductList'

const ArtisanDetails = () => {
  const { artisanSlug } = useParams()

  const { response, error, isLoading } = useFetch(`http://localhost:1337/api/artisans?filter[slug][$eq]=${artisanSlug}&populate=*`)
  const { response: products, error: productsError, isLoading: productsLoading } = useFetch(`http://localhost:1337/api/products?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`)

  if (isLoading || productsLoading) return <h2>Chargement...</h2>

  if (error || productsError) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return response && (

    <div style={{ paddingTop: '150px' }}>
      <ArtisanHeader attributes={response[0]?.attributes} />
      {
        products
          ? (
            <ProductList products={products} />
            )
          : <p>Aucun produit trouvé</p>
     }
    </div>
  )
}

export default ArtisanDetails
