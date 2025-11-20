import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (resetPage = true) => {
    if (resetPage) setPage(1);

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const query = {
        username,
        location,
        minRepos,
        page: resetPage ? 1 : page + 1,
      };

      const response = await fetchUserData(query);

      if (response?.items?.length > 0) {
        if (resetPage) {
          setResults(response.items);
        } else {
          setResults((prev) => [...prev, ...response.items]);
          setPage((prev) => prev + 1);
        }
      } else {
        setError("No users match your search criteria.");
      }
    } catch {
      setError("An error occurred while searching.");
    }

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(true);
  };

  return (
    <div className="max-w-xl mx-auto px-4 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border p-3 rounded-md"
            placeholder="e.g. octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            className="w-full border p-3 rounded-md"
            placeholder="e.g. Ghana, USA"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Minimum Repositories</label>
          <input
            type="number"
            className="w-full border p-3 rounded-md"
            placeholder="e.g. 10"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error Message */}
      {error && (
        <p className="text-center text-red-500 mt-4">
          Looks like we cant find the user
        </p>
      )}

      {/* Results */}
      <div className="mt-8 space-y-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 p-4 rounded-xl shadow flex items-center space-x-4"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="font-bold text-lg">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {results.length > 0 && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={() => handleSearch(false)}
            className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
