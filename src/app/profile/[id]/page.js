export default function UserProfilePage({params}) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>User id is: {params.id}</p>
        </div>
    )
}

