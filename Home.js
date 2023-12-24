import {Link, Outlet} from "react-router-dom";

export function Home() {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Hey You!</h1>
                    <p className="lead text-body-secondary">
                        <br />
                        <p>
                            I'm Chana, and this is my space to share thoughts, experiences,
                            and stories. Explore the blog posts to discover a variety of topics.
                        </p>
                        <p>
                            Thank you for visiting!
                            <br />
                            I hope you'll enjoy!
                        </p>
                    </p>
                    <p>
                        <Link to="/posts" className="btn btn-primary my-2">To all my posts</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}



