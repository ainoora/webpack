import { SectionCreator } from "./join-us-section.js";
import "../styles/style.css";

document.addEventListener("DOMContentLoaded", function () {
  const sectionFactory = new SectionCreator();
  return sectionFactory.create("standard");
});
