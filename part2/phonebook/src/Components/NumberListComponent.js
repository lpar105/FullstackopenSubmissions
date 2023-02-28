import React, { useEffect } from "react";
import { Button } from "./DeleteButtonComponent";
export const NumberList = ({
  persons,
  setPersons = { setPersons },
  filter,
}) => {
  const isIncludedByFilter = (person) => {
    return person.name.toLowerCase().includes(filter.toLowerCase());
  };

  return (
    <>
      {persons
        .filter((person) => isIncludedByFilter(person))
        .map((person) => {
          return (
            <p key={person.id}>
              {person.name} - {person.number}{" "}
              <Button personId={person.id} setPersons={setPersons} />
            </p>
          );
        })}
    </>
  );
};
