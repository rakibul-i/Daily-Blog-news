import { useEffect, useState } from "react";

const useComments = () => {
    const [comments, setComments] = useState([]);

    const loadBlogs = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setComments(data);
    };

    useEffect(() => {
        loadBlogs("https://protected-eyrie-86885.herokuapp.com/comments");
    }, [comments]);

    return { comments };
};

export default useComments;