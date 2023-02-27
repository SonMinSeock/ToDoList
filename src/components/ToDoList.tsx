import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import {
  Line,
  List,
  Select,
  Title,
  WrapperForm,
  WrapperList,
} from "../styles/styles";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import CreateCategories from "./CreateCategories";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  console.log(category);

  return (
    <div>
      <Title>🏃‍♂️ 슬기로운 일상 생활 🏃‍♂️</Title>
      <Line />
      <WrapperForm>
        <Select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </Select>
        <CreateToDo />
      </WrapperForm>
      <WrapperList>
        <List>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </List>
      </WrapperList>
      <hr />
      <Line />
      <CreateCategories />
    </div>
  );
}

export default ToDoList;
