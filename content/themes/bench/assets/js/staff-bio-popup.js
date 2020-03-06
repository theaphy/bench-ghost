const teamNodes = document.getElementsByClassName("home-team_member");
const aboutNodes = document.getElementsByClassName("copy");
// let staffNodes = ["home-team_member", "copy"];
// let htmlCollecion = staffNodes.map((node) => getElementBy("class", node));
// console.log(htmlCollecion);

const staffPopup = document.getElementById("staff-bio-popup");
const closeStaffPopup = document.getElementById("close-staff");
const content = document.getElementById("staff-inner_content");

const docBody = document.getElementsByTagName("body");


const bios = [
    {
        "id": 1,
        "title": "Principal and Creative Director",
        "name": "Jonathan Berk",
        "bio": ["Jonathan is a passionate advocate for the power of main streets and downtowns and is a placemaker and New Urbanist in every sense of the word. He has a voracious appetite for studying and learning new methods of community and economic development from around the world. He’s an advocate building downtowns and main streets that foster connectivity and creativity and support a thriving, healthy downtown, small business ecosystem and community. Since 2016 he’s served as a Director at the Detroit based placemaking startup, Patronicity, supporting over 100 community driven placemaking projects across the country.", "Jonathan travels extensively across North America speaking about his placemaking and main street revitalization work. He’s spoken most recently at Main Street America’s national conference in Pittsburgh, ULI Canada’s, Toronto Symposium, and NAIOP & NEWaukee’s Empty Storefront’s conference in Milwaukee.Jonathan holds a JD from New England Law | Boston and a BA in Communications from Quinnipiac University and currently sits on the board of his local Main Street organization as well as the local advisory board of Leading Cities, a global leader in Smart City solutions, and CultureHouse a nonprofit community “living room” space based in Boston."]
    },
    {
        "id": 2,
        "title": " Lead Consultant and Community Advocate",
        "name": "Bridget Anderson",
        "bio": ["My first memory is watching the sun come up from the porch swing of my small Indiana home town. I still live in rural Indiana, this place is special. Your place is special. My job is to help you tap into the culture and history of your space to keep it thriving. I have a degree in political science from Indiana University, logged over six years in politics and six years working with mission-driven nonprofits. My career has been focused on supporting people and communities to create change. I care deeply about  access, equity, and empowerment and believe that together people can solve problems. What challenges does your community face? Let’s chat, a small conversation can spark big ideas."]
    },
    {
        "id": 3,
        "title": "Junior Consultant",
        "name": "Mahala Clayton, M.U.P",
        "bio": ["Defining herself as both a City Mouse and a Country Mouse, Mahala split the time in her youth between a working farm in rural Michigan and Detroit growing up leaving her with a significant connection to place at an early age. Naturally this dichotomy of place stretched into Mahala’s adult life leading her to pursue a degree in Wildlife Biology and then a Masters program in Urban Planning. At Bench Consulting Mahala has found a way to root down in her love of place and connect with the country and city mouse’s across the states to breathe new life into great places."]
    },
    {
        "id": 4,
        "title": "Principal & Community Strategist",
        "name": "Ebrahim Varachia",
        "bio": ["Ebrahim is the President & Co-Founder of Patronicity, a civic & community crowdfunding platform built to inspire growth and change in placemaking throughout cities and towns, both urban and rural, across the country. Growing Patronicity to be more than just a civic crowdfunding platform, he has led Patronicity to change the way grants are administered and how communities come together to envision, build and create more sustainable and impactful projects meaningful to them. Leveraging insights from seeing over 600 projects come to life through Patronicity, Ebrahim launched Bench Consulting to use technology and human centered design to garner deeper community engagement to develop locally inspired placemaking projects."]
    },
    {
        "id": 5,
        "title": "Web Developer",
        "name": "Tim Heaphy",
        "bio": ["Tim is a technologist with a passion for the things that can make a difference in people's lives, which is why he loves supporting Bench through building and developing their online presence."]
    },
    {
        "id": 6,
        "title": "Marketing Director",
        "name": "Barbara Lash",
        "bio": ["arbara is a multi-talented, veteran marketer, designer, and artist. She developed Bench's branding and leads initiatives to identify and connect with groups and places that can benefit from our services."]
    }
]

for (let item of teamNodes) {
    item.addEventListener("click", showStaffBio);
}

for (let item of aboutNodes) {
    item.addEventListener("click", showStaffBio);
}

function showStaffBio(e) {
    let name, title, bio;
    const staffId = parseInt(e.target.dataset.staffid);
    let staffMember = bios.find(element => staffId === element.id);
    
    name = staffMember.name;
    title = staffMember.title;
    bio = staffMember.bio.map(graf => "<p>" + graf + "</p>");
    
    nameHtml = "<h3>" + name + "</h3>";
    titleHtml = "<h4>" + title + "</h4>";
    bioHtml = bio.join("");
    content.innerHTML = content.innerHTML + nameHtml + titleHtml + bioHtml;
    
    docBody[0].style.overflow = "hidden";
    staffPopup.style.display = "block";
}

closeStaffPopup.addEventListener("click", () => {
    docBody[0].style.overflow = "auto";
    staffPopup.style.display = "none";
    content.innerHTML = "";
});


// function getElementBy(elementType, selector) {
 
//     switch (elementType) {
//         case 'tag':
//             return document.getElementsByTagName(selector);
//             break;
//         case 'class':
//             return document.getElementsByClassName(selector);
//             break;
//         case 'id':
//             return document.getElementById(selector);
//             break;
//         default:
//             console.log('Make sure you pass in a valid document selector type');
//         }
// }


const benchContact = document.getElementById("bench-contact");
const closeContact = document.getElementById("contact-close");
const contactOpen = document.getElementById("contact-modal");
const inlineContactButtons = document.getElementsByClassName("contact-modal-open");

for (let item of inlineContactButtons) {
    item.addEventListener("click", showContact);
}

contactOpen.addEventListener("click", showContact);
closeContact.addEventListener("click", hideContact);

function showContact() {
    benchContact.style.height = "100%";
    benchContact.style.width = "100%";
    benchContact.style.padding = "25px 0";
    benchContact.style.position = "fixed";
    benchContact.style.top = "0";
    benchContact.style.left = "0";
    benchContact.style.right = "0";
    benchContact.style.bottom = "0";
    benchContact.style.overflow = "initial"

    document.body.style.overflow = "hidden";
}

function hideContact() {
   benchContact.style.width = 0;
   benchContact.style.height = 0;
   benchContact.style.overflow = "hidden";
   benchContact.style.padding = 0;

   document.body.style.overflow = "initial";
}