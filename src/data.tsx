import { MdDashboard,MdAssessment,MdFeedback,MdPayments} from "react-icons/md";
import { FaBookOpen } from "react-icons/fa"
import { IoNotifications, IoSettings } from "react-icons/io5"


export const LINKS = [
    {
        id: 0,
        title: 'Dashboard',
        link: '/dashboard',
        icon:  <MdDashboard />
    },
    {
        id: 1,
        title: 'Courses',
        link: '/dashboard/courses',
        icon:  <FaBookOpen />
    },
    {
        id: 2,
        title: 'Assessment',
        link: '/dashboard/assessment',
        icon:  <MdAssessment />
    },
    {
        id: 3,
        title: 'Notification',
        link: '/dashboard/notification',
        icon:  <IoNotifications />
    },
    {
        id: 4,
        title: 'Feedback',
        link: '/dashboard/feedback',
        icon:  <MdFeedback />
    },
    {
        id: 5,
        title: 'Payment',
        link: '/dashboard/payment',
        icon:  < MdPayments />
    },
    {
        id: 6,
        title: 'Settings',
        link: '/dashboard/settings',
        icon:  < IoSettings />
    },
]