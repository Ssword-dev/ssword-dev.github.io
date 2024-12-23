import {} from "react";

import { Browser } from "./lib/Browser";
import { BrowserName } from "./lib/Browser/detect-browser";
import { Dropdown, DropdownLabel } from "./Components/simple/Form";

function App() {
  return (
    <>
      <Browser.Source>
        <Browser.Renderer target={BrowserName.IE}>
          <code>IE is not supported</code>
        </Browser.Renderer>
        <Browser.Renderer target={BrowserName.Wildcard}>
          <div id="App" className="w-screen h-screen">
            <DropdownLabel
              fieldname="chkbx"
              className="from-[#4efe41] bgi:co?force=true"
            >
              Accept Cookies
            </DropdownLabel>
            <Dropdown onClose={console.log} onOpen={console.log} name="chkbx" />
          </div>
        </Browser.Renderer>
      </Browser.Source>
    </>
  );
}
export default App;
