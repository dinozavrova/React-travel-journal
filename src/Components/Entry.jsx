import pinimg from "../assets/location-pin.png";

export default function Entry(props) {
  //console.log(props);
  return (
    <>
      <div className="entry-inner">
        <img src={props.img.src} alt={props.img.alt} className="entry_img" />

        <div className="entry-info">
          <div className="entry-info_map">
            <img src={pinimg} alt="local pin" className="marker" />
            <h4 className="entry-info_countryName">{props.country}</h4>
            <a
              href={props.googleMapsLink}
              className="entry-info_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              а на карте это где?
            </a>
          </div>
          <h1 className="entry-info_namePlace">{props.title}</h1>
          <h3 className="entry-info_dates">{props.dates}</h3>
          <p className="entry-info_text"> {props.text}</p>
        </div>
      </div>
    </>
  );
}
