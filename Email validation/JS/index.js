//data fetching

let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "TVneelt657",
    "email": "TVneelt657@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {  //"in click" "c" must be "c"
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = ` <img width="120" src="img/loading.svg" alt="">`

    let key = "ema_live_02NNhFlWOm32vXyCZaH4dsIo9RdjCvw9PUyfSetk";
    let email = document.getElementById("username").value    
    

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let res = await fetch(url)
    let result = await res.json()    //?

    // for result display

    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !=="" && result[key] !==" "){        //?
            str = str + `<div>${key}: ${result[key]}</div>` //?
        }
        
    }

    console.log(str)
    resultCont.innerHTML = str
})





