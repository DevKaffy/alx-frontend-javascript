namespace Subjects {
    export class Java extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Java";
      }
      getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingJava) {
            return `AvailableTeacher: ${this.teacher.firstName}`;
        } else {
            return 'No available Teacher'
        }
      }
    }
}