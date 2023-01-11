// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const ThumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <>
      <li className="item-container">
        <button
          type="button"
          className="thumbnail-button"
          onClick={onClickThumbnail}
        >
          <img
            src={thumbnailUrl}
            className={`${ThumbnailClassName}`}
            alt={thumbnailAltText}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
