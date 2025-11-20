import axios from "axios";

export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query
      )}&page=${page}&per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
