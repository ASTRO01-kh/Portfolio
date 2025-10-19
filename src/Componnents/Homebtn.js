import '../Styles/Homebtn.css';

function Homebtn(props){
return <div className="Homebtn">
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"/>

      <button className='Home-btn' onClick={() => window.location.href='/project'}>
      {props.btntext}<i id='home-btn-icon' class="fa-solid fa-angle-right"></i>
      </button>
      </div>
}

export default Homebtn;