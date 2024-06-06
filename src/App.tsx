import "./global.css";
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
