import '../Styles/Homeweoneitbtn.css';

function Homeweoneitbtn(props){
return <div className="Homeweoneitbtn">
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"/>

      <button className='Home-weoneit-btn'onClick={() =>window.open(props.url,'_blank')}>
      <i class={props.firsticon}></i>{props.btntext}<i class={props.secondicon}></i> <i class={props.url}></i>
      </button>
      </div>
}

export default Homeweoneitbtn;