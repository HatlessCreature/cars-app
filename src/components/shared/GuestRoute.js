import { Redirect, Route } from "react-router";


export default function GuestRoute({ children, ...props }) {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <Route {...props}>{!isAuthenticated ? children : <Redirect to="/cars" />}</Route>
    );
}