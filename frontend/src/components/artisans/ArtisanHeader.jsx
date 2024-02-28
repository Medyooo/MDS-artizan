import PropTypes from 'prop-types'
import './ArtisanHeader.css'

function ArtisanHeader ({ attributes }) {
  const imgUrl = 'http://localhost:1337' + attributes.photo?.data?.attributes?.url
  return (
    <div className='Artisan-Header'>
      <div className='left-side'>
        <img src={imgUrl} className='artisan-picture' alt='Artwork' />
      </div>
      <div className='right-side'>
        <h1>Artisan: {attributes.name}</h1>
        <p>{attributes.description}</p>
      </div>
    </div>
  )
}

ArtisanHeader.propTypes = {
  attributes: PropTypes.object
}

export default ArtisanHeader
