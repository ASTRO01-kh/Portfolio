function SwitchBtn() {
  return (
    <div className="Switchbtn">
      <div className="rectangle">
        <button className="all-btn"onClick={() => window.location.href=''}>All</button>
        <button className="projects-btn" onClick={() => window.location.href='/project'}>Projects</button>
      </div>
    </div>
  );
}
export default SwitchBtn;
