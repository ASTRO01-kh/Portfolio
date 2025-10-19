import MyImage from "/Users/s/Desktop/React apps/Portfolio/src/images/profile.PNG";
import SwitchBtn2 from "./SwitchBtn2";
import "../Styles/Topbar.css";

const roundedImageStyle = {
  borderRadius: "50%", // Creates a circular shape
};
function Topbar2() {
  return (
    <div className="modal">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="top-bar">
        <SwitchBtn2 />
        <img
        onClick={() => window.location.href='/about'}
          className="profilepic"
          src={MyImage} // Replace with the actual URL or path to your image
          alt="profile" // Provide a meaningful alt text for accessibility
          style={roundedImageStyle}
        />
        
        {/*
        <button className="btn-menu">
          <i class="fa-solid fa-bars fa-xl"></i>
        </button>
        */}

      </div>
    </div>
  );
}

export default Topbar2;
