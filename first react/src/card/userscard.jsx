function UsersCard({ username, email, website }) {
  return (
    <div>
      <p>username: {username}</p>
      <p>email: {email}</p>
      <p>
        website: <a href="">{website}</a>
      </p>
    </div>
  );
}

export default UsersCard;
