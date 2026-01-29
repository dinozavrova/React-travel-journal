import globeimg from "../assets/traveling.png";

export default function Header() {
  return (
    <>
      <header className="header-inner">
        <img className="header-icon" src={globeimg} alt="global travel" />
        <h3 className="header-title">а где я была вообще?</h3>
      </header>
    </>
  );
}
