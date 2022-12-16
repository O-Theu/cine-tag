import { Banner } from 'components/Banner';
import { Card } from 'components/Card';
import { Title } from 'components/Title';
import { useFavoriteContext } from 'context/Favorite';
import styles from './Favorites.module.css';

export function Favorites () {
    const { favorite } = useFavoriteContext();

    return(
        <>
            <Banner imagem="favoritos"/>
            <Title>
                <h1>Meus favoritos</h1>
            </Title>
            <section className={styles.container}>
                {
                    favorite.map(fav => {
                        return <Card {...fav} key={fav.id}/>
                    })
                }
            </section>
        </>
    )
}