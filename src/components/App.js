import React, { useState, useEffect } from 'react';
import DisplayBox from './DisplayBox'
import EditButtonBox from './EditButtonBox';
import TitleBanner from './TitleBanner';
import QuoteTypeSelector from './QuoteTypeSelector';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('deeppink');
  const [instagram, setInstagram] = useState();
  
  const initialQuote = "All Our Dreams Can Come True If We Have The Courage To Pursue Them"
  const [quote, setQuote] = useState(initialQuote);

  const [font, setFont] = useState('Permanent Marker');

  const Motivational = ['It does not matter how slowly you go as long as you do not stop.', 'Start where you are. Use what you have. Do what you can.', 'Life is 10% what happens to you and 90% how you react to it.', 'The secret of getting ahead is getting started.', 'Never give up, for that is just the place and time that the tide will turn.', 'You are never too old to set another goal or to dream a new dream.', 'Remember, today is the tomorrow you worried about yesterday.', 'You miss 100% of the shots you don’t take.', 'The only way to avoid criticism: do nothing, say nothing, and be nothing.'];
  const Funny = ['I love you more than coffee but not always before coffee.', 'I like long romantic walks down every aisle at Kmart.', 'You are only young once, but you can be immature for a lifetime.', 'People say nothing is impossible, but I do nothing every day.', 'If you have friends who are as weird as you, then you have everything.', 'A pessimist is a person who has had to listen to too many optimists.', 'An alcoholic is someone you don’t like who drinks as much as you do.', 'I’ve got all the money I’ll ever need, if I die by four o’clock.', 'If you want your children to listen, try talking softly to someone else.', 'I always arrive late at the office, but I make up for it by leaving early.', 'The worst time to have a heart attack is during a game of charades.', 'Sports are the reason I am out of shape. I watch them all on TV.'];
  const Love = ['I love you because the entire universe conspired to help me find you.', 'I love you more than there are stars in the sky and fish in the sea.', 'Till my last day, I’ll be loving you.', 'If you remember me, then I don’t care if everyone else forgets.', 'Love is an irresistible desire to be irresistibly desired.', 'Never go to bed mad. Stay up and fight.', 'To love and be loved is to feel the sun from both sides.', 'All you need is love. But a little chocolate now and then doesn\'t hurt.', 'A simple I love you means more than money.', 'Life with you makes perfect sense, You\'re my best friend.', 'Two things you will never have to chase: true friends and true love.', 'True love is selfless. It is prepared to sacrifice.'];

  const [quoteList, setQuoteList] = useState ([...Motivational])

  useEffect(() => {
    handleQuoteChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quoteList]) 


  function handleQuoteTypeSelection(v) {
    if (v === 'Love') {
      setQuoteList([...Love])
    } else if (v === 'Motivational') {
      setQuoteList([...Motivational])
    } else if (v === 'Funny' ) {
      setQuoteList([...Funny])
    }
  }

  function handleFontChange() {
    const fontList = ['Boogaloo', 'Courgette', 'Covered By Your Grace', 'Dancing Script', 'Indie Flower', 'Kalam', 'Noto Serif', 'Oswald', 'Permanent Marker', 'Rowdies', 'Shadows Into Light', 'Sofia Sans']
    const randomIndex =  Math.floor(Math.random() * fontList.length);
    let newFont = (fontList[randomIndex]);
    if (newFont === font) {
      setFont('sans-serif')
    } else {
      setFont(newFont)
    }
  }
  
  
  function handleColorChange() {
    const colorList = ['pink', 'firebrick', 'orange', 'purple', 'darkkhaki', 'forestgreen', 'cyan', 'deeppink', 'gold', 'lightslategray', 'tomato', 'thistle', 'deepskyblue', 'steelblue', 'turquoise', 'indianred']
    const randomIndex =  Math.floor(Math.random() * colorList.length);
    let BGcolor = (colorList[randomIndex]);
      if (BGcolor === backgroundColor) {
      setBackgroundColor('darkviolet')
    }   else { setBackgroundColor(BGcolor) 
    }
  }

  function handleQuoteChange() {
    const randomIndex =  Math.floor(Math.random() * quoteList.length);
    let newQuote = (quoteList[randomIndex]);
    setQuote(newQuote)
  }

  function handleCustomBrandTextChange(e) {
    setInstagram(e)
  }

  function handleCustomQuoteTextChange(e) {
    setQuote(e)
  }
  

  return (
    <div className='app'>
      <TitleBanner />
      <QuoteTypeSelector handleQuoteTypeSelection={handleQuoteTypeSelection} />
      <DisplayBox backgroundColor={backgroundColor} quote={quote} font={font} instagram={instagram} />
      <EditButtonBox handleColorChange={handleColorChange} handleQuoteChange={handleQuoteChange} handleFontChange={handleFontChange} handleCustomBrandTextChange={handleCustomBrandTextChange} handleCustomQuoteTextChange={handleCustomQuoteTextChange} />
      
      <br/><br/><br/>
      <p><h3 className="testing-title-text">TESTING NOTES</h3><br/>
      Save Function - Not Yet Implemented<br/>
      Add Social Icon - Not Yet Implemented<br/>
      Sanitation Of Text Inputs - Not Yet Implemented<br/><br/>

      Responsive Sizing - Currently only sized for <br/>Iphone 12 pro so layout will potentially break<br/> or not look quite right on other screen sizes<br/> currently.<br/>
      <br/>
      The quote box should never resize on rendering,<br/> but at this time it may with longer quotes<br/> on phones with smaller screens.
      <br/><br/>
      Background / SiteHeader / Buttons / SiteText &<br/>
      styling will be updated once the quote builder is fully functional :)<br/><br/>
      To Reset After Entering Custom Quote Text,<br/> Press Green Quote Button<br/><br/>
      Lots more Quotes and Catogories will be added<br/> once functionlity has been tested</p>

      <br/><br/>
      --------------------------------------------------------<br/>
      IGNORE TEXT BELOW - DEBUGGING ONLY<br/>
      --------------------------------------------------------<br/>


      console.log(background color = {backgroundColor}) <br />
      console.log(quote = {quote})
      console.log(font = {font})
      console.log(quote list = {quoteList})
      
    </div>
  );
}


export default App;
