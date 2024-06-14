import { useState } from "react";
import Profile from "./Profile";
import Question from "./Question";
import SearchBar from "./Main/SearchBar";
import ErrorHandler from "./ErrorHandler";
import LoadingHandler from "./LoadingHandler";

const Main = ({ handle, setHandle }) => {
  const [searchResults, setSearchResults] = useState(false);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const searchHandler = () => {
    setError("");
    setName(handle);
    setSearchResults(false);
    setLoading(true);
    // setTimeout(() => {}, 5000)
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`, {
      headers: {
        // 'Content-Type': 'application/json',
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          if (parseInt(res.status) === 400) {
            setError("Username doesn't exist");
          } else {
            setError("Something went wrong!");
          }
          setLoading(false);
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data.result[0]);
        setSearchResults(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* New Search bar after the first search has been done. */}
      <SearchBar
        handle={handle}
        setHandle={setHandle}
        searchHandler={searchHandler}
        setError={setError}
      />

      {/* Error handling */}
      {error && <ErrorHandler error={error} />}

      {/* Loading screen */}
      {loading && <LoadingHandler loading={loading} />}

      {/* Loading becomes false and search becomes true then this section is loaded */}

      {/* Loads faster than rest of the pages due to data.result being already loaded */}
      {searchResults && <Profile profile={profile} />}
      {searchResults && <Question name={name} />}
    </div>
  );
};

export default Main;
