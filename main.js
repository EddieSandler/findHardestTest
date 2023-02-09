const findHardestTest = (arr) =>{


let gradesByTest = {}
let result = []
numTests=Object.values(gradesByStudent)[0].length
numStudents = Object.values(gradesByStudent).length


for(let i = 0 ; i <numTests; i ++) {
for ( let grade in gradesByStudent ){
  


  !gradesByTest[i] ? gradesByTest[i] = [gradesByStudent[grade][i]] : gradesByTest[i].push(gradesByStudent[grade][i])
  
  }


}
let testGrades= Object.keys(gradesByTest)
for (let test in gradesByTest){
  result.push(Math.floor((gradesByTest[test].reduce((a,b)=>a+b)/numStudents)))
  
}

const lowestAverage=Math.min(...result)
console.log('lowest Average')
console.log('Test: ',result.indexOf(lowestAverage)+1)

}



const gradesByStudent = {
  Ron:[90,89,99,87,100,74],
  Leslie:[78,74,92,87,77,81],
  Tom :[77,61,89,47,57,83],
  Andy:[35,54,44,58,39,41]
} 



findHardestTest(gradesByStudent)
