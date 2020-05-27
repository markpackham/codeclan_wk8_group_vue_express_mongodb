// Placeholder for backend Express MongoDB Extension work
const baseURL = "http://localhost:3000/api/facts/";

export default {
  // INDEX
  getFacts() {
    return fetch(baseURL).then((res) => res.json());
  },

  // CREATE
  addFact(fact) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(fact),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  // DESTROY
  deleteFact(id) {
    return fetch(baseURL + id, {
      method: "DELETE",
    });
  },

};
