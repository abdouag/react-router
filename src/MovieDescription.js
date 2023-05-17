import { useParams } from 'react-router-dom';

function MovieDescription({ movies }) {
    const { title } = useParams();
    const movie = movies.find(movie => movie.title === title);

    if (!movie) {
        return <div>Film non trouvé</div>; 
    }

    
}

export default MovieDescription;
