import { Suspense } from "react";
import { ListOfPost } from "./ListOfPost";


export default async function PostPage() {
   
    return (
        <Suspense fallback={<p>Loading content...</p>}>
            <ListOfPost/>
        </Suspense>
    )
}