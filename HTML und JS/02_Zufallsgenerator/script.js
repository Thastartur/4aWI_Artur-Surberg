
  let ff = Math.floor(Math.random() * 50)
  console.log("Jaja: " + ff)


function generate(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value

    let randomNumbs = parseInt(num2) - parseInt(num1)

    let randomRes = Math.floor(Math.random() * randomNumbs) +  parseInt(num1)

    console.log("Random Nummer 1 = " + num1 + " und " + "Random Nummer 2 = " + num2)
    console.log("Random Res = " + randomRes)

    document.getElementById("Result").innerHTML = randomRes

}