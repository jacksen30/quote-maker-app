import React, {useState} from 'react';
import DisplayBox from './DisplayBox'
import EditButtonBox from './EditButtonBox';
import TitleBanner from './TitleBanner';
import QuoteTypeSelector from './QuoteTypeSelector';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('purple');
  
  const initialQuote = "All Our Dreams Can Come True If We Have The Courage To Pursue Them"
  const [quote, setQuote] = useState(initialQuote);

  const [font, setFont] = useState();

  const Motivational = ['All Our Dreams Can Come True If We Have The Courage To Pursue Them.', 'It does not matter how slowly you go as long as you do not stop.', 'Start where you are. Use what you have. Do what you can.', 'Life is 10% what happens to you and 90% how you react to it.', 'The secret of getting ahead is getting started.', 'Never give up, for that is just the place and time that the tide will turn.', 'You are never too old to set another goal or to dream a new dream.'];
  const Funny = ['Fun1', 'Fun2', 'Fun3', 'Fun4'];
  const Business = ['Bus1', 'Bus2', 'Bus3', 'Bus4'];

  const [quoteList, setQuoteList] = useState ([...Motivational])

  function handleQuoteTypeSelection(v) {
    if (v === 'Business') {
      setQuoteList([...Business])
    } else if (v === 'Motivational') {
      setQuoteList([...Motivational])
    } else if (v === 'Funny' ) {
      setQuoteList([...Funny])
    }
  }

  function handleFontChange() {
    const fontList = ['Dancing Script', 'Oswald', 'Rowdies']
    const randomIndex =  Math.floor(Math.random() * fontList.length);
    let newFont = (fontList[randomIndex]);
    if(newFont === font) {handleFontChange()}
    setFont(newFont)
  }
  
  
  function handleColorChange() {
    const colorList = ['pink', 'orange', 'orange', 'purple', 'aqua', 'chartreuse', 'cyan', 'deeppink', 'gold', 'lightslategray', 'tomato', 'thistle']
    const randomIndex =  Math.floor(Math.random() * colorList.length);
    let BGcolor = (colorList[randomIndex]);
    setBackgroundColor(BGcolor)
  }

  function handleQuoteChange() {
    const randomIndex =  Math.floor(Math.random() * quoteList.length);
    let newQuote = (quoteList[randomIndex]);
    setQuote(newQuote)
  }
  

  return (
    <div className='app'>
      <TitleBanner />
      <QuoteTypeSelector handleQuoteTypeSelection={handleQuoteTypeSelection} />
      <DisplayBox backgroundColor={backgroundColor} quote={quote} font={font} />
      <EditButtonBox handleColorChange={handleColorChange} handleQuoteChange={handleQuoteChange} handleFontChange={handleFontChange} />
      <br/><br/>
      console.log(background color = {backgroundColor}) <br />
      console.log(quote = {quote})
      console.log(font = {font})
      console.log(quote list = {quoteList})
      
    </div>
  );
}


export default App;
