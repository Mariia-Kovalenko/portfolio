import PageLayout from "./Layout/PageLayout/PageLayout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <PageLayout>
            <Home />
            <About />
            <Projects />
        </PageLayout>
    );
}

export default App;
