import UsersSection from "./UsersSection";
import SearchSection from "./SearchSection";
import Navigation from "./Navigation";
import { useState } from "react";

function App() {
    const [page, setPage] = useState("users");
    console.log(page);
    return (
        <div>
            <Navigation setPage={setPage}/>
            <SearchSection page={page}/>
            <UsersSection page={page} />
                      
        </div>
    );
}
export default App;