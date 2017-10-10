export default class Ajax {
  static getPeople(url) {
    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
}
