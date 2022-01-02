import { useState, useEffect } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setBlogs(data.reverse());
  };
  useEffect(() => {
    loadBlogs("https://protected-eyrie-86885.herokuapp.com/blogs");
  }, [blogs]);
  return { blogs, setBlogs };
};

export default useBlogs;
