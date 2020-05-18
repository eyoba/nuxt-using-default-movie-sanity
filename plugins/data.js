import sanityClient from '~/sanityClient'
import { addMinutes } from 'date-fns'

function isParentOf(movie, possibleParent) {
  if (possibleParent._id === movie._id) {
    return false
  }
  return (movie.parents || []).some(
    parent => parent._ref === possibleParent._id
  )
}

const attachMovies = (movie, allMovies) => {
  return {
    ...movie,
    children: allMovies.filter(otherMovie =>
      isParentOf(otherMovie, movie)
    )
  }
}

const query = `
{

"movies":  *[_type == "movie"] {
  _id,
  title,
  slug{    
    current
    },
  releaseDate,
  poster  
},
"people": *[_type == "person"] {
  _id,
  name,
  slug{
      current
    },
  image
}[0...4]
}
`;

export default ({ store }) => {
  return sanityClient.fetch(query).then(data => {
    const movies = data.movies.map(movie =>
      attachMovies(movie, data.movies)
    )
    data.movieTree = movies.filter(
      movie => (movie.parents || []).length === 0
    )
    store.commit("data", data)
  })
}
