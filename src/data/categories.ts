import { Category } from "../@types/Category";

export const categories: Category = {
  income: { title: "Renda Extra", color: "#33CC95", expense: false },
  food: { title: "Alimentação", color: "#6933FF", expense: true },
  rent: { title: "Aluguel", color: "#E62E4D", expense: true },
  salary: { title: "Salário", color: "#00CCCC", expense: false },
  market: { title: "Mercado", color: "#F7D354", expense: true },
};
