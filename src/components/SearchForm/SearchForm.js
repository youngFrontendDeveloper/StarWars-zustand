import styles from "./SearchForm.module.scss";
import { useState } from "react";
import FoundedResult from "../FoundedResult/FoundedResult";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { usePeopleStore } from "../../store/store";


export default function SearchForm() {
  const [ isShowResults, setShowResults ] = useState( false );
  const { register, handleSubmit, getValues, resetField, formState: { errors } } = useForm( {
    mode: "onTouched",
  } );
  const { fetchFoundPeople } = usePeopleStore();

  const onSubmit = async() => {
    const value = getValues().search;
    setShowResults( true );
    fetchFoundPeople( value );
  };

  return (
    <div
      className={ styles[ "search-form__wrapper" ] }
    >
      <form onSubmit={ handleSubmit( onSubmit ) } className={ styles[ "search-form" ] }>
        <div className={ styles[ "search-form__item" ] }>
          <label htmlFor="name" className={ styles[ "search-form__label" ] }>Поиск по имени:</label>
          <input
            id="name"
            name="search"
            type="text"
            className={ styles[ "search-form__input" ] }
            placeholder="Luke Skywalker"
            { ...register( "search", {
                required: "Пожалуйста, введите не менее 3-x символов",
                minLength: {
                  value: 3,
                  message: "Должно быть не менее 3-x символов",
                },
              }
            ) }

          />
          <span
            onClick={ () => resetField("search", { keepDirty: true }) } className={ styles[ "search-form__close" ] }
          />
        </div>
        { errors.search && <p className={ styles[ "search-form--error" ] }>{ errors.search.message }</p> }
        <Button text="Искать" />

      </form>
      {
        isShowResults && <FoundedResult />
      }
    </div>
  );
}