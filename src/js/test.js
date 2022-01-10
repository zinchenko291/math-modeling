function reciveGrade(correctAnswers, totalAnswers) {
    let percent = correctAnswers / totalAnswers * 100;
    if (percent < 50) return 2;

    percent = 2 * percent - 100;
    if (percent >= 90) return 5;
    else if (percent < 90 && percent >= 45) return 4;
    else return 3;
}

let btn = document.querySelector("#checkAnswers");
let elems = document.querySelectorAll(".questionInput");

const checkAnswers = (e) => {
    if (e.which == 1 || e.code == "Enter" || e.code == "NumpadEnter") {
        let counter = 0;
        let totalQuestions = elems.length;
        elems.forEach((item, i, arr) => {

            if (item.dataset.type == undefined) {
                if (SHA256(item.value) == item.dataset.answer) {
                    counter++;
                    item.classList.remove("wrong");
                } else {
                    item.classList.add("wrong");
                }
            } 
            else {
                switch (item.dataset.type) {
                    case "box":
                        if (!item.classList.contains("b")) {
                            totalQuestions--;
                        } 
                        else{
                            const f = (a, b) => {return a*a*b - 4*a*b*b + 4*b*b*b}
                            let error = 5;
                            let V = f(Number(arr[i-1].value), Number(item.value))
                            if ( Number(item.dataset.volume) - error <= V && V <= Number(item.dataset.volume) + error ){
                                counter++;
                                item.parentElement.parentElement.classList.remove("wrong");
                            }
                            else {
                                item.parentElement.parentElement.classList.add("wrong");
                            }
                        }
                        break;
                    
                    case "wallpapers":
                        if (item.id != "N") {
                            totalQuestions--;
                        } 
                        else {
                            const f = (a, b, h) => {return Math.ceil((68/189) * h * (a + b)) + 1}
                            let a = Number(document.querySelector("#a").value);
                            let b = Number(document.querySelector("#b").value);
                            let h = Number(document.querySelector("#h").value);
                            if (f(a, b, h) == Number(item.value)) {
                                counter++;
                                item.parentElement.parentElement.classList.remove("wrong");
                            } 
                            else {
                                item.parentElement.parentElement.classList.add("wrong");
                            }
                        }
                        break;

                    default:
                        break;
                }
            }

        });
        alert(`Правильно ${counter} из ${totalQuestions}\nОценка: ${reciveGrade(counter, totalQuestions)}`);
    }
}

btn.addEventListener("click", checkAnswers);
document.addEventListener("keydown", checkAnswers);