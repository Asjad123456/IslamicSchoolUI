export interface MarkAttendance{
    id: string;
    date: Date;
    isPresent: boolean;
    studentId: number;
    studyClassId: number;
}