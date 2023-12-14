import { Header } from "@/Components/Header";
import { InfoPage } from "@/Components/InfoPage";
import { MainPage } from "@/Components/MainPage";
import { Skills } from "@/Components/Skills";
import { Upwork } from "@/Components/Upwork";
// import { Work } from "@/Components/Work";
// import { Footer } from "@/Components/Footer";
export default function App() {
  return (
    <div className="px-20">
      <Header />
      <MainPage />
      <InfoPage />
      <Skills />
      <Upwork />
      {/* <Work /> */}
      {/* <Footer /> */}
    </div>
  );
}
