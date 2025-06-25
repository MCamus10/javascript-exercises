const findTheOldest = function(peopleArr) {
    const actualYear = new Date().getFullYear()
    const isDead = function(people){
        if (people.yearOfDeath == undefined){
            return actualYear
        } else return people.yearOfDeath
    }
    const yearMax = peopleArr.map(isDead) //Replaces death year with actual year if still alive
    const birthYear = peopleArr.map((people) => people.yearOfBirth)
    
//Calculate and create age array
    let ageArr = []
    for (i=0; i< peopleArr.length; i++){
        ageArr.push(yearMax[i] - birthYear[i]) 
    }
   
//New people array including age (avoiding to modify original array)
    let peopleNew = peopleArr
    for (i=0 ; i < peopleArr.length; i++){
        peopleNew[i].age = ageArr[i]
    }
    
//Sorting the new array by age, descending
    peopleNew.sort((a, b) => b.age - a.age)
    
//Find the oldest in the original array
    const oldestIndex = peopleArr.findIndex(person => person.name == peopleNew[0].name)

    return peopleArr[oldestIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
