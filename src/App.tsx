import { useState } from 'react';
import './App.css';
import { Container, Button, TextField } from '@mui/material';
import Background from './mapBackground.gif';
import { SuccessPage } from './SuccessPage';

function App() {
  const [answer, setAnswer] = useState("")
  const [correctLocation, setCorrectLocation] = useState(false)

  const handleSubmit = (e: any) => {
    if (answer.toLowerCase() === "storrow drive") {
        console.log("AAAAAAAAA")
        console.log(answer)
        setCorrectLocation(true)
    } else {
      setCorrectLocation(false)
    }
  } 

  return (
    <Container className="App" style={{backgroundImage: `url(${Background})`, height: "100vh", padding: 20}} maxWidth={false}>
      <h1 style={{color: 'white'}}>Where is Big Jim?</h1>
    {!correctLocation ? <>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField 
        label="Enter Dispatch Location Here"
        onChange={e => setAnswer(e.target.value)}
        required
        color="primary"
        variant="outlined"
        type="location"
        sx={{
          mb: 3,
          input: {
            color: "white"
          },
          // Root class for the input field
          "& .MuiOutlinedInput-root": {
            color: "#FFFFFF",
            fontWeight: "bold",
            // Class for the border around the input field
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
              borderWidth: "2px",
            },
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
              borderWidth: "3px",
            },
          },
          // Class for the label of the input field
          "& .MuiInputLabel-outlined": {
            color: "#FFFFFF",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "#FFFFFF",
              fontWeight: "bold",
            },
          },
        }}
        fullWidth
        value={answer}
      />
      <Button onClick={handleSubmit} sx={{color: "white"}}>Submit</Button>
    </form></> : <SuccessPage location={answer}></SuccessPage>}
  </Container>
  );
}

export default App;
