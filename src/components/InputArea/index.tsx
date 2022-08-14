import { Item } from "../../@types/Item";

import { Container } from "./styles";

interface IInputAreaProps {
  onAdd: (item: Item) => void;
}

const InputArea = ({ onAdd }: IInputAreaProps) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(),
      category: 'food',
      title: 'Teste',
      value: 250,
    }

    onAdd(newItem)
  }

  return (
    <Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </Container>
  );
};

export default InputArea;
