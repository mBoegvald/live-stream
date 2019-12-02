import Slider from "./Swiper";
import ChangeNavColor from "./ChangeNavColor";
import FormValidation from "./FormValidation";
import ShowHeader from "./ShowHeader";

export default class App {
  constructor() {
    new Slider();
    new ChangeNavColor();
    new FormValidation();
    new ShowHeader();
  }
}
