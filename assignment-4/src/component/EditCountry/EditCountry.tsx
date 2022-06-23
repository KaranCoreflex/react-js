import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { SingleCountryType } from "../../types/countryList";
import { Delete } from "@mui/icons-material";
import "../EditCountry/EditCountry.css";
import { border } from "@mui/system";
import { capitalize } from "@mui/material";

type iprops = {
  singleCountry: SingleCountryType;
};

const EditCountry = ({ singleCountry }: iprops) => {
  const initialState = {
    name: singleCountry.name,
    flags: singleCountry.flags,
    population: singleCountry.population,
    region: singleCountry.region,
    capital: singleCountry.capital,
    languages: singleCountry.languages,
    currencies: singleCountry.currencies,
    borders: singleCountry.borders as string[],
    latlng: singleCountry.latlng,
  };
  // console.log("initialState",initialState)
  // deep cloning and used for multiple handel change

  const [displayForm, setDispayForm] = useState(false);
  const [localstorageName, setLocalstorageName] = useState(initialState);
  // for language
  const [inputLanguage, setInputLanguage] = useState(singleCountry.languages);
  const [inputValue, setInputValue] = useState("");
  const [inputKey, setInputKey] = useState("");
  // end language
  const [inputName, setInputName] = useState(singleCountry.name);
  // for border
  const [inputBorder, setInputBorder] = useState(singleCountry.borders || []);
  // for currency
  const [inputCurrencies, setInputCurrencies] = useState(singleCountry.currencies);
  // for click
  const [click, setClick] = useState(false);
  const inputBorderRef:React.LegacyRef<HTMLSpanElement>  = useRef(null)
  const inputLanguageRef:React.LegacyRef<HTMLSpanElement>  = useRef(null)
  const inputCurrenciesRef:React.LegacyRef<HTMLSpanElement>  = useRef(null)

  const handleShow = () => setDispayForm(true);

  const handleClose = () => {
    setDispayForm(false);
  };

  const handelLanguage = () => {
    if(!inputValue){
      inputLanguageRef.current!.style.display="block"
    }else{
      const key = inputValue.substring(0, 3).toLowerCase();
      setInputLanguage({ ...inputLanguage, [key]: inputValue });
      setInputValue("");
      inputLanguageRef.current!.style.display="none"
    }
  };

  const handelInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalstorageName({
      ...localstorageName,
      [name]: value,
    });
  };

  const handleDelete = (lang: string) => {
    const key = lang;
    const { [key]: remved, ...languageRest } = inputLanguage;
    setInputLanguage(languageRest);
  };

  const handelBorder = () => {
      if(!inputValue){
        inputBorderRef.current!.style.display="block"
      }else{
        setInputBorder([...inputBorder, inputValue]);
        inputBorderRef.current!.style.display="none"
      }
  };

  const handleDeleteBorder = (border: any) => {
    setInputBorder(inputBorder.filter((x) => x !== border));
  };

  const handelCurrencies = () => {
    if(!inputKey || !inputValue){
      inputCurrenciesRef.current!.style.display="block"
    }else{
      setInputCurrencies({
        ...inputCurrencies,
        [inputKey]: { name: inputValue },
      });
      setInputKey("");
      setInputValue("");
      inputCurrenciesRef.current!.style.display="none"
    }
  };

  const handelDeleteCurrencies = (key: string) => {
    const { [key]: removed, ...currenciesReset } = inputCurrencies;
    setInputCurrencies(currenciesReset);
  };

  // const handelSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
  //   e.preventDefault();
  //   setLocalstorageName({
  //     ...localstorageName,
  //     name:inputName,
  //     languages:inputLanguage,
  //     borders: inputBorder,
  //     currencies: inputCurrencies
  //   })

  //   const name = localStorage.setItem(
  //     "initialState1",
  //     JSON.stringify(localstorageName)
  //   );
  //   console.log("localstoreage", name);
  // }

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLocalstorageName({
      ...localstorageName,
      name: inputName,
      languages: inputLanguage,
      borders: inputBorder,
      currencies: inputCurrencies,
    });
    setClick(true);
    
  };

  useEffect(() => {
    if (click) {
      let localStorageCountries: SingleCountryType[] = [];
      console.log(localstorageName);
      if (localStorage.getItem("countryList") !== null) {
        localStorageCountries = JSON.parse(localStorage.getItem("countryList") || "");
      }
      localStorageCountries.push(localstorageName);
      localStorage.setItem(
        "countryList",
        JSON.stringify(localStorageCountries)
      );
      window.location.reload();
    }
  }, [click]);
  // console.log("click", click);

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div className="constainer">
          <label>
            Official Name:
            <br />
            <input
              type="text"
              name="officialName"
              value={inputName.official}
              onChange={(e) =>
                setInputName({ ...inputName, official: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Population:
            <br />
            <input
              type="number"
              name="population"
              value={localstorageName?.population}
              onChange={handelInputs}
            />
          </label>
          <br />
          <label>
            borders: <br />
            <input
              type="text"
              name="border"
              className="input_border"
              onChange={(e) =>  setInputValue(e.target.value.toUpperCase())}
            />
            
            <button
              className="btn btn-color"
              type="button"
              onClick={handelBorder}
            >
              Add
            </button><br/>
              <span ref={inputBorderRef} className="error">Please Add Border</span>
            {inputBorder?.map((border: string) => (
              <p key={border}>
                {border}
                <Delete
                  sx={{ color: "red" }}
                  onClick={() => handleDeleteBorder(border)}
                />
              </p>
            ))}
          </label>
          <br />
          <label>
            Capital:
            <br />
            <input
              type="text"
              name="capital"
              value={localstorageName?.capital}
              onChange={handelInputs}
            />
          </label>
          <br />
          <label>
            Region:
            <br />
            <input
              type="text"
              name="region"
              value={localstorageName?.region}
              onChange={handelInputs}
            />
          </label>
          <br />
          <label>
            Currencies:
            <br />
            <input
              type="text"
              name="currencies_code"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
            />
            <input
              type="text"
              name="currencies"
              className="mobile-view"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="btn btn-color ml-2"
              type="button"
              onClick={handelCurrencies}
            >
              Add
            </button><br/>
            <span ref={inputCurrenciesRef} className="error">Please Add Currence code and Currencies</span>
            <br />
            {inputCurrencies &&
              Object.keys(inputCurrencies).map((key) => (
                <p key={key}>
                  {inputCurrencies[key]?.name}
                  <Delete
                    sx={{ color: "red" }}
                    onClick={() => handelDeleteCurrencies(key)}
                  />
                </p>
              ))}
          </label>
          <br />
          <label>
            Languages:
            <br />
            <input
              type="text"
              name="languages"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="btn btn-color ml-2"
              type="button"
              onClick={handelLanguage}
            >
              Add
            </button><br/>
            <span ref={inputLanguageRef} className="error">Please Add Language</span>
            {inputLanguage &&
              Object.keys(inputLanguage).map((lang) => (
                <p key={lang}>
                  {inputLanguage[lang]}
                  <Delete
                    sx={{ color: "red" }}
                    onClick={() => handleDelete(lang)}
                  />
                </p>
              ))}
          </label>
        </div>
        <button className="btn btn-color" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditCountry;
