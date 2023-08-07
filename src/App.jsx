import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./Containers/Layouts/MainLayout";
import { Routing } from "./Routes/Routing";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routing />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
