

// const all= weight + height +age

console.log('weight')
function calc(){
    const weight= parseInt( document.getElementById('we').value)
    const height=  parseInt( document.getElementById('he').value)
    const age=  parseInt( document.getElementById('ag').value )
    const activity_level= parseFloat(document.getElementById('al').value)
    const BMR= 10 * weight + 6.25 * height -5 * age +5
    const caloris = activity_level * BMR
    // const all= weight +height +age
    document.getElementById('res').innerHTML= ' your nedded calories per day is ' + caloris
    document.getElementById('res2').innerHTML= ' your BMR is '+  BMR
    // document.getElementById('res').innerHTML=all
    // console.log(weight)
    
}