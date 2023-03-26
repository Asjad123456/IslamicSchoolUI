import { AttendanceRecord } from "./AttendanceRecord";

export interface Attendance {
  date: Date;
  classId: number;
  attendanceRecords: AttendanceRecord[];
}