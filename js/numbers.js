function draw() {
    let number = document.getElementById('number').value
    show.innerHTML = ("")
    number = parseInt(number)

    if (number < 10 && number >= 0) {

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 10; j++) {
            if (i == 0 || i == 15 || j == 0 || j == 9) {
                show.innerHTML += (" * &nbsp;&nbsp;")
            } else {
                if (number == 0) {
                    if (j == 2 || j == 7 ||
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7))
                    ) {
                        show.innerHTML += ("00 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 1) {
                    if (j == 5 ||
                        (j == 4 && i == 2) ||
                        (j == 3 && i == 3) ||
                        (j == 2 && i == 4) ||
                        (j == 1 && i == 5)
                    ) {
                        show.innerHTML += ("11 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 2) {
                    if (
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7)) ||
                        (j == 7 && (i >= 1 && i <= 7)) ||
                        (j == 2 && (i >= 7 && j <= 14))
                    ) {
                        show.innerHTML += ("22 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 3) {
                    if (j == 7 ||
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7)) ||
                        (j == 7 && (i >= 1 && i <= 7))
                    ) {
                        show.innerHTML += ("33 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 4) {
                    if (j == 7 ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (j == 2 && (i >= 1 && i <= 7)) ||
                        (j == 7 && (i >= 1 && i <= 7))
                    ) {
                        show.innerHTML += ("44 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 5) {
                    if (
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7)) ||
                        (j == 2 && (i >= 1 && i <= 7)) ||
                        (j == 7 && (i >= 7 && j <= 14))
                    ) {
                        show.innerHTML += ("55 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 6) {
                    if (j == 2 ||
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7)) ||
                        (j == 7 && (i >= 7 && j <= 14))
                    ) {
                        show.innerHTML += ("66 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 7) {
                    if (j == 7 ||
                        (i == 1 && (j >= 2 && j <= 7))
                    ) {
                        show.innerHTML += ("77 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 8) {
                    if (j == 2 || j == 7 ||
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7))
                    ) {
                        show.innerHTML += ("88 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }

                if (number == 9) {
                    if (j == 7 ||
                        (i == 1 && (j >= 2 && j <= 7)) ||
                        (i == 7 && (j >= 2 && j <= 7)) ||
                        (j == 2 && (i >= 1 && i <= 7)) ||
                        (i == 14 && (j >= 2 && j <= 7))
                    ) {
                        show.innerHTML += ("99 &nbsp;")
                    } else(show.innerHTML += (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"))
                }
            }
        }
        show.innerHTML += ("<br>")
    }
} else {
    alert('number must be between 0 and 9')
  }
}
