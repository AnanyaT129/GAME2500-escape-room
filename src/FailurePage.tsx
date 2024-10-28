import { Container } from "@mui/material";
import Background from "./bigJim.gif"

export function FailurePage() {
  return (
    <Container className="App" style={{backgroundImage: `url(${Background})`, height: "100vh", padding: 20}} maxWidth={false}>
      <h1 style={{color: "white", backgroundColor: "gray"}}>Womp womp... Big Jim won... his UHaul broke a bridge on Storrow Drive and now the city residents are rioting outside your office. Also you got fired.</h1>
  </Container>
  )
}