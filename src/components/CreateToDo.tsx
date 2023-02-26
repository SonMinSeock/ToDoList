import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue, formState: {errors} } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Please Write a to do",}, )}
        placeholder="Write a to do"
      />
      <button>Add</button>
      <span>{errors.toDo?.message}</span>
    </form>
  );
}

export default CreateToDo;            