export const LanguagesData = [
  {
    name: "GNU C11",
    count: 0,
    color: "#50428A",
  },
  {
    name: "MONO C#",
    count: 0, 
    color: "#58d158",
  },
  {
    name: "Clang++17 Diagnostics",
    count: 0,
    color: "#608f8e",
  },
  {
    name: "GNU C++11",
    count: 0,
    color: "#979ac4",
  },
  {
    name: "GNU C++14",
    count: 0,
    color: "#1071e0",
  },
  {
    name: "GNU C++17",
    count: 0,
    color: "#c42ed1",
  },
  {
    name: "GNU C++20",
    count: 0,
    color: "#7f30cf",
  },
  {
    name: "MS C++",
    count: 0,
    color: "#a79da8",
  },
  {
    name: "MS C++ 2017",
    count: 0,
    color: "#de6aa0",
  },
  {
    name: "D",
    count: 0,
    color: "#dba11a ",
  },
  {
    name: "Go",
    count: 0,
    color: "#261b01",
  },
  {
    name: "Haskell",
    count: 0,
    color: "#e60914",
  },
  {
    name: "Java 11",
    count: 0,
    color: "#dedb21",
  },
  {
    name: "Java 8",
    count: 0,
    color: "#214ade",
  },
  {
    name: "Java 17",
    count: 0,
    color: "#cdbae0",
  },
  {
    name: "JavaScript",
    count: 0,
    color: "#2e0f66",
  },
  {
    name: "Node.js",
    count: 0,
    color: "#95f200",
  },
  {
    name: "Kotlin",
    count: 0,
    color: "#1bbacc",
  },
  {
    name: "Ocaml",
    count: 0,
    color: "#304042",
  },
  {
    name: "Delphi",
    count: 0,
    color: "#423930",
  },
  {
    name: "FPC",
    count: 0,
    color: "#db7612",
  },
  {
    name: "PascalABC.NET",
    count: 0,
    color: "#914e0c",
  },
  {
    name: "Perl",
    count: 0,
    color: "#0fb871",
  },
  {
    name: "PHP",
    count: 0,
    color: "#081c13",
  },
  {
    name: "Python 2",
    count: 0,
    color: "#9e1397",
  },
  {
    name: "Python 3",
    count: 0,
    color: "#5d9e13",
  },
  {
    name: "PyPy 2",
    count: 0,
    color: "#090d06",
  },
  {
    name: "PyPy 3-64",
    count: 0,
    color: "#a60c1b",
  },
  {
    name: "Ruby",
    count: 0,
    color: "#969329",
  },
  {
    name: "Rust",
    count: 0,
    color: "#f2f2e1",
  },
  {
    name: "Scala",
    count: 0,
    color: "#8f4dd6",
  },
];

// Add lightColor property to each rank
export const LangColorsWithLight = LanguagesData.map((rankColor) => ({
  ...rankColor,
  lightColor: lightenDarkenColor(rankColor.color, 150), // Adjust the lightness value as needed
}));

// Function to lighten or darken a color
function lightenDarkenColor(col, amt) {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
