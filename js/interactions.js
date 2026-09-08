(() => {
  const room = document.querySelector(".room");
  const bubble = document.querySelector(".feedback-bubble");
  const sheet = document.querySelector(".bottom-sheet");
  const backdrop = document.querySelector(".sheet-backdrop");
  const sheetTitle = sheet.querySelector("h2");
  const sheetText = sheet.querySelector("p");
  const sheetOptions = sheet.querySelector(".bottom-sheet__options");
  const sheetStatus = sheet.querySelector(".bottom-sheet__status");
  const closeButton = sheet.querySelector(".bottom-sheet__close");
  const hearts = document.querySelector(".pet-hearts");
  let lastTrigger = null;
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

  function showHearts() {
    hearts.classList.remove("is-visible");
    void hearts.offsetWidth;
    hearts.classList.add("is-visible");
  }

  function openSheet(actionName, trigger) {
    const action = window.PetRoom.actions[actionName];
    if (!action) return;

    lastTrigger = trigger;
    document.querySelectorAll(".nav-action").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.action === actionName);
    });
    sheetTitle.textContent = action.title;
    sheetText.textContent = action.description;
    sheetStatus.textContent = "目前为交互预览，不会改变宠物数值。";
    sheetOptions.replaceChildren(...action.options.map((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sheet-option";
      button.dataset.option = option.label;
      button.setAttribute("role", "listitem");
      button.innerHTML = `<span aria-hidden="true">${option.icon}</span><strong>${option.label}</strong>`;
      return button;
    }));
    backdrop.classList.add("is-visible");
    sheet.classList.add("is-open");
    sheet.removeAttribute("inert");
    sheet.setAttribute("aria-hidden", "false");
    window.setTimeout(() => closeButton.focus(), 330);
    console.log(`[Interaction UI V1] open drawer: ${actionName}`);
  }

  function closeSheet() {
    if (!sheet.classList.contains("is-open")) return;
    sheet.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    sheet.setAttribute("aria-hidden", "true");
    sheet.setAttribute("inert", "");
    document.querySelectorAll(".nav-action").forEach((item) => item.classList.remove("is-active"));
    lastTrigger?.focus();
  }

  room.addEventListener("click", (event) => {
    const object = event.target.closest("[data-object]");
    if (!object) return;
    const objectName = object.dataset.object;

    if (objectName === "pet") showHearts();
    if (objectName === "food-bowl") openSheet("food", object);
    if (objectName === "ball") openSheet("play", object);
    if (objectName === "bed") openSheet("sleep", object);

    if (objectName === "window") {
      const roomTime = new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit" }).format(new Date());
      react(object, `窗外正是 ${roomTime}`);
      return;
    }

    react(object, messages[objectName] || "发现了一个房间物件！");
  });

  document.querySelector(".bottom-nav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    openSheet(button.dataset.action, button);
  });

  sheetOptions.addEventListener("click", (event) => {
    const option = event.target.closest("[data-option]");
    if (!option) return;
    sheetStatus.textContent = `${option.dataset.option}将在后续功能版本中开放。`;
    option.classList.remove("is-selected");
    void option.offsetWidth;
    option.classList.add("is-selected");
  });

  closeButton.addEventListener("click", closeSheet);
  backdrop.addEventListener("click", closeSheet);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSheet();
  });
})();
