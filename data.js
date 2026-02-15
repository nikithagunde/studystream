const courses = {
    general: [
        {
            name: "English",
            links: [
                { title: "English by Nisa - Part A", url: "https://youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D" },
                { title: "English by Nisa - Part B", url: "https://youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8" }
            ]
        },
        {
            name: "Cost Control and Management Accounting",
            links: [
                { title: "Hasham Ali Khan - Part 1", url: "https://youtube.com/playlist?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v" },
                { title: "Hasham Ali Khan - Part 2", url: "https://youtube.com/playlist?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog" }
            ]
        },
        {
            name: "Theory and Practice of GST",
            links: [
                { title: "Hasham Ali Khan - Full Course", url: "https://youtube.com/playlist?list=PLWJDzVuPkXAkNpdAIqufc2JxDoxjENrsj" }
            ]
        }
    ],

    honors: [
        {
            name: "International Finance",
            links: [
                { title: "Hasham Ali Khan - Full Course", url: "https://youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf" }
            ]
        }
    ],

    computer: [
        {
            name: "Cybersecurity",
            links: [
                { title: "Full Course", url: "https://youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo" }
            ]
        }
    ],

    analytics: [
        {
            name: "Business Application of Emerging Technologies",
            links: [
                { title: "Coming Soon", url: "#" }
            ]
        }
    ]
};

function loadCourse(courseKey) {
    const content = document.getElementById("content");

    if (!content) {
        console.error("Element with id 'content' not found.");
        return;
    }

    content.innerHTML = "";

    // ✅ Check if course exists
    if (!courses[courseKey]) {
        content.innerHTML = "<p>Course not found.</p>";
        return;
    }

    courses[courseKey].forEach(subject => {
        const div = document.createElement("div");
        div.className = "subject";

        const title = document.createElement("h3");
        title.textContent = subject.name;
        div.appendChild(title);

        subject.links.forEach(link => {
            const a = document.createElement("a");
            a.href = link.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer"; // ✅ Security improvement
            a.textContent = link.title;

            div.appendChild(a);
            div.appendChild(document.createElement("br")); // optional spacing
        });

        content.appendChild(div);
    });
}
