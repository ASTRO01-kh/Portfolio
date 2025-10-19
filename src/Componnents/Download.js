import '../Styles/Homeweoneitbtn.css';

function Download(props){
return <div className="Homeweoneitbtn">
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"/>
    <a href="/Resume.pdf" download>
      <button className='Home-weoneit-btn'>
      <i class={props.firsticon}></i>{props.btntext}<i class={props.secondicon}></i> <i class={props.url}></i>
      </button></a>
      </div>
}

export default Download;