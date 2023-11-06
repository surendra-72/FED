import {useEffect, useState} from 'react';
import axios from 'axios';

export default function Exp13() {
    const [post,setPost] = useState([]);

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response)=> response.json())
        .then((result)=>setPost(result))
        .catch((err)=>console.log(err));
    },[]);
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>setPost(res.data))
    //     .catch((err)=>console.log(err));
    // },[]);

  return (
    <div style={{height:"100vh"}}>
        <table border="5" align="center">
            <tr><th>No.</th><th>Posts</th></tr>
                {post.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.title}</td>
                    </tr>
            ))}
        </table>
    </div>
  );
}
