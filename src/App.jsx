import Header from "./Components/Header";
import Entry from "./Components/Entry";

import japanImg from "./assets/YAponiya.jpg";
import sydneyImg from "./assets/sydney-opera-house.jpg";
import norwayImg from "./assets/Geirangerfjord.jpg";

export default function App() {
  return (
    <>
      <Header />

      <Entry
        img={{ src: japanImg, alt: "Mount Fuji" }}
        countryName="JAPAN"
        link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        namePlace="Mount Fuji"
        dates="12 Jan, 2021 - 24 Jan, 2021"
        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

      <Entry
        img={{ src: sydneyImg, alt: "Sydney Opera House" }}
        countryName="AUSTRALIA"
        link="https://www.google.com/maps/place/Sydney+Opera+House/"
        namePlace="Sydney Opera House"
        dates="27 May, 2023 - 8 Jun, 2023"
        text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />

      <Entry
        img={{ src: norwayImg, alt: "Geirangerfjord" }}
        countryName="NORWAY"
        link="https://www.google.com/maps/place/Geirangerfjord/"
        namePlace="Geirangerfjord"
        dates="01 Oct, 2024 - 18 Nov, 2024"
        text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </>
  );
}
