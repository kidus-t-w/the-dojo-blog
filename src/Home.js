import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [ blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem lorem...', author: 'mario', id:1},
        {title: 'Welcome party!', body: 'lorem lorem...', author: 'Yoshi', id:2},
        {title: 'Web dev top tips', body: 'lorem lorem...', author: 'mario', id:3},
    ])

    const [name, setName] = useState('Kidus')

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);
  return (
    <div className="home">
       {blogs && <BlogList blogs = {blogs} title = "All Blog" />}
       <button onClick={() => setName('leweji')}>change name</button>
       <p>{name}</p>
    </div>
  );
};

export default Home;
