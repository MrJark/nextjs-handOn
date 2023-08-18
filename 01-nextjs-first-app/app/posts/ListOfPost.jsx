import { LikeBtn } from "./LikeBtn";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )
};

export async function ListOfPost({id}) {
    const posts = await fetchPosts();

    return (
        <>
            {
                posts.map( post => (
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeBtn id={id}/>
                    </article>
                ))
            }
        </>
    )
}