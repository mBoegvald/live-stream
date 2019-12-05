export default class ShowHeader {
  constructor() {
    setTimeout(function() {
      document.querySelector(".heading").classList.add("show");
    }, 1000);
  }
}
