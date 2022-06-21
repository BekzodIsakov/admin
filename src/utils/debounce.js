export const debounce = (f, ms) => {
  let isCoolDown = false;

  return (...args) => {
    if (isCoolDown) return;

    f.apply(this, args);

    isCoolDown = true;

    setTimeout(() => (isCoolDown = false), ms);
  };
};
