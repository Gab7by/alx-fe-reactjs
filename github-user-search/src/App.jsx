import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchGitHubUser } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const result = await fetchGitHubUser(username);
    setUser(result);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>GitHub User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {user ? (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt="User Avatar"
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank">
            View GitHub Profile
          </a>
        </div>
      ) : (
        <p>Search for a GitHub user to see details...</p>
      )}
    </div>
  );
}

export default App;
