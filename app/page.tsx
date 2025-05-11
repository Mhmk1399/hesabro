import Header from "@/components/global/header";
import Topbar from "@/components/global/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="container max-w-5xl py-8 mx-auto">
        <Header />
      </div>
    </div>
  );
}
