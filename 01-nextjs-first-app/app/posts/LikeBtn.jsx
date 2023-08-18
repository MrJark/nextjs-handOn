'use client'
// 👆🏽 para que se ejecute en el cliente
import { useState } from "react";

export function LikeBtn ({ id }) {
    const [liked, setLiked] = useState(false);

    return(
        <button onClick={() => {setLiked(!liked)}}>
            { liked ? '❤️' : '♡' }
        </button>
    )
};