import { useState, useEffect } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setBlogs(data);
  };
  useEffect(() => {
    loadBlogs("https://protected-eyrie-86885.herokuapp.com/blogs");
  }, [blogs]);
  return { blogs };
};

export default useBlogs;