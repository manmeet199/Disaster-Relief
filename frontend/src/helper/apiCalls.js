export const registerPerson = (user) => {
  const formData = new FormData();
  for (const dataName in user) {
    formData.append(dataName, user[dataName]);
  }
  return fetch(`http://127.0.0.1:8000/api/user/register/`, {
    method: `POST`,
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getMissingPersonDetail = (id) => {
  return fetch(`http://127.0.0.1:8000/api/search/`, { method: `GET` })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addMissingPerson = (personDetail) => {
  const formData = new FormData();
  for (const dataName in personDetail) {
    formData.append(dataName, personDetail[dataName]);
  }
  return fetch(`http://127.0.0.1:8000/api/search/add-missing-person/`, {
    method: `POST`,
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserLocations = () => {
  return fetch(`http://127.0.0.1:8000/api/user/loc-list/`, { method: `GET` })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addUserLocation = (personData) => {
  const formData = new FormData();
  for (const dataName in personData) {
    formData.append(dataName, personData[dataName]);
  }
  return fetch(`http://127.0.0.1:8000/api/user/add-loc/`, {
    method: `POST`,
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
