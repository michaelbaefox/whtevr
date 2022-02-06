let ageChecker = (age) => {
    if (!Number.isFinite(age)){
        alert("Please enter a number, duuuuuuuh")
        return
    }
    if (age < 1) {
        alert("You are too young to exist")
        return
    }
   alert("you are " + age)

    if (age < 16) {

       alert("not allowed to drive ")

    } else if (age < 21) {

       alert("you are totally allowed to drive, you can't drink, tho")

    } else {

       alert("you may be SO OLD. you can drink, and drive, but not at the same time")

    }

}



export default ageChecker

