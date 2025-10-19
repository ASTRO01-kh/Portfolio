import '../Styles/Cardbtn.css';

function Cardbtn(props){
return <div className="Cardbtn">
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"/>

      <button className='card-btn'>
      {props.btntext}<i class="fa-solid fa-arrow-right-long"></i>
      </button>
      </div>
}

export default Cardbtn;