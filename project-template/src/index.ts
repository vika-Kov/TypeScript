import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast, getUserData, getFavoritesAmount } from "./lib.js";

localStorage.setItem("userName", "Ivan Petrovich");
localStorage.setItem("avatar", "./img/avatar.png");
localStorage.setItem("favoriteItemsAmount", "20");

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock(
    getUserData()["userName"],
    getUserData()["avatar"],
    getFavoritesAmount()
  );
  renderSearchFormBlock();
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
