function menubarDropdownHandler(id, arrow) {
    const dropdownContainer = document.getElementById(id);
    const dropdownArrow = document.getElementById(arrow);
    if (!dropdownArrow.classList.contains('rotate-180')) {
        dropdownArrow.classList.add('rotate-180');
        dropdownContainer.classList.remove('h-0');
        dropdownContainer.classList.add('h-auto');
        dropdownContainer.classList.add('py-[23px]');
    }
    else {
        dropdownArrow.classList.remove('rotate-180')
        dropdownContainer.classList.add('h-0');
        dropdownContainer.classList.remove('h-auto');
        dropdownContainer.classList.remove('py-[23px]');
    }
}

function handleInstallmentToggle() {
    const monthly = document.getElementById('monthly');
    const yearly = document.getElementById('yearly');
    const installmentToggle = document.getElementById('installmentToggle');
    if (!installmentToggle.classList.contains('right-0')) {
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


function mobileMenubarHandler (id) {
    const menubar = document.getElementById(id);
    if(!menubar.classList.contains('left-0')) {
        menubar.classList.remove('-left-[1024px]');
        menubar.classList.add('left-0');
    }
    else {
        menubar.classList.remove('left-0');
        menubar.classList.add('-left-[1024px]');
    }
}

function accordionHandler (accordion) {
    const accordionSign = accordion.children[0].children[1];
     console.log(accordionSign);
     const accordionCard = accordion.children[1];
     if(!accordionSign.classList.contains('rotate-45')){
        if(accordionSign.classList.contains('accordion-collapse-sign')){
            accordionSign.classList.add('rotate-45');
        }
        else{
            accordionSign.classList.add('rotate-90');
        }
        accordionCard.classList.remove('hidden', 'h-0');
        accordionCard.classList.add('mt-6')
     }
     else{
        accordionSign.classList.remove('rotate-45');
        accordionCard.classList.add('hidden', 'h-0');
        accordionCard.classList.remove('mt-6')
     }
}

function handleSignUp () {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const signUpText = document.getElementById('sign-up-text');
    const signInText = document.getElementById('sign-in-text');

    if(!signIn.classList.contains('hidden')){
        signIn.classList.add('hidden');
        signInText.classList.remove('text-[#262729]');
        signInText.classList.add('text-[#BDBCBC]');
    }

    if(signUp.classList.contains('hidden')){
        signUp.classList.remove('hidden');
        signUpText.classList.remove('text-[#BDBCBC]');
        signUpText.classList.add('text-[#262729]');
    }
    else{
        signUp.classList.add('hidden');
        signUpText.classList.remove('text-[#262729]');
        signUpText.classList.add('text-[#BDBCBC]');
    }

}
function handleSignIn () {
    const signUp = document.getElementById('sign-up');
    const signIn = document.getElementById('sign-in');
    const signUpText = document.getElementById('sign-up-text');
    const signInText = document.getElementById('sign-in-text');

    if(!signUp.classList.contains('hidden')){
        signUp.classList.add('hidden');
        signUpText.classList.remove('text-[#262729]');
        signUpText.classList.add('text-[#BDBCBC]');
    }

    if(signIn.classList.contains('hidden')){
        signIn.classList.remove('hidden');
        signInText.classList.remove('text-[#BDBCBC]');
        signInText.classList.add('text-[#262729]');
    }
    else{
        signIn.classList.add('hidden');
        signInText.classList.remove('text-[#262729]');
        signInText.classList.add('text-[#BDBCBC]');

    }

}