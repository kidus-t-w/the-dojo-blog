import { useState } from "react";
import { useHistory } from "react-router-dom";
/**
 * Renders a form component for creating a new blog.
 *
 * @return {JSX.Element} The JSX element representing the form.
 */
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
/**
 * Handles the form submission for creating a new blog.
 *
 * @param {Event} e - The form submission event.
 * @return {Promise<void>} A promise that resolves when the blog is successfully added and the user is redirected to the home page.
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {title, body, author};
    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false);
      history.push('/')
    })
  }
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
};

export default Create;
