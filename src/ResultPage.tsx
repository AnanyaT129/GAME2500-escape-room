import { Container } from "@mui/material";
import Background from "./police.jpg"

export function ResultPage() {
  return (
    <Container className="App" style={{backgroundImage: `url(${Background})`, height: "100vh", padding: 20}} maxWidth={false}>
      <h1 style={{color: "white", backgroundColor: "gray"}}>Success!! You caught Big Jim and thwarted all his crimes. Storrow Drive is safe from UHauls until Sept 1, 2025.</h1>
    </Container>
  )
}