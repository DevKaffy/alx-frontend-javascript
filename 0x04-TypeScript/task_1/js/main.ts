// Let's build a teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  readonly location: string;
  [key: string]: any;
}


// Extending the Teachers
interface Directors extends Teacher {
  numberOfReports: number;
}


//  3 Printing Teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe')); // Output: J. Doe


// Writing a Class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClass = new StudentClass('John', 'Doe');
// console.log(student.workOnHomework()); // Output: Currently working
// console.log(student.displayName()); // Output: John