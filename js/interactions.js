(() => {
  const room = document.querySelector(".room");
  const bubble = document.querySelector(".feedback-bubble");
  const sheet = document.querySelector(".bottom-sheet");
  const sheetTitle = sheet.querySelector("h2");
  const sheetText = sheet.querySelector("p");
  const closeButton = sheet.querySelector(".bottom-sheet__close");
  const messages = {
    pet: "奶糖被摸得眯起眼啦！",
    "food-bowl": "饭饭马上就好！",
    ball: "要一起玩球吗？",
    bed: "软乎乎的小床～",
    window: "窗外天气真好！",
    cabinet: "柜子以后可以收纳物品。",
    lamp: "暖暖的小灯亮着呢。"
  };

  function react(element, message) {
    element.classList.remove("is-reacting");
    void element.offsetWidth;
    element.classList.add("is-reacting");
    bubble.textContent = message;
    bubble.classList.remove("is-visible");
    void bubble.offsetWidth;
    bubble.classList.add("is-visible");
    console.log(`[Room UI V1] ${message}`);
    window.setTimeout(() => element.classList.remove("is-reacting"), 600);
  }

  room.addEventListener("click", (event) => {
    const object = event.target.closest("[data-object]");
    if (!object) return;
    react(object, messages[object.dataset.object] || "发现了一个房间物件！");
  });

  document.querySelector(".bottom-nav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = window.PetRoom.actions[button.dataset.action];
    document.querySelectorAll(".nav-action").forEach((item) => item.classList.toggle("is-active", item === button));
    sheetTitle.textContent = action.title;
    sheetText.textContent = action.description;
    sheet.classList.add("is-open");
    sheet.setAttribute("aria-hidden", "false");
    console.log(`[Room UI V1] open drawer: ${button.dataset.action}`);
  });

  closeButton.addEventListener("click", () => {
    sheet.classList.remove("is-open");
    sheet.setAttribute("aria-hidden", "true");
    document.querySelectorAll(".nav-action").forEach((item) => item.classList.remove("is-active"));
  });
})();
