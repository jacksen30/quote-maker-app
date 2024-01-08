import React from 'react'
import ToggleSwitch from './ToggleSwitch';

export default function DeveloperNotes(props) {
    // const {quote, quoteFontSize, backgroundColor, font, icon, quoteList} = props;

  return (
    <div className="developerNotesToolbar">
        <ToggleSwitch label="Show Helpful Notes:">
          <hr class="toolbar-dividing-line" />
          <div>
            <ul>
              <li>Lots more Quotes and Catogories will be added once functionlity has been tested</li>
              <li>Save Function - Not Yet Implemented <br/>(Use screenshot for now)</li>
              <li>To Reset After Entering Custom Quote Text,<br/> Press Green Quote Button</li>
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
