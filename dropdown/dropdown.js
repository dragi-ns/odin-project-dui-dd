function initDropdown() {
  function handleActivation(dropDownMenu) {
    if (dropDownMenu.dataset.expanded === 'true') {
      // eslint-disable-next-line no-param-reassign
      dropDownMenu.dataset.expanded = false;
    } else {
      // eslint-disable-next-line no-param-reassign
      dropDownMenu.dataset.expanded = true;
    }
  }

  const dropDowns = document.querySelectorAll('.drop-down');
  dropDowns.forEach((dropDown) => {
    const dropDownTrigger = dropDown.querySelector('[data-target]');
    const dropDownMenu = dropDown.querySelector('[data-menu]');
    const hoverActivation = dropDownTrigger.dataset.hover === 'true';
    if (hoverActivation) {
      dropDown.addEventListener(
        'mouseenter',
        handleActivation.bind(null, dropDownMenu)
      );
      dropDown.addEventListener(
        'mouseleave',
        handleActivation.bind(null, dropDownMenu)
      );
    } else {
      dropDownTrigger.addEventListener(
        'click',
        handleActivation.bind(null, dropDownMenu)
      );
    }
  });
}

export default initDropdown;
