// AddMovie.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="director" placeholder="Director" onChange={handleChange} />
        <select name="genre" onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
        </select>
        <input name="releaseYear" type="number" placeholder="Release Year" onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} />
        <input name="posterUrl" type="url" placeholder="Poster URL" onChange={handleChange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
