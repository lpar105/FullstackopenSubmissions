import personsService from "../Services/persons.js";
export const Button = (props) => (
  <button onClick={() => handleClick(props)}>delete</button>
);

const handleClick = (props) => {
  if (window.confirm("Do you really want to delete?")) {
    personsService
      .remove(props.personId)
      .then(() => {
        personsService.getAll().then((response) => {
          props.setPersons(response);
        });
      })
      .catch((error) => {
        alert("Already Deleted!", error);
        personsService.getAll().then((response) => {
          props.setPersons(response);
        });
      });
  }
};
