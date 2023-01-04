export const errorCheck = (value, type, password1) => {
  switch (type) {
    case "price":
      if (!value.match(/[0-9]/)) {
        return "Formato incorrecto";
      } else if (value.length < 1) {
        return "Añade el precio";
      } else {
        return "";
      }
    case "description":
      if (!/[a-z]/gi.test(value)) {
        return "Formato incorrecto";
      } else if (value.length > 75) {
        return "La descripción podrá tener máximo 75 carácteres";
      } else {
        return "";
      }
    case "text":
      if (!/[a-z]/gi.test(value)) {
        return "Formato incorrecto";
      } else if (value.length > 25) {
        return "Debe ser máximo de 25 carácteres";
      } else {
        return "";
      }

    case "name":
      if (value === "") {
        return "Campo de nombre vacío";
      } else if (!/[a-z]/gi.test(value)) {
        return "Formato incorrecto";
      } else if (value.length > 15) {
        return "El nombre debe ser máximo de 15 carácteres";
      } else {
        return "";
      }

    case "email":
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        return "Ecribe un email válido";
      } else {
        return "";
      }

    case "password":
      if (value.length < 8) {
        return "La contraseña debe tener mínimo 8 carácteres";
      }
      // validate it has one lower case letter
      if (!value.match(/[a-z]/)) {
        return "La contraseña debe contener una letra minúscula";
      }
      // validate it has one upper case letter
      if (!value.match(/[A-Z]/)) {
        return "La contraseña debe contener una letra mayúsucula";
      }
      // validate it has one number
      if (!value.match(/[0-9]/)) {
        return "La contraseña debe contener mínimo un número";
      } else {
        return "";
      }

    case "password2":
      if (value !== password1) {
        return "El campo de la contraseña se encuentra vacío";
      } else {
        return "";
      }

    default:
      console.log("Error");

      break;
  }
};
