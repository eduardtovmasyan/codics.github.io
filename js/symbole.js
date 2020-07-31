function validate(input)
{
    const closeBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    if (!input.length) {
        show.innerHTML += ("TRUE")
        show.style = "color: #10c910; font-size: 85px;";

        return true;
    } else if (input.length % 2 !== 0) {
        return false;
    }

    let opened = [];

    for (let i = 0; i < input.length; i++) {
        if (
            input[i] === '{' ||
            input[i] === '(' ||
            input[i] === '['
        ) {
            opened.push(input[i]);
        } else if (closeBrackets[input[i]]) {
            if (opened.pop() !== closeBrackets[input[i]]) {
                return false;
            }
        }
    }

    if (!opened.length) {
        show.innerHTML += ("TRUE")
        show.style = "color: #10c910; font-size: 85px;";

        return true;
    } else {
        return false;
    }
}

function showError()
{
    show.innerHTML += 'FALSE';
    show.style = 'color: red; font-size: 77px;';
}

function validation()
{
    show.innerHTML = ("")

    const input = symbole.value;

    if (!validate(input)) {
        showError();
    }
}
