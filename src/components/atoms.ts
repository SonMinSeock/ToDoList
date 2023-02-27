import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "DELETE" = "DELETE",
}
//type categories = "TO_DO" | "DOING" | "DONE";

const { persistAtom } = recoilPersist();

export interface IToDo {
  id: number;
  text: string;
  category: Categories | string;
}

export interface ICustomCategories {
  [key: string]: [];
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cunstomCategoriesState = atom<ICustomCategories>({
  key: "customCategories",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
