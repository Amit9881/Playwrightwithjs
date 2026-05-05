var a = Array(5)
a=[1,2,3,4,5]

console.log(a.length)
console.log(a[1])


var mark =[11,12,14,13,16,13,20]

let mark1=mark.filter(mark=>mark%2 == 0)
console.log(mark1)

let mark2=mark1.map(mark1=>mark1*2)
console.log(mark2)

let alpha=['a','C','r','t','A','M','D']
console.log(alpha.sort())