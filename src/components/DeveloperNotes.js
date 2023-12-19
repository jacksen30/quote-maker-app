import React from 'react'
import ToggleSwitch from './ToggleSwitch';

export default function DeveloperNotes(props) {
    const {quote, quoteFontSize, backgroundColor, font, icon, quoteList} = props;

  return (
    <div className="developerNotesToolbar">
        <ToggleSwitch label="Show Developer Notes:">
            <div>
                <p>Lots more Quotes and Catogories will be added<br/> once functionlity has been tested<br/><br/>
                To Reset After Entering Custom Quote Text,<br/> Press Green Quote Button<br/><br/>
                Sign up button functionality not implemented<br/>
                (Currently sign up not required)<br/><br/>
                Save Function - Not Yet Implemented <br/>(Use screenshot for now)<br/><br/>
                Sanitation Of Text Inputs - Not Yet Implemented<br/><br/>

                Responsive Sizing - Currently only sized for <br/>Iphone 12 pro so layout will potentially break<br/> or not look quite right on other screen sizes<br/> currently.<br/>
                <br/>
                The quote box should never resize on rendering,<br/> but at this time it may with longer quotes<br/> on phones with smaller screens.
                <br/><br/>
                Background / SiteHeader / Buttons / SiteText &<br/>
                styling will be updated once the quote builder is fully functional :)<br/><br/>
                </p>

                <br/><br/>
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
