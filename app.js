

// const all= weight + height +age

console.log('weight')
function calc(){
    const weight= parseFloat( document.getElementById('we').value)
    const height=  parseFloat( document.getElementById('he').value)
    const age=  parseFloat( document.getElementById('ag').value )
    const activity_level= parseFloat(document.getElementById('al').value)
    const BMR= 10 * weight + 6.25 * height -5 * age +5
    const caloris = activity_level * BMR
    const protien=weight * 2
    // const all= weight +height +age
    document.getElementById('res').innerHTML= ' your nedded calories per day is ' + caloris ;  
    document.getElementById('res2').innerHTML= ' your BMR is '+  BMR + "";
    document.getElementById('res3').innerHTML= ' your needed protein per day is '+  protien + "gm";
    // document.getElementById('res').innerHTML=all
    // console.log(weight)
    
}