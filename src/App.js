import { useState } from "react";
import "./styles.css";

var ukTourism = {
  Temples: [
    {
      Name: "Kedarnath Temple",
      Description:
        "Standing magnificently at an altitude of 3,580mts and enveloped in the mighty Garhwal Himalayas, the Kedarnath Temple is one of the twelve Jyotirlingas of Lord Shiva.",
      Ratings: "Rating: 5/5"
    },
    {
      Name: "Badrinath Temple",
      Description:
        "It is part of one of the panch badri temples dedicated to Lord Vishnu. It is situated at an altitude of 3300mts.",
      Ratings: "Rating: 5/5"
    },
    {
      Name: "Tungnath Temple",
      Description:
        "Tungnath peacefully adorned on the Chandranath Parvat is the highest Shiva temple in the world and the highest Panch Kedar temple of Uttarakhand. Tungnath is perched at an elevation of 3, 680 metres above sea level and is considered to be more than 1,000 years old.",
      Ratings: "Rating: 5/5"
    },
    {
      Name: "Trijuginarayan Temple",
      Description:
        "Triyugi Narayan is the village where the wedding of Lord Shiva and Goddess Parvati took place. The marriage took place in front of Lord Vishnu therefore, TriyugiNarayan temple was built in its honour. It is believed that Lord Vishnu did all the arrangements for this celestial wedding and acted as Parvati's brother while Lord Brahma played the role of a priest.",
      Ratings: "Rating: 5/5"
    },
    {
      Name: "Rudranath Temple",
      Description:
        "Rudranath is a Hindu temple dedicated to god Shiva, It is a natural rock temple. This temple is located in Garhwal Himalayan mountains in Uttarakhand, India at 11,800 ft height above sea level.",
      Ratings: "Rating: 5/5"
    }
  ],
  Treks: [
    {
      Name: "Chandrashila Trek",
      Description:
        "It is situated at an elevation of 4000 mts. Chandrashila is the highest point of the mountain on which Chopta is Situated. Chandrashila trek is closed during winters because it becomes unreachable due to heavy snowfall.",
      Ratings: "Rating: 4.9/5"
    },
    {
      Name: "Kedarkantha Trek",
      Description:
        "Covered in sparkling snow during winters, Kedarkantha trek offers breathtaking view of the majestic Himalayan peaks. It is located in Sankri range in Uttarakhand district.",
      Ratings: "Rating: 4.8/5"
    },
    {
      Name: "Har Ki Dun",
      Description:
        "Har ki Dun offers virgin beauty and is one of the most beautiful places of India offering numerous trekking excursions. Morinda Tal / Maninda Tal is a popular spot in the region overlooking the majestic valley.",
      Ratings: "Rating: 4.5/5"
    },
    {
      Name: "Dayara Bugyal",
      Description:
        "Ideal trek for long weekends, Dayara Bugyal can be a perfect start for beginners. This region receives heavy snowfall during winters. The trek goes through open land and dense forest at different places ending up at the vast expanse of lush green meadow. The chilliness of the place enhancing the aroma and taste of the tea with beautiful view of forests in front of you.",
      Ratings: "Rating: 4.8/5"
    },
    {
      Name: "Milam Glacier",
      Description:
        "Milam Glacier Trek is a gateway to explore the mystiques of Uttarakhand. Milam Glacier is one of the remotest yet accessible glaciers of Uttarakhand.",
      Ratings: "Rating: 4.6/5"
    }
  ],
  NationalsParks: [
    {
      Name: "Corbett National Park",
      Description:
        "The Jim Corbett National Park is situated in the Nainital district of Uttarakhand and is the oldest national park in India which got established in 1936 by the name of Hailey National park",
      Ratings: "Rating: 4.7/5"
    },
    {
      Name: "Gangotri National Park",
      Description:
        "One of the famous high-altitude Wildlife Sanctuaries India, the Gangotri National Park is idyllically situated in the natural surroundings of Uttarkashi. The national park falls under the bio-geographical zone and proudly sits at an altitude of 1,800 meters to 7,083 meters above sea level. It is lavishly spread over an area of 2,390 square km. One of the major attractions is the Gaumukh glacier, the origin of river Ganges which is located inside the park.",
      Ratings: "Rating: 4.8/5"
    },
    {
      Name: "Kedarnath Wildlife Sanctuary",
      Description:
        "The Kedarnath Wildlife Sanctuary famously known as the Kedarnath Musk Deer Sanctuary  or Kedarnath Vanya Jeev Prabha is spread over Chamoli and Rudraprayag districts of Uttarakhand. ",
      Ratings: "Rating: 4.9/5"
    },
    {
      Name: "Nanda Devi National Park",
      Description:
        "The area is reputed as one of the most spectacular wilderness in the Himalayas and is dominated by 'Nanda Devi Peak' which is a natural monument and India's second-highest peak.",
      Ratings: "Rating: 4.6/5"
    },
    {
      Name: "Valley of Flowers",
      Description:
        "Bestowed with the rare and exotic Himalayan flora, the Valley of Flowers is a bouquet of nature peacefully snuggled in the West Himalayan region of Uttarakhand.",
      Ratings: "Rating: 4.9/5"
    }
  ],
  PicnicSpots: [
    {
      Name: "Auli",
      Description:
        "Auli is a Himalayan ski resort and hill station in the north Indian state of Uttarakhand. It’s surrounded by coniferous and oak forests, plus the Nanda Devi and Nar Parvat mountains",
      Ratings: "Rating: 4.9/5"
    },
    {
      Name: "Lansdowne",
      Description:
        "Lansdowne is a hill station in the north Indian state of Uttarakhand. It was founded as a military garrison under the British Raj, and the Garhwali Museum traces the history of the Garhwal Rifles regiment, which still trains in the town.",
      Ratings: "Rating: 4.9/5"
    },
    {
      Name: "Nainital",
      Description:
        "Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore",
      Ratings: "Rating: 4.4/5"
    },
    {
      Name: "Chakrata",
      Description:
        "Chakrata, with its laid-back yet pleasant ambiance, offers a sweeping view of the Yamuna Valley below. There are a few quaint tree-lined paths that visitors can explore. For those looking for snowy adventure, the Kharamba Peak awaits",
      Ratings: "Rating: 5/5"
    },
    {
      Name: "Rishikesh",
      Description:
        "Set against the backdrop of the Himalayas and with the pristine Ganga flowing through it, the ancient town of Rishikesh is one of the major tourist and pilgrimage hubs in northern India, where people from across the world arrive in search of peace",
      Ratings: "Rating: 5/5"
    }
  ]
};

var ukList = Object.keys(ukTourism);
export default function App() {
  var [outputPlace, setOutputPlace] = useState("Temples");

  function placeClickHandler(place) {
    setOutputPlace(place);
  }

  return (
    <div className="App">
      <h1 className="heading">Uttarakhand Tourism</h1>
      <p className="para">
        These are the places or spots that I would recommend you to Visit in
        Uttarakhand.
      </p>
      {ukList.map(function (place) {
        return (
          <button
            className="btnClick"
            onClick={() => placeClickHandler(place)}
            style={{ alignself: "left", cursor: "pointer" }}
          >
            {place}
          </button>
        );
      })}

      <div className="seePlaceList">
        {ukTourism[outputPlace].map((place) => {
          return (
            <ul className="display-list" key={place}>
              <li className="name"> {place.Name} </li>
              <li className="desc"> {place.Description} </li>
              <li className="ratings"> {place.Ratings} </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
