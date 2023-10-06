import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <p className="text-xl font-bold text-center mt-10">{error.statusText || error.message}</p>
            {
                error.status === 404 && <div className="text-center mt-8">
                    <p className="text-xl font-bold mb-4">Page Not Found</p>
                    <Link to="/" className="btn btn-secondary">Go Back to Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;