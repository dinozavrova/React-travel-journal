import globeimg from "../assets/traveling.png";

export default function Header() {
  return (
    <>
      <header className="header-inner">
        <img className="header-icon" src={globeimg} alt="global travel" />
        <h3 className="header-title">my travel journal.</h3>
      </header>
    </>
  );
}
