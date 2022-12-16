import styles from './Player.module.css';

import { Banner } from 'components/Banner';
import { Title } from 'components/Title';

import { useParams } from 'react-router-dom';

import videos from '../../json/db.json';
import { NotFound } from 'pages/NotFound';

export function Player() {
    const { id } = useParams();

    const video = videos.find((video) => video.id === Number(id));

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>PLayer</h1>
            </Title>
            <section className={styles.container}>
                <iframe 
                    width="560" 
                    height="315" 
                    src={video.link}
                    title={video.titulo} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </section>
        </>
    )
}