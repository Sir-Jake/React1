import Header from "./Header/header";
import MainSection from "./MainSection/mainSection";
function APP() {
  return (
    <div className=" p-4 w-screen h-screen bg-blue-200 overflow-y-auto">
      <Header />
      <MainSection />
    </div>
  );
}

export default APP;
