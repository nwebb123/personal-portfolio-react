import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Backend",
      skills: [".NET MVC", "C#", "ASP.NET Core", "SQL Server"],
    },
    {
      category: "Frontend",
      skills: ["JavaScript", "React", "Angular", "HTML/CSS", "Bootstrap"],
    },
    {
      category: "Tools & Other",
      skills: ["Tailwind CSS", "Git/GitHub", "Responsive Design", "REST APIs"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-semibold text-3xl text-gray-900 dark:text-white">
          Technical Skills
        </h1>
        <div className="mx-auto w-24 h-1 bg-indigo-600 rounded mt-2"></div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-indigo-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium
                    hover:bg-indigo-700 transition duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
