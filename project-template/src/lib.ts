export function renderBlock(elementId, html) {
  const element = document.getElementById(elementId);
  element.innerHTML = html;
}

export function renderToast(message, action) {
  let messageText = "";

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || "Закрыть"}</button>
      </div>
    `;
  }

  renderBlock("toast-block", messageText);

  const button = document.getElementById("toast-main-action");
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null, null);
    };
  }
}

export function getUserData(): object {
  return {
    userName: localStorage.userName,
    avatar: localStorage.avatar,
  };
}

export function getFavoritesAmount(): number {
  return localStorage.favoriteItemsAmount;
}

export interface SearchFormData {
  city: string;
  checkInDate: Date;
  checkOutDate: Date;
  maxPrice: number;
}

export function search(searchValue: SearchFormData): void {
  console.log(searchValue);
}
