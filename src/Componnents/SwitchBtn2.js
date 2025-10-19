function SwitchBtn2() {
    return (
      <div className="Switchbtn2">
        <div className="rectangle">
          <button className="all-btn2"onClick={() => window.location.href='/'}>All</button>
          <button className="projects-btn2" onClick={() => window.location.href='/project'}>Projects</button>
        </div>
      </div>
    );
  }
  export default SwitchBtn2;
  