export default class ShowHeader {
  constructor() {
    setTimeout(function() {
      document.querySelector(".container>.col-6").classList.add("show");
    }, 1000);
  }
}
