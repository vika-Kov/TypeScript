import { renderBlock } from "./lib.js";
/*renderSearchFormBlock и доработайте её следующим образом. Функция должна принимать дату въезда и дату выезда.
При этом минимальная дата, которую можно выбрать это дата сегодняшнего дня, а максимальная дата -
последний день следующего месяца. Будем считать это ограничениями сервиса.
По умолчанию поля заполняются следующим образом.
Дата въезда это следующий день от текущей даты.
Дата выезда - плюс два дня от даты въезда.
 */
function getNextDate(increment: number, startDate = new Date()): Date {
  let month = startDate.getMonth();
  let year = startDate.getFullYear();
  let day = startDate.getDate() + increment;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  if (day >= daysInMonth) {
    day = day - daysInMonth;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }
  return new Date(year, month, day);
}

function getNextMonth(startDate = new Date()): Date {
  const currentMonth = startDate.getMonth();
  const nextMonth = ((startDate.getMonth() + 1) % 12) + 1;
  let year = startDate.getFullYear();

  if (nextMonth < currentMonth) year++;

  return new Date(year, nextMonth, 0);
}

export function renderSearchFormBlock(
  checkInDate = new Date(0),
  checkOutDate = new Date(0)
) {
  if (checkInDate.valueOf() === 0) {
    checkInDate = getNextDate(2);
  }

  if (checkOutDate.valueOf() === 0) {
    checkOutDate = getNextDate(2, checkInDate);
  }

  const minDate = new Date().toISOString().substring(0, 10);
  const maxDate = getNextMonth().toISOString().substring(0, 10);

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-fieldset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>

<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->

        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate
              .toISOString()
              .substring(0, 10)}" 
            min="${minDate}"
            max="${maxDate}"
            name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate
              .toISOString()
              .substring(
                0,
                10
              )}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
