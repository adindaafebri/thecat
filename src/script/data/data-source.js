import cats from "./cats.js";

class DataSource{
  static searchCat(keyword) {
    return fetch(`https://api.thecatapi.com/v1/breeds${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(respoonseJson => {
      if (respoonseJson.v1){
        return Promise.resolve(respoonseJson.v1);
      }else{
        return Promise.reject('${keyword} is not found');
      }
    });
  }
}

export default DataSource;