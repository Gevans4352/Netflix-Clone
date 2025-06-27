import { GoTriangleDown } from "react-icons/go";
import "./BrowseNavBar.scss";
import { useState } from "react";

const BrowseNavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="BrowseNavBar">
      <div className="sections">
        <div className="fall">Browse by Language</div>
        <div className="genre">
          <div className="dropdown">
            <div className="label-span-group">
              <label htmlFor="language-type">SELECT YOUR PREFERENCE</label>
              <span onClick={() => toggleDropdown("language-type")}>
                Original Language <GoTriangleDown className="triangle" />
              </span>
            </div>
            <ul className={openDropdown === "language-type" ? "show" : ""}>
              <p><a href="#">Original Language</a></p>
              <p><a href="#">Dubbing</a></p>
              <p><a href="#">Subtitle</a></p>
            </ul>
          </div>
          <div className="dropdown">
            <div className="label-span-group">
              <label htmlFor="language">Language:</label>
              <span onClick={() => toggleDropdown("language")}>
                English <GoTriangleDown className="triangle" />
              </span>
            </div>
            <ul className={openDropdown === "language" ? "show" : ""}>
              <p><a href="#">Arabic</a></p>
              <p><a href="#">Cantonese</a></p>
              <p><a href="#">Danish</a></p>
              <p><a href="#">Dutch</a></p>
              <p><a href="#">English</a></p>
              <p><a href="#">Filipino</a></p>
              <p><a href="#">Flemish</a></p>
              <p><a href="#">French</a></p>
              <p><a href="#">German</a></p>
              <p><a href="#">Hindi</a></p>
              <p><a href="#">Indonesian</a></p>
              <p><a href="#">Italian</a></p>
              <p><a href="#">Japanese</a></p>
              <p><a href="#">Korean</a></p>
              <p><a href="#">Malay</a></p>
              <p><a href="#">Malayam</a></p>
              <p><a href="#">Mandarin</a></p>
              <p><a href="#">Marathi</a></p>
              <p><a href="#">Norwegian</a></p>
              <p><a href="#">Polish</a></p>
              <p><a href="#">Portugese</a></p>
              <p><a href="#">Spanish</a></p>
              <p><a href="#">Swedish</a></p>
              <p><a href="#">Tamil</a></p>
              <p><a href="#">Telugu</a></p>
              <p><a href="#">Thai</a></p>
              <p><a href="#">Turkish</a></p>
              <p><a href="#">Vietnamese</a></p>
            </ul>
          </div>
          <div className="dropdown">
            <div className="label-span-group">
              <label htmlFor="sort-by">Sort By:</label>
              <span onClick={() => toggleDropdown("sort-by")}>
                Suggestions For You <GoTriangleDown className="triangle" />
              </span>
            </div>
            <ul className={openDropdown === "sort-by" ? "show" : ""}>
              <p><a href="#">Suggestions For You</a></p>
              <p><a href="#">Year Released</a></p>
              <p><a href="#">A-Z</a></p>
              <p><a href="#">Z-A</a></p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseNavBar;
