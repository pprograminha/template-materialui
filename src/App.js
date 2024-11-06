import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  components: {
    MuiToolbar: {
      defaultProps: {
        style: {
          backgroundColor: '#505050'
        }
      },
    },
   MuiButton: {
    defaultProps: {
      style: {
        backgroundColor: '#505050',
        color: '#ffffff'
      }
    },
   }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;
