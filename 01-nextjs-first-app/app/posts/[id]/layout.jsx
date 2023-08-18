import Link from 'next/link';
import { LikeBtn } from '../LikeBtn';

const fetchingPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
        next: {
            revalidate: 60
        }
    })
        .then( res => res.json() )
}

export default async function Post( { children, params } ) {
    const { id } = params; // estos parámetros son los que puede recibir el post como argumentos y el id, es el nombre de la ruta que he puesto entre [] y el que pondrás en la id del browser
    const post = await fetchingPost(id)
    
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <LikeBtn />
            <Link href={`/posts/${id}/comments`}>View Comments</Link>
            {children}
        </article>
    )
}