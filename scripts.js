document.addEventListener("DOMContentLoaded", function () {

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    let breakN = document.createElement('br');
    document.body.appendChild(breakN);
    let increment = 0;





    btn.addEventListener("click", function () {

        let div = document.createElement('div');
        let colors = ["red", "green", "orange", "blue", "indigo", "violet", "pink", "yellow"];

        div = document.createElement('div');
        div.id = increment;
        increment++;
        div.className = "black-square";

        div.setAttribute('style', ' height: 50px; width: 50px; display: inline-block');

        div.style.flexDirection = "row";
        btn.appendChild(div);
        document.getElementsByClassName("black-square")[0].style.backgroundColor = "black";

        document.body.appendChild(div);
        let innerDiv = document.createElement('innerDiv');

        document.body.appendChild(innerDiv);
        div.appendChild(innerDiv);


        div.ondblclick = function () {

            let idCompare = (this.id % 2);


            if ((this.id%2) == 0) {

                if (document.getElementById((this.id + 1)) == null) {
                    alert("Square does not exist.");
                } else {
                    document.getElementById((this.id + 1)).remove();
                }
            } else {
                if ((this.id%2) != 0) {
                    if (document.getElementById((this.id - 1)) == null) {
                        alert("Square does not exist.");
                    } else {
                        document.getElementById((this.id - 1)).remove();
                    }
                }
            }

        };

        div.onclick = function () {

            let random = colors[Math.floor((Math.random() * colors.length))];
            document.getElementById(this.id).style.backgroundColor = random;

        };




        div.onmouseover = function () {
            innerDiv.setAttribute('style', 'position: absolute; font-size: 1em; padding: 1em; color: white; text-align: center; display: block;');
            innerDiv.innerHTML = this.id;
        };

        div.onmouseout = function () {

            innerDiv.innerHTML = '';
        };


    })

})
