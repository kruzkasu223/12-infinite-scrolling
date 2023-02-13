type CardProps = {
  name: string
  img: string
  rating: number
  date: string
  playtime: number
}

export const Card = ({ date, playtime, img, name, rating }: CardProps) => {
  return (
    <div className="card">
      <img src={img} alt="name" height={300} />
      <h2>{name}</h2>
      <h3>Ratings: {rating}/5</h3>
      <h3>Released on: {date}</h3>
      <h3>Play Time: {playtime} Hours</h3>
    </div>
  )
}
