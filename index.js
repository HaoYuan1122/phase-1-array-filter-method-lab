// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(names,string){
    return names.filter(element=>element.toUpperCase()===string.toUpperCase())
}

// console.log(findMatching(drivers,"Bobby"))

function fuzzyMatch(names,string){
    function cb(element){
        const elementString=element.split('')
        const item0=[]
        const stringArray=string.split('')
        for(let item of elementString){
            item0.push(item)
            if (item0.toString()===stringArray.toString()){
                return true
            }
        }
    }
    return names.filter(cb)
}

// console.log(fuzzyMatch(drivers,"Bob"))

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(driver,string){
    function cb(element){
        return element.name===string
    }
    return driver.filter(cb)
}
console.log(matchName(drivers1,"Bobby"))

console.log(drivers1.filter(element=>element.name==="Bobby"))
