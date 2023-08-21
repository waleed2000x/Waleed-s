import { Button } from "@mui/material";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import { useState } from "react";
import { Link } from "react-scroll";
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
          <Link style={{ borderTop: "none" }}>Projects</Link>
          <Link>Skills</Link>
          <Link>Resume</Link>
          <Link>Contact</Link>
        </div>
      ) : null}
    </>
  );
}
