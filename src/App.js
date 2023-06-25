import { ColorModeContext, useMode } from "./theme/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./senses/global/Topbar";
import Sidebar from "./senses/global/Sidebar";
import Dashboard from "./senses/dashboard";
import Team from "./senses/team";
import Invoices from "./senses/invoices";
import Contacts from "./senses/contacts";
import Bar from "./senses/bar";
import Form from "./senses/form";
import Line from "./senses/line";
import Pie from "./senses/pie";
import FAQ from "./senses/faq";
import Geography from "./senses/geography";
import Calendar from "./senses/calendar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Box sx={{ maxHeight: "650px", overflow: "auto" }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
