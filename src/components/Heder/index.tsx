import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Albert Bank" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
