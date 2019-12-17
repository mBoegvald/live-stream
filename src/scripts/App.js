import Swiper from "../scripts/Swiper";
import ChangeNavColor from "../scripts/ChangeNavColor";
import FormValidation from "../scripts/FormValidation";
import ShowHeader from "../scripts/ShowHeader";
import Weather from "../scripts/Weather";
import HideNav from "../scripts/HideNav";
import SendMail from "../scripts/SendMail";

export default class App {
  constructor() {
    new Swiper();
    new ChangeNavColor();
    new FormValidation();
    new ShowHeader();
    new Weather();
    new HideNav();
    new SendMail();
  }
}
