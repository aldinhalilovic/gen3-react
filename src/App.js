import { useState } from "react";
import "./App.css";
import NewsCard from "./components/NewsCard/NewsCard";
// const news = [
//   {
//     id: 1,
//     lajkovi: 100,
//     title: "7 golova u Novom Pazaru",
//     description:
//       "U Novom Pazaru, na Gradskom Stadionu, utkamica izmedju Novog Pazara i Partizana se zavrsila rezultatom 3:4",
//     date: "22.10.2024",
//   },
//   {
//     id: 2,
//     lajkovi: 10,
//     title: "Venom III",
//     description:
//       "U Novom Pazaru, bila je premijera novog filma Venom III. Dosta ljudi se zalilo na decu koja su bila nevaspitana :)",
//     date: "24.10.2024",
//   },
//   {
//     id: 3,
//     lajkovi: 963,
//     title: "I dalje suncano u Novom Pazaru",
//     description:
//       "U Novom Pazaru, prognoza je ista kao pre 3 dana. Sunce sve do kraja oktobra.",
//     date: "22.10.2024",
//   },
//   {
//     id: 4,
//     lajkovi: 10,
//     title: "Samo odrasle osobe mogu da gledaju film Terrifer",
//     description:
//       "Kulturni Centar u Novom Pazaru zabranjuje deci mladjoj od 18 godina da prisustvuju filmu Terrifer iz nekog razloga :)",
//     date: "22.10.2024",
//   },
//   {
//     id: 5,
//     lajkovi: -37,
//     title: "Skandalozna izjava ministra privrede u Srbiji O.O",
//     description:
//       "Za 22 dinara mozete pregurati ceo dan. A gde to ima ?????????",
//     date: "22.09.2024",
//   },
// ];

function App() {
  /*
      STATE-> BROJ ILI STRING, PRVO PREDAVANJE

      const [broj, setBroj] = useState(0);
      const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 100);
      setBroj(randomNumber);
      };
    */

  /*
     STATE -> Objekat, promena osobine unutar objekta :) 
      const [user, setUser] = useState({
        ime: "Aldin",
        prezime: "Halilovic",
      });

      const promeniImeIPrezime = () =>
    // setUser((prev) => ({ ...prev, ime: "Maid" }));
    setUser((prev) => {
      return {
        ...prev,
        ime: "Maid",
      };
    });
    console.log(user);
    */

  // const [voce, setVoce] = useState([
  //   "Jabuka",
  //   "Jagoda",
  //   "Banana",
  //   "Kiwi",
  //   "Kruska",
  //   "Ananas",
  //   "Kokos",
  //   "Limun",
  //   "Tresnja",
  //   "Paradajz",
  // ]);

  // const dodajVoce = (nekistring) => {
  //   // setVoce((prev) => [...prev, "Visnja"]); => prvi deo zadatka :)

  //   const novoVoce = prompt("Unesi voce");

  //   if (!novoVoce) return;

  //   if (voce.find((vocka) => vocka.toLowerCase() === novoVoce.toLowerCase())) {
  //     alert("IMA VOCE");
  //   } else {
  //     setVoce((prev) => [...prev, novoVoce]);
  //     console.log("NEMA VOCE");
  //   }
  // };

  // const objekat = {
  //   ime: "ALdin",
  //   godine: 21,
  // };

  // const nekaDinamickaVrednost = "ime";

  // console.log(objekat[nekaDinamickaVrednost], "dinamicka vrednostttttt");
  // console.log(objekat.nekaDinamickaVrednost, "dinamicka vrednostttttt, dotttt");

  // console.log(objekat.ime, "dot notation .");
  // console.log(objekat["ime"], "bracket notation []");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  console.log(user, "USERRR");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, firstName: value }));
  };

  const primer = {
    ime: "", // input -> text
    prezime: "", // input -> text
    gender: "", // male || female, input -> radio
    age: "", // od 18 - 30, input -> select
    number: "", // input -> number,
    hobby: "", // input -> text
  };

  return (
    <div
      className="container"
      style={{ gap: 50, flexDirection: "column", fontSize: 32 }}
    >
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={(event) => handleInputChange(event)}
        placeholder="Enter your firstname"
      />
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={(event) => handleInputChange(event)}
        placeholder="Enter your lastname"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={(event) => handleInputChange(event)}
        placeholder="Enter your email"
      />
      {/* <div style={{ display: "flex", gap: 10 }}>
        <h1>{user.ime}</h1>
        <h1>{user.prezime}</h1>
      </div> */}
      {/* <ol>
        {voce.map((vocka) => (
          <li key={vocka}>{vocka}</li>
        ))}
      </ol>

      <button
        onClick={dodajVoce}
        // onClick={() => dodajVoce("neki string")}
        style={{
          padding: "5px 10px",
          border: "none",
          borderRadius: 12,
          outline: "none",
          backgroundColor: "lightblue",
          color: "black",
          fontSize: 24,
          cursor: "pointer",
        }}
        // onClick={promeniImeIPrezime}
      >
        Promeni ime
      </button> */}
      {/* {news.map((article, i) => (
        <NewsCard key={i} article={article} />
      ))} */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h1>{broj}</h1>

        <button
          style={{
            padding: "5px 10px",
            border: "none",
            borderRadius: 12,
            outline: "none",
            backgroundColor: "lightblue",
            color: "black",
            fontSize: 24,
            cursor: "pointer",
          }}
          // onClick={() => changeNumber()}
          onClick={generateRandomNumber}
        >
          Inkrementiraj
        </button>
      </div>

      <div
        style={{
          height: 300,
          width: 300,
          border: "2px solid black",
          backgroundColor: broj % 2 === 0 ? "beige" : "lightpink",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {broj % 2 === 0 ? <p>Broj je paran</p> : <p>Broj je neparan</p>}
      </div> */}
    </div>
  );
}

export default App;
