import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    { title: "Nemo e il mare" },
    { title: "Voci lontane" },
  ]);

  const addBlogPost = () => {
    console.log("ADDINGs");
    setBlogPosts([...blogPosts, { title: `Blog Number ${blogPosts.length + 1}` }]);
  };
  
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
