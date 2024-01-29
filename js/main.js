document.getElementById('akali').onclick = starAkali
document.getElementById('senna').onclick = starSenna
document.getElementById('kaisa').onclick = starKaisa
document.getElementById('zoe').onclick = starZoe
document.getElementById('janna').onclick = starJanna
document.getElementById('syndra').onclick = starSyndra
document.getElementById('tali').onclick = starTali
document.getElementById('ori').onclick = starOri
document.getElementById('sona').onclick = starSona

function starAkali() {
  document.querySelector('body').style.backgroundImage = "url('./img/starAkaliBackground.jpg')"
  document.querySelector('#title').innerText = "Akali"
  document.querySelector('#intro').innerText = akaliIntro

}

function starSenna() {
  document.querySelector('body').style.backgroundImage = "url('./img/starSennaBackground.jpg')"
  document.querySelector('#title').innerText = "Senna"
  document.querySelector('#intro').innerText = sennaIntro
}

function starKaisa() {
  document.querySelector('body').style.backgroundImage = "url('./img/starKaisaBackground.jpg')"
  document.querySelector('#title').innerText = "Kai\'sa"
  document.querySelector('#intro').innerText = kaisaIntro
}

function starZoe() {
  document.querySelector('body').style.backgroundImage = "url('./img/starZoeBackground.jpg')"
  document.querySelector('#title').innerText = "Zoe"
  document.querySelector('#intro').innerText = zoeIntro
}

function starJanna() {
  document.querySelector('body').style.backgroundImage = "url('./img/starJannaBackground.jpg')"
  document.querySelector('#title').innerText = "Janna"
  document.querySelector('#intro').innerText = jannaIntro
}

function starSyndra() {
  document.querySelector('body').style.backgroundImage = "url('./img/starSyndraBackground.jpg')"
  document.querySelector('#title').innerText = "Syndra"
  document.querySelector('#intro').innerText = syndraIntro
}

function starTali() {
  document.querySelector('body').style.backgroundImage = "url('./img/starTaliBackground.jpg')"
  document.querySelector('#title').innerText = "Taliyah"
  document.querySelector('#intro').innerText = taliIntro
}

function starOri() {
  document.querySelector('body').style.backgroundImage = "url('./img/starOriBackground.jpg')"
  document.querySelector('#title').innerText = "Orianna"
  document.querySelector('#intro').innerText = oriIntro
}

function starSona() {
  document.querySelector('body').style.backgroundImage = "url('./img/starSonaBackground.jpg')"
  document.querySelector('#title').innerText = "Sona"
  document.querySelector('#intro').innerText = sonaIntro
}

/******************************************
/* INTRODUCTIONS
/*******************************************/


let akaliIntro = "A street-smart, gregarious city girl with an upbeat attitude, Akali's life is turned upside-down by the appearance of the Star Guardians... and the destruction that follows them."

let sennaIntro = "Years spent battling the darkness alone has emboldened Senna’s resolve, but it also hardened her emotions. After all, when you’re a Star Guardian, you know losing loved ones is inevitable. "

let kaisaIntro = "A natural born leader and defender of the weak, Kai’Sa idolizes the Star Guardians as well as all that they stand for."

let zoeIntro = "A member of the ancient, first group of Star Guardians, Zoe’s heart desired not love, but chaos - twisting her newfound power into a malignant expression of cosmic madness."

let jannaIntro = "A veteran Star Guardian, Janna now mentors the young and impressionable Lux. This seasoned Guardian rarely offers information about her mysterious past, and often seems preoccupied with memories of another place and time in her life."

let syndraIntro = "Feared and admired, Syndra is a formidable Star Guardian from an earlier era. Like Janna, her history is cloaked in shadow, but it's clear as day that she is an ambitious warrior who is quick to dismiss those she deems unworthy of her time."

let taliIntro = "Unsure of who she is or who she wants to be, Taliyah was at a crossroads long before she took the Star Guardian oath... and now must balance her personal journey with fighting city-destroying monsters."

let oriIntro = "When this robot girl wished upon the First Star, it granted her deepest desire: to become human. With that gift came all the responsibilities of a Star Guardian, responsibilities that Orianna took eagerly."

let sonaIntro = "Born mute, Sona is a kind, reflective soul who prefers to spend her time in quiet solitude. While she has trouble dealing with crowds and dislikes being out in public when not in her Guardian uniform, she is learning to find her own song in a sea of voices."
