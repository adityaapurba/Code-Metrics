/* eslint-disable react/prop-types */
import { RankColors } from "../data/RatingColors";
const Profile = ({ profile }) => {
  // console.log(profile);
  const rank = profile.rank;
  let colorUsed = "";
  let maxColorUsed = "";
  for (let index = 0; index < RankColors.length; index++) {
    let objFound = RankColors[index];
    if (objFound.rank === rank) {
      colorUsed = objFound.color;
    }
    if (objFound.rank === profile.maxRank) {
      maxColorUsed = objFound.color;
    }
  }
  // console.log(colorUsed);
  // console.log(maxColorUsed);
  return (
    <>
      <p className="profile-data">
        Rank:{" "}
        <span style={{ color: colorUsed, fontWeight: "bold" }}>{rank}</span>
        <span>
          {" "}
          (Max:{" "}
          <span style={{ color: maxColorUsed, fontWeight: "bold" }}>
            {profile.maxRank}
          </span>
          )
        </span>
      </p>
    </>
  );
};

export default Profile;
