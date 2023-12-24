import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [id]);

    return (
        <div className='container'>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <p>
                        <Link to="/posts" className="btn btn-primary my-2">back to all posts</Link>
                    </p>

                </div>
            ) : (
                <div className="spinner-border"
                     style={{ width: '3rem', height: '3rem' }}
                     role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    );
}



