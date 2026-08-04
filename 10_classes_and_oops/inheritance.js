
class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
    }
}

const school = new teacher("Adnan","adnan@teacher.com","123")
const college = new user("Abdeali")
school.addCourse()
college.logMe()
console.log(school === college);
console.log(school instanceof teacher);
console.log(school instanceof user);

