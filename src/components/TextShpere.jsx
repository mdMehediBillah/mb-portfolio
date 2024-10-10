import { useEffect } from "react";
// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "UX/UI",
      "Web Design",
      "Web App",
      "Personas",
      "User Flow",
      "User Journey",
      "Design",
      "CI/CD",
      "Fullstack",
      "Frontend",
      "Programming",
      "Prototype",
      "Wireframe",
      "User Research",
      "Usability",
      "Accessibility",
      "SEO",
      "Responsive",
      "Backend",
      "Teamwork",
      "Communication",
      "Problem-solving",
      "Critical Thinking",
      "Creativity",
      "Agile",
      "Scrum",
    ];

    const options = {
      radius: 240,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    // Initialize the TagCloud once
    const tagCloudInstance = TagCloud(container, texts, options);

    // Function to generate a random color
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Apply random color to each tag
    const applyRandomColors = () => {
      const tagItems = document.querySelectorAll(".tagcloud--item");
      tagItems.forEach((item) => {
        item.style.color = getRandomColor(); // Assign a random color
      });
    };

    // Apply random colors after the TagCloud has rendered
    setTimeout(applyRandomColors, 500);

    // Cleanup function to remove the TagCloud when component unmounts
    return () => {
      tagCloudInstance.destroy(); // Clear the TagCloud instance
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="text-shpere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextShpere;
