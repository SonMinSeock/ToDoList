import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  Select,
  Title,
  WrappeerCustomCategories,
  WrapperForm,
} from "../styles/styles";
import { Categories, cunstomCategoriesState } from "./atoms";

interface IForm {
  category: string[];
}

function CreateCategories() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  const [customCategories, setCustomCategories] = useRecoilState(
    cunstomCategoriesState
  );

  const handleValid = ({ category }: IForm) => {
    setCustomCategories((prev) => {
      return {
        ...prev,
        [category + ""]: [],
      };
    });
    setValue("category", []);
  };

  console.log(customCategories);

  return (
    <div>
      <Title>🔨 카테고리 생성하기 🔨</Title>
      <WrapperForm>
        {Object.keys(customCategories).length > 0 ? (
          <Select>
            {Object.keys(customCategories).map((categories) => (
              <option value={categories} key={categories}>
                {categories}
              </option>
            ))}
          </Select>
        ) : null}
        <form onSubmit={handleSubmit(handleValid)}>
          <input
            {...register("category", { required: "Please Write a Category" })}
            placeholder="Write a Category"
          />
          <button>Add</button>
        </form>
      </WrapperForm>
    </div>
  );
}

export default CreateCategories;
