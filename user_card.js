const UserCard = (props) => {
    const {info} = props
    

    // console.log(info);
    return (
        <>
            <p>Name: { info?.name }</p>
            <p>username: { info?.login }</p>
            <p>Bio: { info?.bio } </p>
            <p>Location: { info?.location } </p>
            <p>Followers: { info?.followers }</p>
            <p>Following: { info?.following }</p>

        </>
    )
}
export default UserCard