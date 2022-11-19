const data = [
        {
            id: 0,
            city: "Salt Lake",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118109.1232942954!2d-111.96976901005317!3d40.76783671757657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1668810046579!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            projects: {
                    downtown: {
                        projectNo: "2021-87",
                        address: "Sunnyside Ave & Foothill DrSalt Lake City, UT 84108", 
                        start: "June 13, 2022",
                 end: "Fall of 2023",
                        budget: "$2.5M"
                    },
                    rural: {
                        projectNo: 1243, 
                        address: "300 W/ North Temple (NB), Salt Lake City, UT 84103", 
                        start: "Sept. 2022",
                 end: "End of 2022",
                        budget: "$3.2M", 
                        contact: "Dang Quach",
                        phone: 801-535-6696
                    },
                }
        },
        {
            id: 1,
            city: "Columbus",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32161.19350201481!2d-82.96196492464534!3d40.01927770383598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1668812493802!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            projects: {
                    downtown: {
                        projectNo: "1091-52", 
                        address: "465 East Hudson St", 
                        start: "March 2022",
                 end: "September 2024",
                        budget: "$1.5M",
                        contact: "Hannah Webber",
                        phone: "614-645-2859"
                    },
                    rural: {
                        projectNo: "2269-08", 
                        address: "1900 E Weber Rd", 
                        start: "April 2023",
                 end: "October 2026",
                        budget: "$3.5M",
                        contact: "John Merrill",
                        phone: "614-746-5159"
                    },
                }
        },
        {
            id: 2,
            city: "Columbus",
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32161.19350201481!2d-82.96196492464534!3d40.01927770383598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1668812493802!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            projects: {
                    downtown: {
                        projectNo: "1091-52", 
                        address: "465 East Hudson St", 
                        start: "March 2022",
                 end: "September 2024",
                        budget: "$1.5M",
                        contact: "Hannah Webber",
                        phone: "614-645-2859"
                    },
                    rural: {
                        projectNo: 2269-08, 
                        address: "1900 E Weber Rd", 
                        start: "April 2023",
                 end: "October 2026",
                        budget: "$3.5M",
                        contact: "John Merrill",
                        phone: "614-746-5159"
                    },
                }
        },
        {
            id:3,
            city: "Raleigh",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51911.35312006114!2d-78.66236503472645!3d35.77520499047369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a2f9f51e0f7%3A0x6790b6528a11f0ad!2sRaleigh%2C%20NC!5e0!3m2!1sen!2sus!4v1668850210839!5m2!1sen!2sus",
            neighborhood: "Federal Hill",
            projects: {
                    downtown: {
                        projectNo: 87247,
                        address: "823 light street",
                        start: "Nov 13, 2022",
                 end: "May 13, 2023",
                        budget: "$275.5K"
                    },
                    rural: {
                        projectNo: 1243,
                        address: "2942 yorkway",
                        start: "Mar 19, 2022",
                 end: "Nov 11, 2022",
                        budget: "$400K"
                    },
                }
        },
        // {
        //     id:4,
        //     city: "Winston-Salem",
        //     map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206306.89579173698!2d-80.2434579!3d36.10457199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853a19b82d6b277%3A0x50325f54b43f8245!2sWinston-Salem%2C%20NC!5e0!3m2!1sen!2sus!4v1668828141334!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        //     projects: {
        //             downtown: {
        //                 projectNo: 87247,
        //                 address: "175 N. Chestnut Street",
        //                 start: "February 12, 2021",
        //                 end: "November 7, 2023",
        //                 budget: "$2.4M"
        //             },
        //             rural: {
        //                 projectNo: 1243,
        //                 address: "1489 Colony Lodge St.",
        //                 start: "April 10, 2022",
        //                 end: "August 17, 2024",
        //                 budget: "$3,1M"
        //             },
        //         }
        // },
    ]
    
    console.log(data[0].projects.downtown.projectNo)
    




const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value) => {
        resultsList.append(document.createElement('br'))
        resultsList.append(`${value}`)
        
        document.getElementById('projectNo').append(` ${data[0].projects.downtown.projectNo}`)
        document.getElementById('projectAdd').append(` ${data[0].projects.downtown.address}`)
        document.getElementById('start').append(` ${data[0].projects.downtown.start}`)
        document.getElementById('end').append(` ${data[0].projects.downtown.end}`)
        document.getElementById('budget').append(` ${data[0].projects.downtown.budget}`)
})