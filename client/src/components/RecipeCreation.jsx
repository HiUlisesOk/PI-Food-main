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
  TitlePanel,
  PanelDivider,
  SubmitButton,
  BigPanelContainer,
  InputImg,
  OptionDivider,
  OptionContainer,
  ErrorPanel,
} from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createRecipe", {
        ...inputs,
      })
      .then(function (response) {
        console.log(response);
        navigate(`/details/${response.data.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <FormContainer>
        <FormRecipe onSubmit={(e) => handleSubmit(e)}>
          <BigPanelContainer>
            <PanelDivider>
              <TitlePanel>Recipe Name</TitlePanel>
              <InputName
                name="name"
                placeholder="Cauliflower, Brown Rice, and Vegetable Fried Rice..."
                onChange={(e) => handleChange(e)}
                type="text"
              ></InputName>
              <ErrorPanel> {errors.name && errors.name}</ErrorPanel>
              <TitlePanel>Health Score</TitlePanel>
              <InputHealthScore
                name="healthScore"
                onChange={(e) => handleChange(e)}
                placeholder="0 - 100"
                type="number"
                min="0"
                max="100"
              ></InputHealthScore>
              <ErrorPanel>
                {errors.healthScore && errors.healthScore}
              </ErrorPanel>
            </PanelDivider>

            <PanelDivider>
              <TitlePanel>Diet Type</TitlePanel>
              <OptionContainer>
                {diets &&
                  diets.map((diet) => {
                    return (
                      <>
                        <OptionDivider key={diet.name}>
                          <InputDietType
                            key={diet.id}
                            id={diet.id}
                            type="checkbox"
                            name="dietId"
                            onChange={(e) => handleChange(e)}
                            value={diet.id}
                          ></InputDietType>
                          <LabelPanel for={diet.id}>{diet.name}</LabelPanel>
                        </OptionDivider>
                      </>
                    );
                  })}
              </OptionContainer>
              <ErrorPanel>{errors.dietId && errors.dietId}</ErrorPanel>
            </PanelDivider>
            <PanelDivider>
              <TitlePanel>Dish Type</TitlePanel>
              <OptionContainer>
                {dishTypes.map((dish) => {
                  return (
                    <>
                      <OptionDivider>
                        <InputDishType
                          id={dish}
                          type="checkbox"
                          name="dishTypes"
                          onChange={(e) => handleChange(e)}
                          value={dish}
                        ></InputDishType>
                        <LabelPanel for={dish}>{dish}</LabelPanel>
                      </OptionDivider>
                    </>
                  );
                })}
              </OptionContainer>{" "}
              <ErrorPanel> {errors.dishTypes && errors.dishTypes}</ErrorPanel>
            </PanelDivider>

            <PanelDivider>
              <TitlePanel>Summary</TitlePanel>
              <TextAreaSummary
                placeholder="Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure?..."
                name="summary"
                onChange={(e) => handleChange(e)}
              ></TextAreaSummary>
              <ErrorPanel> {errors.summary && errors.summary}</ErrorPanel>
              <TitlePanel>Steps:</TitlePanel>
              <TextAreaSteps
                placeholder="1 - Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets..."
                name="steps"
                onChange={(e) => handleChange(e)}
              ></TextAreaSteps>
              <ErrorPanel> {errors.steps && errors.steps}</ErrorPanel>
              <TitlePanel>Imagen de la receta:</TitlePanel>
              <InputImg
                name="image"
                onChange={(e) => handleChange(e)}
                placeholder="https://www.imagen.jpg"
                type="url"
              ></InputImg>
              <ErrorPanel>{errors.image && errors.image}</ErrorPanel>
            </PanelDivider>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </BigPanelContainer>
        </FormRecipe>
      </FormContainer>
    </>
  );
};

export default RecipeCreation;
