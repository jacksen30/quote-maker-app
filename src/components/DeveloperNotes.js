import React from 'react'
import ToggleSwitch from './ToggleSwitch';

export default function DeveloperNotes(props) {
    // const {quote, quoteFontSize, backgroundColor, font, icon, quoteList} = props;

  return (
    <div className="developerNotesToolbar">
        <ToggleSwitch label="Show Helpful Notes:" uniqueId="developerNotesToolbar-toggle">
          <hr className="toolbar-dividing-line" />
          <div>
            <ul className="toolbar-list">
              <li className="toolbar-list-item">Save Function - Not Yet Implemented<br/>(Use screenshot for now).</li>
              <li className="toolbar-list-item">Lots more Quotes and Catogories will be added once functionlity has been tested.</li>
              <li className="toolbar-list-item">To Reset After Entering Custom Quote Text, Press Green Quote Button.</li>
            </ul>
              {/* --------------------------------------------------------<br/>
                IGNORE TEXT BELOW - DEBUGGING ONLY<br/>
                --------------------------------------------------------<br/>
                console.log(q string.length = {quote.length})<br />
                console.log(quote font size = {quoteFontSize})<br />
                console.log(icon = {icon}) <br/>
                console.log(background color = {backgroundColor}) <br />
                console.log(quote = {quote})
                console.log(font = {font})
                console.log(quote list = {quoteList}) */}
          </div>
        </ToggleSwitch>
    </div>
  )
}
