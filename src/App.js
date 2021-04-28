import Search from "./Search";
import ImagesList from "./ImagesList";

function App() {
  return (
    <div className="p-6 bg-gray-200 min-h-screen flex flex-col items-center">
      <div className="w-4/5">
        <Search />
        <ImagesList />
      </div>
    </div>
  );
}

export default App;
