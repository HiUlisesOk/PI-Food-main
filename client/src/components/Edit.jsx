import {
  BigContainer,
  FormRecipe,
  InputName,
  TextAreaSummary,
  TextAreaSteps,
  InputDietType,
  InputDishType,
  InputHealthScore,
  LabelPanel,
  TitlePanel,
  PanelDivider,
  SubmitButton,
  BigPanelContainer,
  InputImg,
  OptionDivider,
  OptionContainer,
  ErrorPanel,
  FormButton,
  DetailsSummary,
  DetailsImg,
} from "./styles";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetRecipes } from "../redux/actions";

import axios from "axios";
import validate from "./validations";
const RecipeEdit = () => {
  const { id } = useParams();
  const [diets, setDiets] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dishTypes = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ];

  const [edit, setEdit] = useState({
    name: false,
    healthScore: false,
    dietId: false,
    dishTypes: false,
    summary: false,
    steps: false,
    image: false,
  });
  const [inputs, setInputs] = useState({
    name: "",
    healthScore: "",
    dietId: [],
    dishTypes: [],
    summary: "",
    steps: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    healthScore: "",
    dietId: "",
    dishTypes: "",
    summary: "",
    steps: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`/diets`).then((res) => {
      const data = res.data;
      setDiets(data);
    });
    axios.get(`/recipes/${id}`).then((res) => {
      const data = res.data;

      setInputs({
        name: data.name,
        healthScore: data.healthScore,
        dietId: data.diets.map((diet) => diet),
        dishTypes: [data.dishTypes],
        summary: data.summary,
        steps: data.steps,
        image: data.image,
      });
    });
  }, [id]);
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      let copyInput = [...inputs[e.target.name]];
      let newInput = [];
      let inputExist = copyInput.find((input) => input === e.target.value);

      if (inputExist) {
        newInput = copyInput.filter((element) => {
          return element !== e.target.value;
        });
        newInput = [...newInput, e.target.value];
      } else {
        newInput = [...copyInput, e.target.value];
      }
      setInputs({
        ...inputs,
        [e.target.name]: newInput,
      });
      setErrors(
        validate({
          ...inputs,
          [e.target.name]: newInput,
        }),
      );
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
      setErrors(validate({ ...inputs, [e.target.name]: e.target.value }));
    }
  };

  const HandleSave = (e) => {
    if (e.target.name === "dietId") {
      if (!errors.dietId) {
        setEdit({ ...edit, dietId: false });
        const saveDiets = inputs.dietId.map((inputDiet) => {
          for (let diet of diets) {
            if (diet.id === Number(inputDiet)) return diet;
          }
        });

        saveDiets.length && setInputs({ ...inputs, dietId: saveDiets });
        console.log(inputs);
      }
    } else if (!errors[e.target.name]) {
      setEdit({ ...edit, [e.target.name]: false });
      setInputs({ ...inputs, [e.target.name]: inputs[e.target.name] });
    }
  };
  const HandleEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: true });
    setInputs({ ...inputs, [e.target.name]: [] });
  };

  // comprobamos los errores al hacer submit y evitamos que el form se envíe
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) {
      alert("Debes corregir los errores");
    } else {
      alert("Datos completos");
      axios
        .put(`/edit/${id}`, {
          ...inputs,
        })
        .then(function (response) {
          console.log(response);
          dispatch(GetRecipes());
          navigate(`/details/${id}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <>
      <BigContainer>
        <FormRecipe onSubmit={(e) => handleSubmit(e)}>
          <BigPanelContainer>
            <PanelDivider>
              <TitlePanel>
                Recipe Name
                {edit.name ? (
                  <FormButton
                    type="button"
                    name="name"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    type="button"
                    value="edit"
                    onClick={() => setEdit({ ...edit, name: true })}
                  ></FormButton>
                )}
              </TitlePanel>
              {edit.name ? (
                <>
                  <InputName
                    name="name"
                    placeholder={inputs.name}
                    onChange={(e) => handleChange(e)}
                    type="text"
                  ></InputName>
                  <ErrorPanel> {errors.name && errors.name}</ErrorPanel>
                </>
              ) : (
                inputs.name
              )}
              <TitlePanel>
                Health Score{" "}
                {edit.healthScore ? (
                  <FormButton
                    type="button"
                    name="healthScore"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    type="button"
                    value="edit"
                    onClick={(e) => setEdit({ ...edit, healthScore: true })}
                  ></FormButton>
                )}
              </TitlePanel>
              {edit.healthScore ? (
                <>
                  <InputHealthScore
                    name="healthScore"
                    onChange={(e) => handleChange(e)}
                    placeholder={inputs.healthScore}
                    type="number"
                    min="0"
                    max="100"
                  ></InputHealthScore>
                  <ErrorPanel>
                    {errors.healthScore && errors.healthScore}
                  </ErrorPanel>
                </>
              ) : (
                inputs.healthScore
              )}
            </PanelDivider>

            <PanelDivider>
              <TitlePanel>
                Diet Type{" "}
                {edit.dietId ? (
                  <FormButton
                    type="button"
                    name="dietId"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    name="dietId"
                    type="button"
                    value="edit"
                    onClick={(e) => HandleEdit(e)}
                  ></FormButton>
                )}
              </TitlePanel>

              <OptionContainer>
                {edit.dietId
                  ? diets &&
                    diets.map((diet, index) => {
                      return (
                        <>
                          <OptionDivider key={`${diet.name} Option`}>
                            <InputDietType
                              key={`${diet.id} Input`}
                              id={diet.id}
                              type="checkbox"
                              name="dietId"
                              onChange={(e) => handleChange(e)}
                              value={diet.id}
                            ></InputDietType>
                            <LabelPanel
                              key={`${index} Label`}
                              htmlFor={diet.id}
                            >
                              {diet.name}
                            </LabelPanel>
                          </OptionDivider>
                        </>
                      );
                    })
                  : inputs.dietId &&
                    inputs.dietId.map((diet, index) => {
                      return (
                        <>
                          <OptionDivider key={`Option`}>
                            <LabelPanel key={`${index} Label`}>
                              {diet && diet.name}
                            </LabelPanel>
                          </OptionDivider>
                        </>
                      );
                    })}
              </OptionContainer>
              <ErrorPanel>{errors.dietId && errors.dietId}</ErrorPanel>
            </PanelDivider>
            <PanelDivider>
              <TitlePanel>
                Dish Type{" "}
                {edit.dishTypes ? (
                  <FormButton
                    type="button"
                    name="dishTypes"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    name="dishTypes"
                    type="button"
                    value="edit"
                    onClick={(e) => HandleEdit(e)}
                  ></FormButton>
                )}
              </TitlePanel>
              <OptionContainer>
                {edit.dishTypes
                  ? dishTypes.map((dish, index) => {
                      return (
                        <>
                          <OptionDivider key={`${index} Option-Dish`}>
                            <InputDishType
                              key={`${index} InputDish`}
                              id={dish}
                              type="checkbox"
                              name="dishTypes"
                              onChange={(e) => handleChange(e)}
                              value={dish}
                            ></InputDishType>
                            <LabelPanel
                              key={`${index} LabelDish`}
                              htmlFor={dish}
                            >
                              {dish}
                            </LabelPanel>
                          </OptionDivider>
                        </>
                      );
                    })
                  : inputs.dishTypes.map((dish, index) => {
                      return (
                        <>
                          <OptionDivider key={`${index} Option-Dish`}>
                            <LabelPanel
                              key={`${index} LabelDish`}
                              htmlFor={dish}
                            >
                              {dish}
                            </LabelPanel>
                          </OptionDivider>
                        </>
                      );
                    })}
              </OptionContainer>{" "}
              <ErrorPanel> {errors.dishTypes && errors.dishTypes}</ErrorPanel>
            </PanelDivider>

            <PanelDivider>
              <TitlePanel>
                Summary
                {edit.summary ? (
                  <FormButton
                    type="button"
                    name="summary"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    type="button"
                    value="edit"
                    onClick={(e) => setEdit({ ...edit, summary: true })}
                  ></FormButton>
                )}
              </TitlePanel>
              {edit.summary ? (
                <>
                  <TextAreaSummary
                    placeholder={inputs.summary}
                    name="summary"
                    onChange={(e) => handleChange(e)}
                  ></TextAreaSummary>
                  <ErrorPanel> {errors.summary && errors.summary}</ErrorPanel>
                </>
              ) : (
                <DetailsSummary
                  dangerouslySetInnerHTML={{ __html: inputs.summary }}
                ></DetailsSummary>
              )}
              <TitlePanel>
                Steps:
                {edit.steps ? (
                  <FormButton
                    type="button"
                    name="steps"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    type="button"
                    value="edit"
                    onClick={(e) => setEdit({ ...edit, steps: true })}
                  ></FormButton>
                )}
              </TitlePanel>
              {edit.steps ? (
                <>
                  {" "}
                  <TextAreaSteps
                    placeholder={inputs.steps}
                    name="steps"
                    onChange={(e) => handleChange(e)}
                  ></TextAreaSteps>
                  <ErrorPanel> {errors.steps && errors.steps}</ErrorPanel>
                </>
              ) : (
                <DetailsSummary>{inputs.steps}</DetailsSummary>
              )}
              <TitlePanel>
                Imagen de la receta:
                {edit.image ? (
                  <FormButton
                    type="button"
                    name="image"
                    value="save"
                    onClick={(e) => HandleSave(e)}
                  ></FormButton>
                ) : (
                  <FormButton
                    type="button"
                    value="edit"
                    onClick={(e) => setEdit({ ...edit, image: true })}
                  ></FormButton>
                )}
              </TitlePanel>{" "}
              {edit.image ? (
                <>
                  {" "}
                  <InputImg
                    name="image"
                    onChange={(e) => handleChange(e)}
                    placeholder="https://www.imagen.jpg"
                    type="text"
                  ></InputImg>
                  <ErrorPanel>{errors.image && errors.image}</ErrorPanel>
                </>
              ) : (
                <DetailsImg img={inputs.image}></DetailsImg>
              )}
            </PanelDivider>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </BigPanelContainer>
        </FormRecipe>
      </BigContainer>
    </>
  );
};

export default RecipeEdit;
