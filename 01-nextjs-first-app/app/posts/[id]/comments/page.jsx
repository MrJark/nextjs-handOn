import Link from 'next/link';

const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
        next: {
            revalidate: 60
        }
    })
        .then( res => res.json() )
}

export default async function Comments( { params } ) {
    const { id } = params; // estos parámetros son los que puede recibir el post como argumentos y el id, es el nombre de la ruta que he puesto entre [] y el que pondrás en la id del browser
    const comments = await fetchComments(id)
    
    return (
        <ul style={{ fontSize: '10px', backgroundColor: '#999'}}>
            {
                comments.map( comment => (
                    <li key={comment.id}>
                        <h4>{comment.name}</h4>
                        <p>{comment.body}</p>
                    </li>
                ))
            }
        </ul>
    )
}