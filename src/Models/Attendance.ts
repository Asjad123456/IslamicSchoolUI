import { Student } from "./students";

export interface Attendance {
    id: number;
    date: string;
    isPresent: boolean;
    studentId: number;
    student: Student;
  }
  