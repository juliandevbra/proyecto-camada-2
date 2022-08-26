import './BlogStyles.css'

const LikeButton = () => {
  return (
    <div>
        <p>¿Te gustó ésta noticia?</p>
        <button className='like-button'>Sí</button>
      <button className='unlike-button'>No</button>
    </div>
  )
}

export default LikeButton