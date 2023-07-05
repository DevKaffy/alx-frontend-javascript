//  DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee'
    }
    workDirectorTasks(): string {
        return 'Working to director tasks'
    }
}

// Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Create a function createEmployee with the following requirements
function createEmployee(salary: number | string) {
if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
} else {
    return new Director();
}
}

// console.log(createEmployee(200)); // Output: Teacher
// console.log(createEmployee(1000)); // Output: Director
// console.log(createEmployee("$500")); // Output: Director


// Write a function isDirector
// it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director

function isDirector(employee: Director | Teacher): employee is Director {
return employee instanceof Director;
}

// Write a function executeWork
// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)){
        console.log (employee.workDirectorTasks());
    } else {
       console.log (employee.workTeacherTasks());
    }
}