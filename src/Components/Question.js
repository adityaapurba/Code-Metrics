/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  // Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LangColorsWithLight } from "../data/LanguagesUsed.js";
import { SubmissionData } from "../data/Submissions.js";
import { RatingData } from "../data/RatingData.js";
import LoadData from "../data/LoadData.js";
import { motion } from "framer-motion";
const Charts = ({ name }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tagData, setTagData] = useState([]);
  const [ratingsData, setRatingsData] = useState([]);
  const [rating, setRating] = useState();
  const LangData = LangColorsWithLight;
  const SubData = SubmissionData;
  const [problemData, setProblemData] = useState([]);
  const table = RatingData;
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
  function getRandomColor() {
    // Generate a random hex color code
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  useEffect(() => {
    fetch(
      `https://codeforces.com/api/user.status?handle=${name}&from=1&count=100000`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
        setLoading(true);
      });
  }, [name]);

  useEffect(() => {
    if (data?.length > 0) {
      for (let i = 0; i < LangData.length; i++) {
        LangData[i].count = 0;
      }
      for (let i = 0; i < data?.length; i++) {
        let programmingLanguages = data[i].programmingLanguage;
        for (let j = 0; j < LangData.length; j++) {
          if (LangData[j]?.name === programmingLanguages) {
            LangData[j].count++;
          }
        }
      }
      //   console.log(data);
    }
  });
  useEffect(() => {
    if (data?.length > 0) {
      for (let i = 0; i < SubData.length; i++) {
        SubData[i].count = 0;
      }
      for (let i = 0; i < data.length; i++) {
        let verdict = data[i].verdict;
        for (let j = 0; j < SubData.length; j++) {
          if (SubData[j].name === verdict) {
            SubData[j].count++;
          }
        }
      }
      //   console.log(SubData);
    }
  });
  useEffect(() => {
    const tagCount = {};
    data?.forEach((tag) => {
      if (tag.verdict === "OK") {
        tag.problem.tags.forEach((type) => {
          tagCount[type] = (tagCount[type] || 0) + 1;
        });
      }
    });
    // console.log(tagCount);
    // console.log(data);
    const tagDataFound = Object.keys(tagCount).map((tag) => {
      const color = getRandomColor();
      const lightColor = lightenDarkenColor(color, -50);
      return {
        tag: tag,
        count: tagCount[tag],
        color: color,
        lighterColor: lightColor,
      };
    });
    // console.log(tagDataFound);
    setTagData(tagDataFound);
  }, [data]);
  //  Bar graph Data
  useEffect(() => {
    const ProblemTypes = {};
    data?.forEach((ele) => {
      if (ele.verdict === "OK") {
        ProblemTypes[ele.problem.index] =
          (ProblemTypes[ele.problem.index] || 0) + 1;
      }
    });

    // Fix: Add a return statement to the arrow function
    const problemTypesData = Object.keys(ProblemTypes).map((index) => ({
      index, // Make sure to include this for each object in the array
      count: ProblemTypes[index],
    }));

    const orderedIndexes = [
      "A",
      "B",
      "C",
      "D",
      "D1",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "A1",
      "B1",
      "C1",
      "D1",
      "E1",
      "F1",
      "G1",
      "H1",
      "I1",
      "J1",
      "K1",
      "L1",
      "M1",
      "N1",
      "O1",
      "P1",
      "Q1",
      "R1",
      "S1",
      "T1",
      "U1",
      "V1",
      "W1",
      "X1",
      "Y1",
      "Z1",
      "A2",
      "B2",
      "C2",
      "D2",
      "E2",
      "F2",
      "G2",
      "H2",
      "I2",
      "J2",
      "K2",
      "L2",
      "M2",
      "N2",
      "O2",
      "P2",
      "Q2",
      "R2",
      "S2",
      "T2",
      "U2",
      "V2",
      "W2",
      "X2",
      "Y2",
      "Z2",
      "A3",
      "B3",
      "C3",
      "D3",
      "E3",
      "F3",
      "G3",
      "H3",
      "I3",
      "J3",
      "K3",
    ];

    // Corrected: Add the return statement here as well

    const sortedData = problemTypesData.sort(
      (a, b) =>
        orderedIndexes.indexOf(a.index) - orderedIndexes.indexOf(b.index)
    );

    const sortedDataWithColors = sortedData.map((item) => {
      const color = getRandomColor();
      return {
        ...item,
        color: color,
        lighterColor: lightenDarkenColor(color, 150),
      };
    });
    // console.log(sortedDataWithColors);

    setProblemData(sortedDataWithColors);
  }, [data]);

  useEffect(() => {
    const ratingsData = {};
    data?.forEach((ele) => {
      ratingsData[ele.problem.rating] =
        (ratingsData[ele.problem.rating] || 0) + 1;
    });
    const ratings = Object.keys(ratingsData).map((rating) => ({
      rating: rating,
      count: ratingsData[rating],
    }));
    // console.log(ratings);
    const ratingWithColors = ratings.map((item) => {
      const color = getRandomColor();
      return {
        ...item,
        color: color,
        lighterColor: lightenDarkenColor(color, 150),
      };
    });
    // console.log(ratingWithColors);
    setRatingsData(ratingWithColors);
  }, [data]);

  // table data
  useEffect(() => {
    fetch(`https://codeforces.com/api/user.rating?handle=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((datax) => {
        // setLoading(true);
        setRating(datax.result);
        // console.log(datax.result);
      });
  }, [name]);
  return (
    <div className="container">
      <div className="pie-data">
        <div className="lang pie">
          <h5 className="heading lang">Languages that you use:</h5>
          {loading && data?.length > 0 && (
            <PieChart width={400} height={400}>
              <Pie
                data={LangData}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={190}
                fill="#f0f0f0"
                label
              >
                {LangData.map((entry, index) => {
                  // console.log(entry.color, entry.lightColor);
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.lightColor}
                      stroke={entry.color}
                      strokeWidth={3}
                    />
                  );
                })}
              </Pie>
              <Tooltip contentStyle={{ color: "aqua" }} />
              {/* <Legend />     */}
            </PieChart>
          )}
        </div>
        {/* pie chart of submissions */}
        <div className="Sub pie">
          <h5 className="heading Sub">Submission Verdicts:</h5>
          {loading && data.length > 0 && (
            <PieChart width={400} height={400}>
              <Pie
                data={SubData}
                dataKey={"count"}
                nameKey={"name"}
                cx={"50%"}
                cy={"50%"}
                outerRadius={190}
                fill="#f0f0f0"
                label
              >
                {SubData.map((entry, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.lighterColor}
                      stroke={entry.color}
                      strokeWidth={3}
                    />
                  );
                })}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </div>
        {/* Pie chart of all topics */}
        <div className="topics pie">
          <h5 className="heading topics">Topics you have done:</h5>
          {loading && data.length > 0 && (
            <PieChart width={400} height={400}>
              <Pie
                data={tagData}
                dataKey={"count"}
                nameKey={"tag"}
                cx={"50%"}
                cy={"50%"}
                outerRadius={190}
                innerRadius={100}
                fill="#f0f0f0"
                label
              >
                {tagData.map((entry, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      // fill={entry.lighterColor}
                      fill={entry.lighterColor}
                      // strokeWidth={3}
                    />
                  );
                })}
              </Pie>
              <Tooltip />
            </PieChart>
          )}
        </div>
      </div>

      {/* Bar Graphs of indexes */}
      <div className="problem-bar">
        <h5 className="problems heading">Problems Solved</h5>
        <BarChart
          width={1000}
          height={600}
          data={problemData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"index"} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey={"count"}>
            {problemData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.lighterColor}
                stroke={entry.color}
                strokeWidth={3}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className="ratings-graph">
        <h5 className="ratings heading">Ratings Graph</h5>
        <BarChart
          width={1000}
          height={600}
          data={ratingsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"rating"} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey={"count"}>
            {problemData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.lighterColor}
                stroke={entry.color}
                strokeWidth={3}
              />
            ))}
          </Bar>
        </BarChart>
      </div>

      {/* Table Rating Table */}
      <div className="rating-table w-full">
        <div className="w-full flex flex-col items-center">
          {table.map((row, index) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0.2,
                  x: index % 2 === 0 ? "5vw" : "-5vw",
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="flex w-3/5 lg:w-1/3"
              key={index}
            >
              <div className={`border-black py-4 w-3/4 pl-4 ${row.style1}`}>
                {row.rowData}
              </div>
              <div
                className={`border-black py-4 w-1/4 text-center ${row.style2}`}
              >
                {<LoadData index={index} rating={rating} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Charts;
