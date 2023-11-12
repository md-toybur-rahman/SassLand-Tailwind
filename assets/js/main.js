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

function handleInstallmentToggle () {
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');
    const installmentToggle = document.getElementById('installmentToggle');
    if(!installmentToggle.classList.contains('right-0')) {
        installmentToggle.classList.remove('left-0');
        installmentToggle.classList.add('right-0');
        monthly.classList.remove('text-white');
        monthly.classList.add('text-[#BABAC6]');
        yearly.classList.remove('text-[#BABAC6]');
        yearly.classList.add('text-white');
    }
    else {
        installmentToggle.classList.remove('right-0');
        installmentToggle.classList.add('left-0');
        yearly.classList.remove('text-white');
        yearly.classList.add('text-[#BABAC6]');
        monthly.classList.remove('text-[#BABAC6]');
        monthly.classList.add('text-white');
    }
}