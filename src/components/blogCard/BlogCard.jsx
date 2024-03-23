import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {
  return (
    <div className="blog-card-wrapper">
      {/* =====Blog Image===== */}
      <div className="blog-image-wrapper">
        <img
          className="blog-image"
          src={item?.thumbnailUrl}
          alt="Fashion Image"
          width={200}
          height={150}
        />
      </div>

      {/* =======Card Title====== */}
      <div className="title-wrapper">
        <h3>{item?.title}</h3>
      </div>

      {/* =========Card Description======== */}
      <div className="description-wrapper">
        <p>
          description text will be here,description text will be
          here,description text will be here
        </p>
      </div>

      {/* ========Card Button======= */}
      <div>
        
        <Link to="/full-card" ><button className="card-button" >Read More</button></Link>
      </div>
    </div>
  );
};

export default BlogCard;
