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
        props.setNotificationMessage(
          `Error: Already been removed from server!`
        );
        setTimeout(() => {
          props.setNotificationMessage(null);
        }, 3000);
        personsService.getAll().then((response) => {
          props.setPersons(response);
        });
      });
  }
};
