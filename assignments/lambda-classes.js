// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
       return `${student.name} receives a perfect score on ${subject}`;
    }

    checkGrad(student){
        
        let randomNumber = Math.floor(Math.random() * 20) - 10; 
        student.grades = student.grades + randomNumber; 

        if(student.grades >= 70){
            return `${this.name} says ${student.name} has achieved a passing grade of ${student.grades} and is now a graduate of Lambda School!!`;
         }
         else{
             return `${student.name} needs more practice before graduating.`;
         }
    }
};

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grades = studentAttributes.grades;
    }
    listsSubjects(){
      
      return  `My name is ${this.name} and these are my favorite subjects:\n${this.favSubjects.join("\n")}`;
    }
    PRAssignment(subject){
    return `studen.name has submitted a PR for ${subject}`;
}
    sprintChallenge(subject){

       return `${this.name} has begun sprint challenge on ${subject}`;
    
    }

};

class ProjectManager extends Instructor{
    constructor(projectAttributes){
        super(projectAttributes)
        this.gradClassName = projectAttributes.gradClassName;
        this.favInstructor = projectAttributes.favInstructor;
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugCode(student,subject){
      return  `${this.name} debugs ${student.name}'s code on ${subject}`
    }
};


const steve = new Instructor({
    name:'Steve',
    age: 35,
    location:'San Francisco',
    gender:'M',
    specialty:'Front-End',
    favLanguage:'JavaScript',
    catchPhrase:`Let's Code`
});
const selma = new Instructor({
    name:'Selma',
    age: 28,
    location:'New York City',
    gender:'F',
    specialty:'Back-End',
    favLanguage:'SQL',
    catchPhrase:`Hello World`
});
const dan = new Instructor({
    name:'Dan',
    age: 45,
    location:'San Francisco',
    gender:'M',
    specialty:'Computer Science',
    favLanguage:'C++',
    catchPhrase:`01001000 01100101 01101100 01101100 01101111 00100001`
});

//Students
const brandon = new Student({
    name:'Brandon Allison',
    age: 34,
    location:'Maine',
    gender:'M',
    previousBackground: 'Director of Media',
    className: 'Web18',
    favSubjects: ['Html', 'CSS', 'JavaScript', 'AI' ],
    grades: 80
   
});
const josh = new Student({
    name:'Josh',
    age: 24,
    location:'Califronia',
    gender:'M',
    previousBackground: 'Mechanic',
    className: 'Web17', 
    favSubjects: ['React', 'CS', 'JavaScript'],
    grades: 63
    
});
const lindsay = new Student({
    name:'Lindsay',
    age: 56,
    location:'Florida',
    gender:'F',
    previousBackground: 'Cashier',
    className: 'WebPT4',
    favSubjects: ['Python', 'JavaScript', 'Java'],
    grades: 90
    
});

//PM's
const donald = new ProjectManager({
    name:'Donald',
    age: 22,
    location:'Texas',
    gender:'M',
    specialty:'Front-End',
    favLanguage:'JavaScript',
    catchPhrase:`Let's Code`,
    gradClassName: 'Web17',
    favInstructor: 'Dan'
});
const tina = new ProjectManager({
    name:'Tina',
    age: 33,
    location:'Vermont',
    gender:'F',
    specialty:'Back-End',
    favLanguage:'SQL',
    catchPhrase:`Hello World`,
    gradClassName: 'Web14',
    favInstructor: 'Dan'
});
const ryan = new ProjectManager({
    name:'Ryan',
    age: 21,
    location:'Arizona',
    gender:'M',
    specialty:'Computer Science',
    favLanguage:'C++',
    catchPhrase:`01001000 01100101 01101100 01101100 01101111 00100001`,
    gradClassName: 'CS2',
    favInstructor: 'Selma'
});


console.log('*************lambda-classes***************');
console.log(josh);
console.log(ryan.favInstructor);
console.log(dan.demo('C++'));
console.log(donald.standup('web18'));
console.log(brandon.listsSubjects());
console.log(josh.sprintChallenge('JavaScript'));
console.log(tina.debugCode(josh ,'JavaScript'));
console.log(dan.grade(lindsay, 'HTML'));
console.log(ryan.checkGrad(lindsay));
console.log(dan.checkGrad(josh));
console.log(ryan.demo('HTML'));
console.log(dan);
