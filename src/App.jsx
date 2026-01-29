import Header from "./Components/Header";
import Entry from "./Components/Entry";

import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => (
    <Entry
      img={entry.img}
      country={entry.country}
      title={entry.title}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
      id={entry.id}
    />
  ));

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
