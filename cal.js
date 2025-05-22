let body = document.getElementById("body");
        body.style.backgroundColor = "thistle";

        let container = document.getElementById("container");
        container.style.textAlign = "center";
        container.style.marginTop = "200px";
        container.style.border="2px, black,solid";
        container.style.width="fit-content";
        container.style.marginLeft="40%";
        

        let display = document.getElementById("display");
        display.style.width = "180px";
        display.style.height = "50px";

        let expression = "";

        let one = document.getElementById("one");
        one.addEventListener("click", () => {
            expression += "1";
            display.value = expression;
        });

        let two = document.getElementById("two");
        two.addEventListener("click", () => {
            expression += "2";
            display.value = expression;
        });

        let three = document.getElementById("three");
        three.addEventListener("click", () => {
            expression += "3";
            display.value = expression;
        });

        let four = document.getElementById("four");
        four.addEventListener("click", () => {
            expression += "4";
            display.value = expression;
        });

        let five = document.getElementById("five");
        five.addEventListener("click", () => {
            expression += "5";
            display.value = expression;
        });

        let six = document.getElementById("six");
        six.addEventListener("click", () => {
            expression += "6";
            display.value = expression;
        });

        let seven = document.getElementById("seven");
        seven.addEventListener("click", () => {
            expression += "7";
            display.value = expression;
        });

        let eig = document.getElementById("eig");
        eig.addEventListener("click", () => {
            expression += "8";
            display.value = expression;
        });

        let nine = document.getElementById("nine");
        nine.addEventListener("click", () => {
            expression += "9";
            display.value = expression;
        });

        let zero = document.getElementById("zero");
        zero.addEventListener("click", () => {
            expression += "0";
            display.value = expression;
        });

        
        document.getElementById("plus").addEventListener("click", () => {
            expression += "+";
            display.value = expression;
        });

        document.getElementById("minus").addEventListener("click", () => {
            expression += "-";
            display.value = expression;
        });

        document.getElementById("mul").addEventListener("click", () => {
            expression += "*";
            display.value = expression;
        });

        document.getElementById("div").addEventListener("click", () => {
            expression += "/";
            display.value = expression;
        });

        document.getElementById("mod").addEventListener("click", () => {
            expression += "%";
            display.value = expression;
        });

        
        document.getElementById("equals").addEventListener("click", () => {
            try {
                let result = eval(expression);
                display.value = result;
                expression = result.toString();
            } catch {
                display.value = "Error";
                expression = "";
            }
        });


        let clear=document.getElementById("clear");
        clear.style.width="230px"
        
        clear.addEventListener("click", () => {
            expression = "";
            display.value = "";
        });