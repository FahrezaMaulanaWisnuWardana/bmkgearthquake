const axios = require("axios")
exports.headLine = () =>{
  return axios.get("https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log(err);
  });
}
exports.listNews = () =>{
    return axios.get("https://cors-anywhere.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err);
    });
}