import logo from './logo.svg';
import './App.css';
import Excelf from './Excelf';
import Compess from './compess';

function App() {
  return (
    <div className="App">
      {/* <Excelf/> */}
    <h2>Only Use .XLSX File to compare don't use any other File type</h2>
      <Compess/>
    </div>
  );
}

export default App;






// // App.js
// import React from 'react';
// import { Button, TextField, ThemeProvider, createTheme } from '@mui/material';
// import { Button as AntButton, Input as AntInput } from 'antd';
// import styled from 'styled-components';
// // import './tailwind.css';
// import { ChakraProvider, Input as ChakraInput, Button as ChakraButton } from '@chakra-ui/react';
// import { ThemeProvider as ThemeUIProvider } from 'theme-ui';

// // Styled Components
// const StyledInput = styled.input`
//   padding: 10px;
//   margin: 5px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const StyledButton = styled.button`
//   padding: 10px;
//   margin: 5px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// // Theme-UI theme
// const themeUI = {
//   colors: {
//     text: '#000',
//     background: '#fff',
//     primary: '#07c',
//   },
// };

// const themeUITextFieldStyles = {
//   padding: 2,
//   margin: 1,
//   border: '1px solid #ccc',
//   borderRadius: 4,
// };

// const themeUIButtonStyles = {
//   padding: 2,
//   margin: 1,
//   backgroundColor: '#07c',
//   color: 'white',
//   border: 'none',
//   borderRadius: 4,
//   cursor: 'pointer',
// };

// const showAlert = (message) => {
//   alert(message);
// };

// const App = () => {
//   // Material-UI theme
//   const muiTheme = createTheme();

//   return (
//     <div>
//       {/* Material-UI */}
//       <ThemeProvider theme={muiTheme}>
//         <div>
//           <TextField label="Material-UI Username" />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => showAlert('Material-UI Submit Clicked')}
//           >
//             Material-UI Submit
//           </Button>
//         </div>
//       </ThemeProvider>

//       {/* Ant Design */}
//       <div>
//         <AntInput placeholder="Ant Design Username" />
//         <AntButton type="primary" onClick={() => showAlert('Ant Design Submit Clicked')}>
//           Ant Design Submit
//         </AntButton>
//       </div>

//       {/* Styled Components */}
//       <div>
//         <StyledInput placeholder="Styled Components Username" />
//         <StyledButton onClick={() => showAlert('Styled Components Submit Clicked')}>
//           Styled Components Submit
//         </StyledButton>
//       </div>

//       {/* Tailwind CSS */}
//       <div>
//         <input className="p-2 m-1 border rounded" placeholder="Tailwind CSS Username" />
//         <button
//           className="p-2 m-1 bg-green-500 text-white rounded"
//           onClick={() => showAlert('Tailwind CSS Submit Clicked')}
//         >
//           Tailwind CSS Submit
//         </button>
//       </div>

//       {/* Chakra UI */}
//       <ChakraProvider>
//         <div>
//           <ChakraInput placeholder="Chakra UI Username" />
//           <ChakraButton
//             colorScheme="teal"
//             onClick={() => showAlert('Chakra UI Submit Clicked')}
//           >
//             Chakra UI Submit
//           </ChakraButton>
//         </div>
//       </ChakraProvider>

//       {/* Theme-UI */}
//       <ThemeUIProvider theme={themeUI}>
//         <div>
//           <input sx={themeUITextFieldStyles} placeholder="Theme-UI Username" />
//           <button
//             sx={themeUIButtonStyles}
//             onClick={() => showAlert('Theme-UI Submit Clicked')}
//           >
//             Theme-UI Submit
//           </button>
//         </div>
//       </ThemeUIProvider>
//     </div>
//   );
// };

// export default App;
