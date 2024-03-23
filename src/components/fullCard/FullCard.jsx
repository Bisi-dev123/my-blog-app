import NavBar from "../navBar/NavBar";
import "./FullCard.css";

const FullCard = () => {
  return (
    <div>
      <NavBar />
      <div className="fullblog-card-wrapper">
        {/* =====Blog Image===== */}
        <div className="blog-image-wrapper">
          <img
            className="blog-image"
            src="./src/assets/image1.svg"
            alt=""
            width={400}
            height={150}
          />
        </div>

        {/* =======Card Title====== */}
        <div>
          <h3>Title</h3>
        </div>

        {/* =========Card Description======== */}
        <div className="description-wrapper">
          <p>
            description text will be here,description text will be
            here,description text will be here.. description text will be here.
            <br />
            description text will be here.. description text will be here
            description text will be here,description text will be
            here,description text will be here.. description text will be here.
            <br />
            description text will be here.. description text will be here
            description text will be here,description text will be
            here,description text will be here.. description text will be here.
            <br />
            description text will be here.. description text will be here
            description text will be here,description text will be
            here,description text will be here.. description text will be here.
            <br />
            description text will be here.. description text will be here
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
