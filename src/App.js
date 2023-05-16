import Header from "./components/header";
import Section_1 from "./components/section_1";
import Section_2 from "./components/section_2";
import Section_3 from "./components/section_3";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section_1
        title="Enjoy on your TV."
        text="Watch in Smart TV, PlayStation, Xbox, Chromecast, Apple TV, BluRay Players & more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
      <Section_2
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        title="Download your shows to watch offline."
        text="Save your favorites easily and always have something to watch." />
      <Section_1
        title="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
      <Section_2 img="https://occ-0-294-3933.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
        title="Create profiles for kids. "
        text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." />
        <Section_3/>
        <Footer/>
    </div>
  );
}

export default App;
