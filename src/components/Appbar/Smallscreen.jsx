import { Button } from "@mui/material";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import { useState } from "react";
import { Link } from "react-scroll";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MyCV from "../../../Assets/WaleedCV.pdf";
export default function Smallscreen() {
  const [showBar, setShowBar] = useState(false);
  return (
    <>
      <div className="wideAppbarParent">
        <h1>Waleed Ahmed</h1>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            setShowBar(!showBar);
          }}
        >
          <TableRowsRoundedIcon />
        </Button>
      </div>
      {showBar ? (
        <div className="dropAppbar">
          <Link
            style={{ borderTop: "none" }}
            to="skills"
            duration={1000}
            onClick={() => {
              setShowBar(false);
            }}
          >
            Skills
          </Link>
          <Link
            to="projects"
            duration={1000}
            onClick={() => {
              setShowBar(false);
            }}
          >
            Projects
          </Link>
          <a
            href={MyCV}
            download="your-cv.pdf"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            Resume
            <DownloadRoundedIcon
              style={{
                marginTop: "5px",
              }}
            />
          </a>
          <Link
            to="contact"
            duration={1000}
            onClick={() => {
              setShowBar(false);
            }}
          >
            Contact
          </Link>
        </div>
      ) : null}
    </>
  );
}
