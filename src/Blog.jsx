import React, { useRef, useState,useEffect } from "react";

const Blog = (e) => {
  const [blogObject, setblogObject] = useState({
    blogtitle: "",
    blogContent: "",
  });
  const [blogList, setBlogList] = useState([]);

  const titleRef=useRef(null);

  useEffect(() => {
  
  titleRef.current.focus()
  
  }, [])
  

const handleFormSubmit = (e) => {
    e.preventDefault();  

    if (blogObject.blogtitle.trim() !== "" && blogObject.blogContent.trim() !== "") {
      setBlogList([{ blogtitle: blogObject.blogtitle,  blogContent: blogObject.blogContent }, ...blogList]);
      setblogObject({ blogtitle: "", blogContent: "" }); 
      titleRef.current.focus();
    }
  };

    // setblogObject({blogtitle:"",blogContent:""})

    function handleDelete(id){
      setBlogList(blogList.filter((blog,index)=>id!==index))

    }

  return (
    <>
      <form onSubmit={handleFormSubmit }>
        <label>enter your title</label>
        <input
          type="text"
          value={blogObject.blogtitle}
          ref={titleRef}
          onChange={(e) => setblogObject((prev) => ({ ...prev, blogtitle: e.target.value }))} 
        />
        <br></br>
        <label>enter your title</label>
        <input
          type="text"
          value={blogObject.blogContent}
          onChange={(e) => setblogObject((prev) => ({ ...prev, blogContent: e.target.value }))}
        />
        <button type="submit">Add</button>
      </form>
      {blogList.map((blog, id) => (
        <div key={id}>
          <p>{blog.blogtitle}</p>
          <p>{blog.blogContent}</p>
          <button onClick={()=>handleDelete(id)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Blog;
