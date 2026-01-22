import UsersSection from "./UsersSection";
import SearchSection from "./SearchSection";
import StateNumber from "./LearningSection/StateNumber";

function App() {
    return (
        <div>
            <h1>GitHub Users</h1>
            <StateNumber />
            <SearchSection />
            <UsersSection />
            
        </div>
    );
}
export default App;