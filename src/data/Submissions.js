function getRandomColor() {
  // Generate a random hex color code
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

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

const randomColors = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
];
export const SubmissionData = [
  {
    name: "OK",
    count: 0,
    color: randomColors[0],
    lighterColor: lightenDarkenColor(randomColors[0], 150), // Adjust the percentage as needed
  },
  {
    name: "WRONG_ANSWER",
    count: 0,
    color: randomColors[1],
    lighterColor: lightenDarkenColor(randomColors[1], 150),
  },
  {
    name: "SKIPPED",
    count: 0,
    color: randomColors[2],
    lighterColor: lightenDarkenColor(randomColors[2], 150),
  },
  {
    name: "MEMORY_LIMIT_EXCEEDED",
    count: 0,
    color: randomColors[3],
    lighterColor: lightenDarkenColor(randomColors[3], 150),
  },
  {
    name: "RUNTIME_ERROR",
    count: 0,
    color: randomColors[4],
    lighterColor: lightenDarkenColor(randomColors[4], 150),
  },
  {
    name: "COMPILATION_ERROR",
    count: 0,
    color: randomColors[5],
    lighterColor: lightenDarkenColor(randomColors[5], 150),
  },
  {
    name: "PARTIAL",
    count: 0,
    color: randomColors[6],
    lighterColor: lightenDarkenColor(randomColors[6], 150),
  },
  {
    name: "IDLENESS_LIMIT_EXCEEDED",
    count: 0,
    color: randomColors[7],
    lighterColor: lightenDarkenColor(randomColors[7], 150),
  },
];
