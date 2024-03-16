import "./FullCard.css";

const FullCard = () => {
    return (
      <div className="fullblog-card-wrapper" >
          {/* =====Blog Image===== */}
        <div className="blog-image-wrapper" >
          <img className="blog-image" src="./src/assets/image1.svg" alt="" width={200} height={150}/>
        </div>
  
          {/* =======Card Title====== */}
        <div>
          <h3>Title</h3>
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
          <button className="card-button" >Read More</button>
        </div>
      </div>
    );
  };
  
  export default FullCard;