

const StarRating = ({ vote }) => {

  const star = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<i className={`bi bi-star${i < vote ? '-fill' : ''}`}></i>)
    }

    return stars;
  }

  return (
    <div className="text-warning ">{star()}</div>
  )
}

export default StarRating