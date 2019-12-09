import Swiper from "../scripts/Swiper";
import ChangeNavColor from "../scripts/ChangeNavColor";
import FormValidation from "../scripts/FormValidation";
import ShowHeader from "../scripts/ShowHeader";
import Weather from "../scripts/Weather";

export default class App {
  constructor() {
    new Swiper();
    new ChangeNavColor();
    new FormValidation();
    new ShowHeader();
    new Weather();
  }
}
