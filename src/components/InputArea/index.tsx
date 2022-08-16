import { useForm, SubmitHandler } from "react-hook-form";
import { categories as C } from "../../data/categories";
import { Item } from "../../@types/Item";

import { Container } from "./styles";

enum CategoryEnum {
  income = "income",
  food = "food",
  rent = "rent",
  salary = "salary",
  market = "market",
}
interface InputsData {
  date: Date;
  category: CategoryEnum;
  title: string;
  value: number;
}

interface IInputAreaProps {
  onAdd: (item: Item) => void;
}

const InputArea = ({ onAdd }: IInputAreaProps) => {
  const { register, handleSubmit } = useForm<InputsData>();

  const categories = Object.keys(C);

  const onSubmit: SubmitHandler<InputsData> = ({
    date,
    category,
    title,
    value,
  }) => {
    let newItem: Item = {
      date: new Date(date),
      category,
      title,
      value: +value,
    };

    onAdd(newItem);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          Data:
          <input
            type="text"
            placeholder="mm/dd/aaaa"
            {...register("date", {
              pattern:
                /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
            })}
          />
        </label>

        <label htmlFor="">Categoria:</label>
        <select defaultValue={"Default"} required {...register("category")}>
          <option value="Default" disabled>
            Selecione
          </option>
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>

        <label htmlFor="">
          Título:
          <input type="text" {...register("title", { required: true })} />
        </label>

        <label htmlFor="">
          Valor:
          <input
            type="number"
            min="1"
            step="any"
            {...register("value", { required: true })}
          />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </Container>
  );
};

export default InputArea;
