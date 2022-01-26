export interface userData {
  userName: string;
  avatar: string;
}

interface Message {
  text: string;
  type: string;
}

interface Action {
  name: string;
  handler: Function;
}

export function renderBlock(elementId: string, html: string) {
  const element = document.getElementById(elementId) as HTMLElement;
  element.innerHTML = html;
}

export function renderToast(message: Message | null, action: Action | null) {
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

export function getUserData(): userData {
  return JSON.parse(localStorage["newUser"]);
}

export function getFavoritesAmount(): number {
  return localStorage["favoriteItemsAmount"];
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
