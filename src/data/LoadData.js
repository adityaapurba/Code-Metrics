const LoadData = ({ index, rating }) => {
  let data;

  if (parseInt(index) === 0) {
    data = rating?.length || 0;
  } else if (parseInt(index) === 1 || parseInt(index) === 2) {
    const ranks = rating?.map((contest) => contest.rank) || [];
    data =
      ranks.length > 0
        ? parseInt(index) === 1
          ? Math.min(...ranks)
          : Math.max(...ranks)
        : 0;
  } else if (parseInt(index) === 3 || parseInt(index) === 4) {
    const change =
      rating?.map((contest) => contest.newRating - contest.oldRating) || [];
    if (change.length > 0) {
      if (parseInt(index) === 3) {
        data = "+" + Math.max(...change);
      } else if (parseInt(index) === 4) {
        const minChange = Math.min(...change);
        data = minChange < 0 ? minChange : "I never look down.";
      }
    } else {
      data = 0;
    }
  }

  return <p>{data}</p>;
};

export default LoadData;
