import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./Containers/Layouts/MainLayout";
import { Routing } from "./Routes/Routing";
import { DarkModeProvider } from "./Context/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <MainLayout>
          <Routing />
        </MainLayout>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
