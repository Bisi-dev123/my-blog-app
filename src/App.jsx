import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import BlogCard from "./components/BlogCard";
import axios from "axios";

function App() {
  const [data, setData] = useState(null)
  console.log(data, "This is my initial data")
  // setData("2")
  // console.log(data, "This is my data")
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
      setData(response.data)
    })
  },[])
  console.log(data, "This is my data")
  return (
    <>
      <div className="blog-container">
        <NavBar />
        <div className="blog-cards-wrapper" >
          {data?.map((item, index)=>(
            <div key={index} >
             <BlogCard item={item} /> 
            </div>
          ))}
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
}

export default App;
