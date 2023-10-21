import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { About } from "./layout/sections/about/About";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";
import { Contact } from "./layout/sections/contact/Contact";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
