function menubarDropdownHandler (id, arrow) {
    const dropdownContainer = document.getElementById(id);
    const dropdownArrow = document.getElementById(arrow);
    if(!dropdownArrow.classList.contains('rotate-180')){
        dropdownArrow.classList.add('rotate-180');
        dropdownContainer.classList.remove('h-0');
        dropdownContainer.classList.add('h-auto');
        dropdownContainer.classList.add('py-[23px]');
    }
    else{
        dropdownArrow.classList.remove('rotate-180')
        dropdownContainer.classList.add('h-0');
        dropdownContainer.classList.remove('h-auto');
        dropdownContainer.classList.remove('py-[23px]');
    }
}
