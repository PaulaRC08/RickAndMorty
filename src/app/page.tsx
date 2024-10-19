import MyBanner from "./components/Banner/banner";
import MyFooter from "./components/Footer/footer";
import ListCharacters from "./components/ListCharacters/list-characters";
import MyNavbar from "./components/Navbar/navbar";


export default function Home() {
  return (
    <div >
      <MyNavbar/>
      <MyBanner/>
      <div className="container">
        <ListCharacters/>
      </div>
      <MyFooter/>
    </div>
  );
}
