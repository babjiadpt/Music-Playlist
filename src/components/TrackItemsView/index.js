import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItemsView = props => {
  const {trackItem, deleteTrackItem} = props
  const {id, imageUrl, name, genre, duration} = trackItem

  const onClickDeleteButton = () => {
    deleteTrackItem(id)
  }

  return (
    <li className="track-item-container">
      <div className="image-name-genre-container">
        <img src={imageUrl} className="image" alt=" track" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-icon"
          data-testid="delete"
          onClick={onClickDeleteButton}
        >
          <AiOutlineDelete className="icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackItemsView
