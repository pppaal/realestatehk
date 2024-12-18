// Get the content div where the content will be rendered
const contentDiv = document.getElementById("content");

// Data object for the Hong Kong Legal System content
const legalSystemData = [
    {
        heading: "Hong Kong Legal System",
        content:
            "The Basic Law is Hong Kong's mini-constitution. It guarantees 'one country, two systems' and preserves Hong Kong's autonomy and legal system until 2047.",
    },
    {
        heading: "Sources of Law",
        list: [
            { title: "Common Law", description: "Judge-made law based on precedents." },
            { title: "Equity Law", description: "Focuses on fairness and justice." },
            { title: "Statutory Law", description: "Laws passed by the legislature." },
        ],
    },
    {
        heading: "Judiciary",
        content:
            "The judiciary is independent and interprets and enforces the laws of Hong Kong. It ensures the rule of law and upholds the Basic Law.",
    },
    {
        heading: "Hierarchy of Courts",
        list: [
            {
                title: "Court of Final Appeal (CFA)",
                description:
                    "The highest court in Hong Kong. It has the power to interpret the Basic Law and make final decisions on appeals.",
            },
            {
                title: "High Court",
                sublist: [
                    {
                        title: "Court of Appeal",
                        description:
                            "Hears appeals from lower courts and reviews important legal questions.",
                    },
                    {
                        title: "Court of First Instance",
                        description:
                            "Handles serious civil and criminal cases, and hears judicial reviews.",
                    },
                ],
            },
            {
                title: "District Court",
                description:
                    "Deals with mid-level civil and criminal cases, including personal injury claims and contract disputes.",
            },
            {
                title: "Magistrates' Courts",
                description:
                    "Handles minor criminal cases, such as theft and traffic offenses.",
            },
            {
                title: "Tribunals",
                description:
                    "Specialized courts for specific matters, such as labor disputes, land cases, and small claims.",
            },
        ],
    },
];

// Function to render the content dynamically
function renderContent(data) {
    let html = ""; // Initialize an empty HTML string

    // Loop through each section in the data
    data.forEach((section) => {
        html += `<h2>${section.heading}</h2>`;
        if (section.content) {
            html += `<p>${section.content}</p>`;
        }
        if (section.list) {
            html += "<ul>";
            section.list.forEach((item) => {
                html += `<li><strong>${item.title}:</strong> ${item.description || ""}`;
                if (item.sublist) {
                    html += "<ul>";
                    item.sublist.forEach((subItem) => {
                        html += `<li><strong>${subItem.title}:</strong> ${subItem.description}</li>`;
                    });
                    html += "</ul>";
                }
                html += "</li>";
            });
            html += "</ul>";
        }
    });

    // Insert the generated HTML into the content div
    contentDiv.innerHTML = html;
}

// Call the renderContent function to render the data
renderContent(legalSystemData);
