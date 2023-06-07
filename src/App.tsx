import PageLayout from "./Layout/PageLayout/PageLayout";
import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">
            <PageLayout>
                <Home />
            </PageLayout>
        </div>
    );
}

export default App;
