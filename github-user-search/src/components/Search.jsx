import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === "") return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const result = await fetchUserData(username);

      if (!result) {
        setError("Looks like we can't find the user");
      } else {
        setUser(result);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", width: "260px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 15px" }}>
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Success State */}
      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>

          <a href={user.html_url} target="_blank">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
