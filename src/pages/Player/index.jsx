import styles from './Player.module.css';

import { Banner } from 'components/Banner';
import { Title } from 'components/Title';

import { useParams } from 'react-router-dom';

import { NotFound } from 'pages/NotFound';
import { useEffect, useState } from 'react';

export function Player() {
    const { id } = useParams();

    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/O-Theu/cenetag-api/videos?id=${id}`)
            .then(res => res.json())
            .then(data => setVideo(...data));
    }, [id])

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner imagem="player" />
            <Title>
                <h1>Player</h1>
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