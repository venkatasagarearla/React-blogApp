import { useState } from 'react'

import './App.css'

function App() {
  const [bloglist, setBlogList] = useState([

  ])
  const [blogtitle,setBlogTitle]=useState("")
  const [blogcontent,setBlogContent]=useState("")

  const handleTitleChange=(e)=>{
setBlogTitle(e.target.value)
  }
  const handleContentChange=(e)=>{
    setBlogContent(e.target.value)
      }

      const addtoList=()=>{
        if(blogtitle.trim()!=="" && blogcontent.trim()!==""){
          const newBlog={title:blogtitle,content:blogcontent};
          console.log("new blog is",newBlog)
          setBlogList([...bloglist,newBlog]);
          console.log(" new bloglist" ,[...bloglist,newBlog])
         
          setBlogTitle("");//clear title input
          setBlogContent("");//clear the input
        }
      }
       console.log("bloglist", bloglist);
  return (
    <>
      <div>
        <label>Enter title here</label>
        <input type='text' value={blogtitle} onChange={handleTitleChange}/>
        <hr></hr>
        <label>Enter content</label>
        <input type='text' value={blogcontent} onChange={handleContentChange}/>
        <br></br>
        <button onClick={addtoList}>Add</button>
        <br>
        </br>
        <br></br>
        <br></br>
        <h3>BlogList:</h3>
        <ul>

          {bloglist.map((blog,index)=>(
            <li key={index}>
            <h4>{blog.title}</h4>
            <h4>{blog.content}</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
