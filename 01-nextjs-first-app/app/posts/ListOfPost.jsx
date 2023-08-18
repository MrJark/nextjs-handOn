import Link from "next/link";
import { LikeBtn } from "./LikeBtn";

const fetchPosts = () => {
    // return fetch('https://jsonplaceholder.typicode.com/posts') // forma estática ya que no volvería a renderizar la página
    // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'}) // server side
    return fetch('https://jsonplaceholder.typicode.com/posts', { 
        next: {
            revalidate: 60
        }
    }) // incremental static generation. Esto queire decir que cada vez que pase el tiempo, 60s en este caso, se hará una request al servidor para validar si sigue igual o se han creado nuevos posts. Esta es la recomendada si no estás al 100% seguro de que tu pag será estática
        .then( res => res.json() )
};

export async function ListOfPost() {
    const posts = await fetchPosts();

    return (
        <>
            {
                // el .slice() sirve para decirle que tanto elementos quiero recuperar
                posts.slice(0, 8).map( post => (
                    <article key={post.id}>
                        <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <LikeBtn id={post.id}/>
                        </Link>
                    </article>
                ))
            }
        </>
    )
}