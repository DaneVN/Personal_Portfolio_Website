import { projectsArray, elements } from "../objects.js";

elements.closeOverlayBtn.addEventListener("click", () => {
  //   elements.activePortfolioItemOverlay.open = false;
  console.log("hi");
});

for (let i = 0; i < elements.porfolioItemsList.length; i++) {
  const item = elements.porfolioItemsList[i];
  item.addEventListener("click", (event) => {
    //visibility
    elements.activePortfolioItemOverlay.open = true;
    //data
    elements.activePortfolioItemOverlay.innerHTML = `
    <div class="overlay__preview">
    <img class="overlay__blur" src="" /><img
    class="overlay__image"
    portfolio-item-image
    src="${projectsArray[i].imgPath}"
    />
    </div>
    <div class="overlay__content">
    <h3 class="overlay__title" portfolio-item-title>
    <a
    class="overlay__data"
    portfolio-item-subtitle
    href="${projectsArray[i].link}"
    target="_blank"
    > ${projectsArray[i].title}</a>
    </h3>
    <p
    class="overlay__data overlay__data_secondary"
    portfolio-item-description
    >${projectsArray[i].desc}</p>
    </div>
    
    <div class="overlay__row">
    <button
    class="overlay__button overlay__button_primary"
    portfolio-item-close
    >
    Close
    </button>
    </div>`;
  });
}
