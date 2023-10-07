
// MUI: Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SnapchatIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Twitter';


// Data object that contains all of the data for the template.
const data = {
    profile: {
        name: "Sara Friends",
        address: "C Java Place, Lowell, MA 07646",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
        contacts: [
            { icon: PhoneIcon, label: "Phone", value: "(978) 123-4567" },
            { icon: EmailIcon, label: "Email", value: "sara_friends@student.uml.edu" },
            { icon: HomeIcon, label: "Address", value: "123 Main St, City, Country" }
        ],
        skills: [
            { category: "Programming Languages:", skills: "C/C++, Java, Assembly" },
            { category: "Scripting Languages:", skills: "Bash Shell, HTML" },
            { category: "Operating Systems:", skills: "Unix/Linux, Mac OSX, Windows XP & Vista" },
            { category: "Documentation:", skills: "MS Word, Excel, PowerPoint & Visio" },
        ],
        socialMedia: [
            { icon: FacebookIcon },
            { icon: InstagramIcon },
            { icon: LinkedInIcon },
            { icon: TwitterIcon },
            { icon: SnapchatIcon },
            { icon: PinterestIcon },
        ],
        education: [
            {
                degree: "M.S. in Computer Science",
                date: "Anticipated May 20xx",
                school: "University of Massachusetts Lowell - Lowell, MA",
                gpa: "Overall GPA: 3.33, GPA in Major: 3.50"
            },
            {
                degree: "B.S. in Computer Science",
                date: "Anticipated May 20xx",
                school: "University of Massachusetts Lowell - Lowell, MA",
                gpa: "Overall GPA: 3.33, GPA in Major: 3.50"
            },
        ],
        experience: [
            {
                title: "Front End Developer / w3schools.com",
                date: "Jan 2015 - Current",
                description: "Lorem ipsum dolor sit amet...",
            },
            {
                title: "Computer Lab Monitor / University of Massachusetts Lowell",
                date: "Jan 20xx - Present",
                description: "Monitor lab activity for up to 50 users at a time. Perform basic hardware/software troubleshooting.",
            },
            {
                title: "Technical Support Specialist / Commonwealth of Massachusetts, Information Technology Division",
                date: "Summer 20xx",
                description: "Supported and hosted state-wide agency systems and messaging services on platforms including HP Unix, Linux, MVS, and Windows Active Exchange. Assisted with server builds and maintenance. Reviewed, installed, set up, and assisted with active synching of BlackBerry mobile devices to Windows Email Exchange server.",
            },
            {
                title: "Asperger’s Association of New England",
                date: "Jun. 20xx - Aug. 20xx",
                description: "Volunteered one day a week with data entry and basic financial accounting projects",
            },
            {
                title: "Lifeguard",
                date: "Summers 20xx – 20xx",
                description: "YMCA, Lowell, MA",
            },
        ],
    },

    posts: {
        name: "Sara Friends",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
        background_image: "https://source.unsplash.com/random?wallpapers",
        post_data: [
            {
                id: 1,
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
            {
                id: 2,
                timestamp: "5 hours ago",
                description: "Just finished reading this amazing book.",
                type: "note",
            },
            {
                id: 3,
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
            {
                id: 4,
                timestamp: "5 hours ago",
                description: "Just finished reading this amazing book.",
                type: "note",
            },
            {
                id: 5,
                author: "John Doe",
                avatar: "/path-to-avatar1.jpg",
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
        ],
    }
};

// Exporting the data object so that the App.js file can import it.
export default data;