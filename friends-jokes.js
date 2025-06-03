let arr=[
`Joey: Hey Pheebs, you wanna help?<br>
Phoebe: Oh, I wish I could, but I don't want to.<br>

<br>"The Pilot" (Season 1, Episode 1)`,

`Ross: Hey, Rachel, did you notice…<br>
Rachel: Your teeth? Yeah, I saw them from outside.<br>

<br>"The One with Ross' Teeth" (Season 6, Episode 8)`,

`Ross: I went to that tanning place your wife suggested.<br>
Chandler: Was that place the sun?<br>

<br>"The One with Ross's Tan" (Season 10, Episode 3)`,

`Nurse: And now, which of you is the father?<br>
Phoebe: No, none of them are the father. The father is my brother.<br>
Nurse: Okay...<br>

<br>"The One Hundredth" (Season 5, Episode 3)`,

`Monica: Okay, I've got a leg, three breasts, and a wing.<br>
Chandler: Well, how do you find clothes that fit?<br>

<br>"The One Where Old Yeller Dies" (Season 2, Episode 20)`,

`Monica: Why is your family Scottish?<br>
Chandler: Why is your family Ross?<br>

<br>"The One with Joey's New Brain" (Season 7, Episode 15)`,

`Janice: What a small world!<br>
Chandler: And yet I never run into Beyoncé!<br>

<br>"The One Where Estelle Dies" (Season 10, Episode 15)`]


function randomFunction(){
    let item=arr[Math.floor(Math.random()*arr.length)]
    document.getElementById("demo").innerHTML = `${item}`
    // console.log(item)
}
randomFunction()

