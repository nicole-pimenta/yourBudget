import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { StyledLabel } from "../../styles/typography";
import Input from "../Input";
import { formSchema } from "./formSchema";
import { StyledContainerForm, StyledMessageError } from "./style";

const Form = ({ listTransactions, setListTransactions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const submit = (formData) => {
    const data = { ...formData, id: uuidv4() };

    setListTransactions([...listTransactions, data]);
  };

  return (
    <StyledContainerForm className="container">
      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          type="text"
          id="description"
          {...register("description")}
        />
        {errors.description ? (
          <StyledMessageError>{errors.description.message}</StyledMessageError>
        ) : null}

        <Input
          label="Valor(R$)"
          placeholder="1"
          type="number"
          id="value"
          {...register("value")}
        />
        {errors.value ? (
          <StyledMessageError>{errors.value.message}</StyledMessageError>
        ) : null}

        <StyledLabel htmlFor="type">Tipo de valor</StyledLabel>

        <select id="type" {...register("type")}>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>

        {errors.type ? (
          <StyledMessageError>{errors.type.message}</StyledMessageError>
        ) : null}
        <button type="submit">Inserir valor</button>
      </form>
    </StyledContainerForm>
  );
};

export default Form;
