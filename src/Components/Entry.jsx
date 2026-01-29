export default function Entry(props) {
  return (
    <>
      <div className="entry-inner">
        <img src={props.img.src} alt={props.img.alt} className="entry_img" />

        <div className="entry-info">
          <div className="entry-info_map">
            <img
              src="src\assets\location-pin.png"
              alt="local pin"
              className="marker"
            />
            <h4 className="entry-info_countryName">{props.country}</h4>
            <a href={props.googleMapsLink} className="entry-info_link">
              View on Google Maps
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
