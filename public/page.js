import { Header } from "@/components/header";
import { InfoPage } from "@/components/InfoPages";
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
