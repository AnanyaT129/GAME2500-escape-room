import { useState } from 'react';
import './App.css';
import { Container, Button, TextField } from '@mui/material';
import Background from './mapBackground.gif';
import { SuccessPage } from './SuccessPage';
import { FailurePage } from './FailurePage';
import Countdown from 'react-countdown';

export enum ValidLocations {
  StorrowDrive = "storrow drive",
  MBTAStop = "mbta stop",
  ReginasPizza = "regina's pizza",
  BostonCityHall = "boston city hall",
  MuseumOfFineArts = "museum of fine arts",
  MiddleSchool = "middle school"
}

export enum EnteredLocation {
  InvalidLocation = 0,
  CorrectValidLocation = 1,
  IncorrectValidLocation = 2,
}

function isAnswerValidLocation(answer: string) {
  return (answer === ValidLocations.MBTAStop || answer === ValidLocations.ReginasPizza || answer === ValidLocations.BostonCityHall
    || answer === ValidLocations.MuseumOfFineArts || answer === ValidLocations.MiddleSchool
  )
}

// Random component
const Completionist = () => <FailurePage></FailurePage>;

type rendererProps = {
  minutes: number
  seconds: number
  completed: boolean
}

// Renderer callback with condition
const renderer = (props: rendererProps) => {
  if (props.completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span style={{color: "white", fontSize: 75}}>{props.minutes}:{props.seconds}</span>;
  }
};

function App() {
  const [answer, setAnswer] = useState("")
  const [correctLocation, setCorrectLocation] = useState(0)

  const handleSubmit = (e: any) => {
    if (answer.toLowerCase() === ValidLocations.StorrowDrive) {
        setCorrectLocation(1)
    } else if (isAnswerValidLocation(answer.toLowerCase())) {
      setCorrectLocation(2)
    } else {
      setCorrectLocation(0)
    }
  }

  return (
    <Container className="App" style={{backgroundImage: `url(${Background})`, height: "100vh", padding: 20}} maxWidth={false}>
      <h1 style={{color: 'white'}}>Where is Big Jim?</h1>
    {correctLocation === 0 ? <>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Countdown
        date={Date.now() + 1200000}
        renderer={renderer}
      />
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
    </form></> : (correctLocation === 1) ? 
    <SuccessPage></SuccessPage> : 
    <FailurePage></FailurePage>
    }
  </Container>
  );
}

export default App;
