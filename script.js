
const majorsBySchool = [
    {
        school: "Arts and Communication",
        majors: [
            "Art education",
            "Communication studies",
            "Interactive multimedia",
            "Journalism and professional writing",
            "Music",
            "Music education",
            "Music performance",
            "Visual arts",
            "Fine art",
            "Graphic design",
            "Photography and video",
            "Undeclared–School of the Arts and Communication"
        ]
    },
    {
        school: "Business",
        majors: [
            "Accounting",
            "Business administration",
            "Finance",
            "Interdisciplinary business",
            "Management",
            "Marketing",
            "Economics",
            "Undeclared–School of Business"
        ]
    },
    {
        school: "Education",
        majors: [
            "Early childhood education",
            "Education of the deaf and hard of hearing",
            "Elementary education",
            "Secondary education",
            "Special education",
            "Speech-language pathology and audiology"
        ]
    },
    {
        school: "Engineering",
        majors: [
            "Biomedical engineering",
            "Civil engineering",
            "Computer engineering",
            "Electrical engineering",
            "Engineering science",
            "Engineering management",
            "Robotics",
            "Integrative STEM education",
            "Mechanical engineering",
            "Technology and engineering education",
            "Undeclared–School of Engineering"
        ]
    },
    {
        school: "Humanities and Social Sciences",
        majors: [
            "African American studies",
            "Anthropology",
            "Criminology",
            "English",
            "Environmental studies",
            "History",
            "International studies",
            "Philosophy",
            "Political science",
            "Psychology",
            "Sociology",
            "Spanish",
            "Women’s, gender, and sexuality studies",
            "World languages and linguistics",
            "Undeclared–School of Humanities and Social Sciences"
        ]
    },
    {
        school: "Nursing and Health Sciences",
        majors: [
            "Kinesiology and health sciences",
            "Nursing",
            "Physical therapy",
            "Public health"
        ]
    },
    {
        school: "Science",
        majors: [
            "Biology",
            "Chemistry",
            "Biochemistry",
            "Materials science",
            "Computer science",
            "Cybersecurity",
            "Data science",
            "Mathematics",
            "Applied mathematics",
            "Data science and statistics",
            "Medicine",
            "Optometry",
            "Pharmacy",
            "Physics"
        ]
    }
];

const container = document.getElementById("majors-container");

if (container) {
    // For each school group, create one card per major
    majorsBySchool.forEach(group => {
        group.majors.forEach(major => {
            const card = document.createElement("div");
            card.classList.add("major-card");

            // Major title
            const title = document.createElement("h3");
            title.classList.add("major-title");
            title.textContent = major;
            card.appendChild(title);

            // School label
            const schoolName = document.createElement("p");
            schoolName.classList.add("major-school");
            schoolName.textContent = group.school;
            card.appendChild(schoolName);

            // Append to DOM
            container.appendChild(card);
        });
    });
}