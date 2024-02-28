import PropTypes from 'prop-types'
import './ArtisansList.css'

function ArtisansListItem ({ artisan }) {
  const { name, description, slug, photo } = artisan.attributes
  const imgUrl = 'http://localhost:1337' + photo?.data?.attributes?.url
  return (
    <div className='card'>
      <a href={`/artisans/${slug}`} style={{ color: 'beige' }}>
        <img className='card-picture' alt={`${name} picture`} src={imgUrl} />
        <h3>{name}</h3>
        <p>{description}</p>
      </a>
    </div>

  )
}
ArtisansListItem.propTypes = {
  artisan: PropTypes.object
}
export default ArtisansListItem
