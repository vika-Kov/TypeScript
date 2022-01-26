import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import {
  renderToast,
  getUserData,
  getFavoritesAmount,
  userData,
} from "./lib.js";

const newUser: userData = {
  userName: "Johan Bach",
  avatar: "./img/avatar.png",
};

localStorage.setItem("newUser", JSON.stringify(newUser));
localStorage.setItem("userName", "Ivan Petrovich");
localStorage.setItem("avatar", "./img/avatar.png");
localStorage.setItem("favoriteItemsAmount", "20");

window.addEventListener("DOMContentLoaded", () => {
  const user: userData = getUserData();

  renderUserBlock(user.userName, user.avatar, getFavoritesAmount());
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
