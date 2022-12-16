import { useFavoriteContext } from 'context/Favorite';
import styles from './Card.module.css';

import IconeFavoritar from './favoritar.png';
import IconeDesFavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom';

export function Card({id, titulo, capa}) {
    const { favorite, addFavorite } = useFavoriteContext();
    const ehFavorite = favorite.some((fav) => fav.id === id);
    const icone = !ehFavorite ? IconeFavoritar : IconeDesFavoritar;

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img 
                    src={capa} 
                    alt={titulo} 
                    className={styles.capa} 
                    />
                    <h2>{titulo}</h2>
            </Link>
            <img 
                src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => addFavorite({ id, titulo, capa })}
            />
        </div>
    )
}