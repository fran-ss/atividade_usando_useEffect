import { useEffect, useState } from "react"
import "./style.css"
type Post = {
  id: number
  title: string
  bady: string
}
export default function App() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data)=> data.json())
      .then(response => setPosts(response))
      //.then(json => console.log(json))
    
    
  },[])

  return (
    <div id="container">
      {
        posts.map(post => (
          <div id="poste">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )) }
    </div>
  )
}