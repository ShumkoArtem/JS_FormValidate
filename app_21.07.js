const form = document.forms["form"];


form.addEventListener("input", inputHandler);

function inputHandler({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-Reg");
    const reg = new RegExp(inputReg);

    if (reg.test(inputValue)) {
        el.style.borderBottom = "1px solid green";
        el.setAttribute("is-valid", "1");
    } else {
        el.style.borderBottom = "1px solid red";
        el.setAttribute("is-valid", "2");
    }
}