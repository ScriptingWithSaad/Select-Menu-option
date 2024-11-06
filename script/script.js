let selectField = document.getElementById("SelectField");
        let selectText = document.getElementById("selectText");
        let options = document.getElementsByClassName("options");
        let list = document.querySelector(".list");

        selectField.onclick = function() {
            list.classList.toggle("hide");
        }

        for (let option of options) {
            option.onclick = function() {
                selectText.innerHTML = this.textContent;
            }
        }