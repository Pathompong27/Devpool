let name_surename = prompt("กรุณากรอกชื่อและนามสกุล")
console.log(name_surename)
document.getElementById("demo").innerHTML=name_surename  
let length = name_surename.length
if (length/4 <=3) {
    document.getElementById("result").innerHTML = "Gryffindor"
    document.getElementById("result").innerHTML ="<img src = 'https://pbs.twimg.com/profile_images/1216630019822276608/XOVPFEWB_400x400.jpg' />"  }
    else if (length/4 <= 6) {
        document.getElementById("result").innerHTML = "Hufflepuff"
        document.getElementById("result").innerHTML = "<img src = 'https://static.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20161020182518' />"  }
        else if (length/4 <= 9) {   
        document.getElementById("result").innerHTML = "Ravenclaw" 
        document.getElementById("result").innerHTML = "<img src = 'https://static.wikia.nocookie.net/harrypotter/images/7/71/Ravenclaw_ClearBG.png/revision/latest?cb=20161020182442' />"   }
            else if (length/4 <= 12) {
                document.getElementById("result").innerHTML = "Slytherin"
                document.getElementById("result").innerHTML = "<img src ='https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest?cb=20161020182557' />" }
