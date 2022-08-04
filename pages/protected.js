import Card from "../components/Card/Card";

export async function getServerSideProps() {
    // We need to implement `/api/getUser` by creating
    // an endpoint in `pages/api` but for now let's just call it
    const response = await fetch(`http://localhost:3000/api/getUser`).then((response) =>
        response.json(),
    );

    const {user} = response;

    // If the `getUser` endpoint doesn't have a user in its response
    // then we will redirect to the login page
    // which means this page will only be viewable when `getUser` returns a user.

    if (user) {
        return {
            props: {
                user: user,
            }
        };
    } else
        // We'll pass the returned `user` to the page's React Component as a prop
        console.log(user);
    return {
        redirect: {destination: "/Signin", permanent: false},
    }
}

export default function Protected({user}) {
    return (
        <Card>
            <h1>Protected</h1>
        </Card>
    );
}