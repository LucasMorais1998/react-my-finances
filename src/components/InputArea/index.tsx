import { SubmitHandler, useForm } from "react-hook-form";
import { Item } from "../../@types/Item";
import { categories as C } from "../../data/categories";

import { Container } from "./styles";

enum CategoryEnum {
  income = "income",
  food = "food",
  rent = "rent",
  salary = "salary",
  market = "market",
}
interface IIputsData {
  date: Date;
  category: CategoryEnum;
  title: string;
  value: number;
}

interface IInputAreaProps {
  onAdd: (item: Item) => void;
}

const InputArea = ({ onAdd }: IInputAreaProps) => {
  const { register, handleSubmit } = useForm<IIputsData>();

  const categories = Object.keys(C);

  const onSubmit: SubmitHandler<IIputsData> = ({
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
        <label htmlFor="date">
          Data:
          <input
            id="date"
            type="text"
            placeholder="mm/dd/aaaa"
            {...register("date", {
              pattern:
                /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/,
            })}
          />
        </label>

        <label htmlFor="category">
          Categoria:
          <select
            id="category"
            defaultValue={"Default"}
            required
            {...register("category")}
          >
            <option value="Default" disabled>
              Selecione
            </option>
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="title">
          Título:
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
          />
        </label>

        <label htmlFor="value">
          Valor:
          <input
            id="value"
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
