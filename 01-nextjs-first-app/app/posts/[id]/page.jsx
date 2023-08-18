export default function Post( { params } ) {

    const { id } = params; // estos parámetros son los que puede recibir el post como argumentos y el id, es el nombre de la ruta que he puesto entre [] y el que pondrás en la id del browser

    

    return (
        <h1>Post con el id: {id}</h1>
    )
}