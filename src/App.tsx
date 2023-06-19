import PageLayout from "./Layout/PageLayout/PageLayout";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
    return (
        <PageLayout>
            <Home />
            <About />
        </PageLayout>
    );
}

export default App;
