import { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";
import axios from "axios";
import BlogCard from "../blogCard/BlogCard";

const LandingPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setData(response.data);
      });
  }, []);
  console.log(data, "This is my data");
  return (
    <div>
      <div className="blog-container">
        <NavBar />
        <div className="blog-cards-wrapper">
          {data?.map((item, index) => (
            <div key={index}>
              <BlogCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
