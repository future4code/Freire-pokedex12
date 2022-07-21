import { Container, Pokeball, BallShape, Blinker } from "./styles";

export default function PokeballLoader() {
  return (
    <Container>
      <BallShape>
        <Pokeball></Pokeball>
        <Blinker></Blinker>
      </BallShape>
    </Container>
  );
}
