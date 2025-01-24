import { HomeCarousel } from "../../componnents";
import { CarouselContainer, Container, Texto, Titulo } from "./styles";

export default function Home() {
  return (
    <>
      <Container>
        <CarouselContainer>
          <HomeCarousel />
        </CarouselContainer>

        <Titulo>O que é Engenharia de Sistemas?</Titulo>
        <Texto>
          É um campo interdisciplinar da engenharia que foca no desenvolvimento
          de sistemas complexos. Os problemas relacionados à coordenação de
          diferentes equipes, integração com componentes, se tornam mais
          complexos em projetos. A engenharia de sistemas introduz métodos e
          ferramentas que facilitam o trabalho nesse tipo de projetos, fundindo
          disciplinas como computação, gestão de projetos. Relacionado com
          construir, gerenciar e analisar um sistema. Seja tecnologia, química,
          mecânica, elétrica, etc. Imagine um carro, onde a parte mecânica é o
          motor e a parte elétrica as luzes. Engenheiros de computação cuidam do
          hardware, enquanto engenheiros de software desenvolvem o software.
          Engenheiro de sistemas é trabalhar com esses diferentes tipos de
          engenheiros, e conhecer um pouco de cada uma dessas áreas. E
          certificar que tudo está funcionando corretamente para um sistema
          total, no caso o carro. Segundo o INCOSE, a engenharia de sistemas é
          uma abordagem interdisciplinar que torna possível a concretização de
          sistemas de elevada complexidade. O termo engenharia de sistemas foi
          introduzido na década de 1940. Surgiu como necessidade de identificar
          e manipular as propriedades de um sistema como um todo. Uma grande
          vantagem é que podemos seguir diversos tipos de carreira, como
          estudamos durante o curso um pouco de cada coisa, podemos nos
          especializar em áreas específicas.
        </Texto>
      </Container>
    </>
  );
}
