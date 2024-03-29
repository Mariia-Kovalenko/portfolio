import Footer from "./Layout/Footer/Footer";
import PageLayout from "./Layout/PageLayout/PageLayout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <PageLayout>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </PageLayout>
    );
}

export default App;
