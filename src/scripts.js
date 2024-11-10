import { projectsArray, comingSoonArray, elements } from "../objects.js";

elements.closeOverlayBtn.addEventListener("click", () => {
  elements.activePortfolioItemOverlay.open = false;
});

for (let i = 0; i < elements.porfolioItemsList.length; i++) {
  const item = elements.porfolioItemsList[i];
  item.addEventListener("click", () => {
    //visibility
    elements.activePortfolioItemOverlay.open = true;
    //data
    elements.portfolioInformation.innerHTML = `
    <div class="overlay__preview">
        <img class="overlay__blur" src="" /><img
          class="overlay__image"
          data-portfolio-item-image
          src="${projectsArray[i].imgPath}"
        />
      </div>
      <div class="overlay__content">
        <h3 class="overlay__title" data-portfolio-item-title>
          <a
            class="overlay__data"
            portfolio-item-subtitle
            href="${projectsArray[i].link}"
            target="_blank"
          >${projectsArray[i].title}</a>
        </h3>
        <p
          class="overlay__data overlay__data_secondary"
          data-portfolio-item-description
        >${projectsArray[i].desc}</p>
      </div>`;
  });
}

for (let i = 0; i < elements.comingSoonItemList.length; i++) {
  const item = elements.comingSoonItemList[i];
  item.addEventListener("click", () => {
    //visibility
    elements.activePortfolioItemOverlay.open = true;
    elements.portfolioInformation.innerHTML = `
    <div class="overlay__preview">
        <img class="overlay__blur" src="" /><img
          class="overlay__image"
          data-portfolio-item-image
          src="${comingSoonArray[i].imgPath}"
        />
      </div>
      <div class="overlay__content">
        <h3 class="overlay__title" data-portfolio-item-title>
          <a
            class="overlay__data"
            portfolio-item-subtitle
            href="${comingSoonArray[i].link}"
            target="_blank"
          >${comingSoonArray[i].title}</a>
        </h3>
        <p
          class="overlay__data overlay__data_secondary"
          data-portfolio-item-description
        >( Coming: ${comingSoonArray[i].ETC} ) ${comingSoonArray[i].description}</p>
      </div>`;
  });
}
