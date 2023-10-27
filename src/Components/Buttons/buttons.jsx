import * as React from 'react';
import Button from '@mui/material/Button';
import { blue} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import "../Buttons/buttons.css"

const theme = createTheme({
    palette: {
      primary: {
        main:blue[400],
        contrastText: blue[50]
        
      },
    },
  });

function Buttons() {
  return (
    <ThemeProvider theme={theme}>
        <div className="buttons">
            <Button>About Me</Button>
            <Button>My Projects</Button>
        </div>
    </ThemeProvider>
  );
}

export default Buttons