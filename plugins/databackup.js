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
"frontside":  *[_type == "frontside"] {
  _id,
  title,
  slug{    
    current
    },
    image  
},
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
}
}
`;



/*
function populateWithDates(program, from) {
  /!**
   * Calculates session time slot by looping trough all sessions
   * adding their duration to their start time.
   *!/
  const schedule = program.schedule.reduce((allSessions, session, index) => {
    const prevSession = allSessions[index - 1]
    const fromTime = prevSession
      ? new Date(addMinutes(prevSession.fromTime, prevSession.duration))
      : from
    return allSessions.concat([{ ...session, fromTime }])
  }, [])
  return { ...program, schedule }
}*/



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
