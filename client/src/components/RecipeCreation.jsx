import {
  FormContainer,
  FormRecipe,
  InputName,
  TextAreaSummary,
  TextAreaSteps,
  InputDietType,
  InputDishType,
  InputHealthScore,
  LabelPanel,
  PanelDivider,
  SubmitButton,
  BigPanelContainer,
  InputImg,
  OptionDivider,
  OptionContainer,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import validate from "./validations";
const RecipeCreation = () => {
  const [diets, setDiets] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3001/diets`).then((res) => {
      const data = res.data;
      setDiets(data);
    });
  }, []);
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

  const [inputs, setInputs] = useState({
    name: "",
    healthScore: "",
    dietId: "",
    dishTypes: "",
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

  const handleChange = (e) => {
    console.log(e.target.checked);
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        setInputs({
          ...inputs,
          [e.target.name]: [...inputs[e.target.name], e.target.value],
        });
      } else {
        var index = inputs[e.target.name].indexOf(e.target.value);
        if (index > -1) {
          inputs[e.target.name].splice(index, 1);
        }
      }
    } else {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    setErrors(validate({ ...inputs, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post("http://localhost:3001/createRecipe", {
        ...inputs,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(inputs);
  return (
    <>
      <FormContainer>
        <FormRecipe onSubmit={(e) => handleSubmit(e)}>
          <BigPanelContainer>
            <PanelDivider>
              <LabelPanel>Recipe Name:</LabelPanel>
              <InputName
                name="name"
                onChange={(e) => handleChange(e)}
                type="text"
              ></InputName>
              {errors.name && errors.name}
              <LabelPanel>Health Score:</LabelPanel>
              <InputHealthScore
                name="healthScore"
                onChange={(e) => handleChange(e)}
                placeholder="0 - 100"
                type="number"
                min="0"
                max="100"
              ></InputHealthScore>
              {errors.healthScore && errors.healthScore}
            </PanelDivider>

            <PanelDivider>
              <LabelPanel>Diet Type:</LabelPanel>
              <OptionContainer>
                {diets &&
                  diets.map((diet) => {
                    return (
                      <>
                        <OptionDivider>
                          <InputDietType
                            key={diet.id}
                            id={diet.id}
                            type="checkbox"
                            name="dietId"
                            onChange={(e) => handleChange(e)}
                            value={diet.id}
                          ></InputDietType>
                          <LabelPanel>{diet.name}</LabelPanel>
                        </OptionDivider>
                      </>
                    );
                  })}
                {errors.diets && errors.diets}
              </OptionContainer>
            </PanelDivider>
            <PanelDivider>
              <LabelPanel>Dish Type:</LabelPanel>
              <OptionContainer>
                {dishTypes.map((dish) => {
                  return (
                    <>
                      <OptionDivider>
                        <InputDishType
                          type="checkbox"
                          name="dishTypes"
                          onChange={(e) => handleChange(e)}
                          value={dish}
                        ></InputDishType>
                        <LabelPanel>{dish}</LabelPanel>
                      </OptionDivider>
                    </>
                  );
                })}
                {errors.dishTypes && errors.dishTypes}
              </OptionContainer>
            </PanelDivider>

            <PanelDivider>
              <LabelPanel>Summary:</LabelPanel>
              <TextAreaSummary
                name="summary"
                onChange={(e) => handleChange(e)}
              ></TextAreaSummary>
              {errors.summary && errors.summary}
              <LabelPanel>Steps:</LabelPanel>
              <TextAreaSteps
                name="steps"
                onChange={(e) => handleChange(e)}
              ></TextAreaSteps>
              {errors.steps && errors.steps}
              <LabelPanel>Imagen de la receta:</LabelPanel>
              <InputImg
                name="image"
                onChange={(e) => handleChange(e)}
                placeholder="www.ejemplo.com"
                type="url"
              ></InputImg>
              {errors.image && errors.image}
            </PanelDivider>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </BigPanelContainer>
        </FormRecipe>
      </FormContainer>
    </>
  );
};

export default RecipeCreation;
