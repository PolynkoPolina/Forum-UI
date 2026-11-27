interface ProfileProps {
    email: string;
}

function Profile({ email }: ProfileProps){
    return (
        <div className="profile">
            <h2>My profile:</h2>
            <h3>{email}</h3>
        </div>
    )
}

export default Profile