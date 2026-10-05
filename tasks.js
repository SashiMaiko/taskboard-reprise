(function (root) {
  "use strict";

  function createTask(rawTitle, id) {
    if (rawTitle.length === 0) {
      throw new Error("Saisissez un titre.");
    }
    return { id, title: rawTitle, done: false };
  }

  const api = { createTask };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.TaskLogic = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
