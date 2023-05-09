// import thing from ./place.jsx

import { useState } from "react";
import DisplayTabs from "./DisplayTabs";

function App() {
  const [tabs, setTabs] = useState([{content: "content for tab 1"},{content: "content for tab 2"},{content: "content for tab 3"}]);
  const [tab, setTab] = useState(0);
  return (
    <div className="container pt-3">
      < DisplayTabs tabs={tabs} tab={tab} setTab={setTab}/>
    </div>
  );
}

export default App;
