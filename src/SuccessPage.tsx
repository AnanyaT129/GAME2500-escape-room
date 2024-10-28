import { Button, Container } from "@mui/material";
import Background from "./carphone.gif"
import { useState } from "react";
import { ResultPage } from "./ResultPage";

export function SuccessPage(props: {location: string}) {
  const [nextPage, setNextPage] = useState(false)
  
  if (nextPage) {
    return (
      <ResultPage></ResultPage>
    );
  } else {
    return (
      <Container className="App" style={{backgroundImage: `url(${Background})`, height: "100vh", padding: 20}} maxWidth={false}>
        <h1 style={{color: "white", backgroundColor: "gray"}}>The cops are being dispatched to Storrow Drive...</h1>
        <Button onClick={() => setNextPage(true)} sx={{color: "white"}} variant="outlined">Next...</Button>
    </Container>
    )
  }
}