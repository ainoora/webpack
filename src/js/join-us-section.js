import validate from "./email-validator.js";
class AddSection {
  constructor(title, btn) {
    this.title = title;
    this.btn = btn;
  }
  createJoinUsSection() {
    const joinUsSection = document.querySelector(".app-section--join-us");

    const titleText = document.createElement("h2");
    titleText.className = "app-title";
    titleText.textContent = this.title; //implementation
    joinUsSection.appendChild(titleText);

    const subTitleText = document.createElement("p");
    subTitleText.className = "app-subtitle app-subtitle--join-us";
    subTitleText.textContent =
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    joinUsSection.appendChild(subTitleText);

    const inputField = document.createElement("form");
    inputField.className = "app-section__input";
    joinUsSection.appendChild(inputField);

    const inputEmail = document.createElement("input");
    inputEmail.className = "app-section__input-email";
    inputEmail.type = "email";
    inputEmail.placeholder = "Email";
    inputField.appendChild(inputEmail);

    const inputBtn = document.createElement("button");
    inputBtn.className = "app-section__button app-section__button--subscribe";
    inputBtn.textContent = this.btn; //implementation
    inputField.appendChild(inputBtn);

    inputField.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validate(inputEmail.value) == true) {
        console.log(inputEmail.value);
      } else{
        window.alert(validate(inputEmail.value))
      }
    });
  }
}

class SectionCreator {
  create(type) {
    switch (type) {
      case "standard":
        return new AddSection(
          "Join Our Program",
          "Subscribe"
        ).createJoinUsSection();
      case "advanced":
        return new AddSection(
          "Join Our Advanced Program",
          "Subscribe to Advanced Program"
        ).createJoinUsSection();
    }
  }
}
export { AddSection, SectionCreator };
