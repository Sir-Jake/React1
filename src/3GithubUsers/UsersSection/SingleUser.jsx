function SingleUser() {
  const user = {
    "login": "technoweenie",
    "id": 21,
    "node_id": "MDQ6VXNlcjIx",
    "avatar_url": "https://avatars.githubusercontent.com/u/21?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/technoweenie",
    "html_url": "https://github.com/technoweenie",
    "followers_url": "https://api.github.com/users/technoweenie/followers",
    "following_url": "https://api.github.com/users/technoweenie/following{/other_user}",
    "gists_url": "https://api.github.com/users/technoweenie/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/technoweenie/subscriptions",
    "organizations_url": "https://api.github.com/users/technoweenie/orgs",
    "repos_url": "https://api.github.com/users/technoweenie/repos",
    "events_url": "https://api.github.com/users/technoweenie/events{/privacy}",
    "received_events_url": "https://api.github.com/users/technoweenie/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  };

console.log(user.avatar_url);
console.log(user.login);
  return (
    <div>
      <h1>My name is {user.login}</h1>
      <img src={user.avatar_url} />
      <ul>
        <li>
            Name <b>{user.login}</b>
        </li>
        <li>
            URL <b>{user.url}</b>
        </li>
      </ul>
    </div>
  );
}
export default SingleUser;
