export interface Notification {
  id: number;
  type: string;
  message: string;
  read: boolean;
}

export const notifsTest: Notification[] = [
  {
    id: 1,
    type: "Announcement",
    message: "New Course Available: Introduction to Python Programming",
    read: false
  },
  {
    id: 2,
    type: "Assignment Due",
    message: "Math Homework due tomorrow. Submit it on time.",
    read: true
  },
  {
    id: 3,
    type: "Message",
    message: "Feedback on Assignment: Your instructor has left feedback on your recent assignment submission.",
    read: false
  },
  {
    id: 4,
    type: "Announcement",
    message: "Course Update: Important update regarding the course schedule. Please review the announcement for details.",
    read: false
  }
];


