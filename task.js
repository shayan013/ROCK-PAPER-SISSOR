function rps(yourChoice) {
    document.getElementById('rps').remove()
    var image = document.createElement('img')
    var div = document.getElementById('flex-rps')
    image.src = "rock.png";
    div.appendChild(image)



    let hc, bc;
    hc = yourChoice.id;
    let human_choice = rps_hc(hc);

    console.log("your choice " + human_choice)
    bc = rand_bc()
    console.log("bot choice " + bc)
    if (human_choice == 0 && bc == 1) {
        console.log("you lost")
    } else if (human_choice == 0 && bc == 2) {
        console.log("you won")

    } else if (human_choice == 1 && bc == 0) {
        console.log("you won")

    } else if (human_choice == 1 && bc == 2) {
        console.log("you lost")
    } else if (human_choice == 2 && bc == 1) {
        console.log("you won")
    } else if (human_choice == 2 && bc == 0) {
        console.log("you lost")

    } else {
        console.log("tied")

    }
}

function rand_bc() {
    return bchoices = Math.floor(Math.random() * 3)

}

function rps_hc(hc) {
    let hchoices = ['rock', 'paper', 'sissor']
    return hchoices.indexOf(hc)

}