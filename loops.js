const flag = true

if(flag){
    console.log('Flag is true')
}else{
    console.log('condition not satisfied')
}
console.log('******************')
let i = 0;
while(i<4){
    
    console.log(i)
    i++
}
//execute status once and then check the condition with do while loop
console.log('******************')

let j = 0;
do{
    j++
} 
while(j<4)
    console.log(j)

console.log('******************')

let n = 0
for (let k=1;k<=100;k++){

    if(k%2==0 && k%5==0){
        n++
        console.log(k)
        if(n==3){
            break
        }
    }
}
console.log('******************')

for (l=2;l<=20;l+=2){
    if(l%2==0 || l%5==0 ){
        console.log(l)
        
}
}
console.log('******************')