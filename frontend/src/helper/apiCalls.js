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
