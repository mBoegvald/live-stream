import Swiper from "./Swiper";
import ChangeNavColor from "./ChangeNavColor";
import FormValidation from "./FormValidation";
import ShowHeader from "./ShowHeader";
import Weather from "./Weather";
import PreventRedirect from "./preventRedirect";

export default class App {
  constructor() {
    new Swiper();
    new ChangeNavColor();
    new FormValidation();
    new ShowHeader();
    new Weather();
    new PreventRedirect();
  }
}
