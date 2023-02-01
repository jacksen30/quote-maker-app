import React, { useState, useEffect } from 'react';
import DisplayBox from './DisplayBox'
import EditButtonBox from './EditButtonBox';
import TitleBanner from './TitleBanner';
import QuoteTypeSelector from './QuoteTypeSelector';
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export const IconContext = React.createContext()

function App() {
  const [backgroundColor, setBackgroundColor] = useState('deeppink');
  const [customBrandText, setCustomBrandText] = useState();
  
  const initialQuote = "All Our Dreams Can Come True If We Have The Courage To Pursue Them"
  const [quote, setQuote] = useState(initialQuote);

  const [font, setFont] = useState('Permanent Marker');

  const [icon, setIcon] = useState();

  const Motivational = ['It does not matter how slowly you go as long as you do not stop.', 'Start where you are. Use what you have. Do what you can.', 'Life is 10% what happens to you and 90% how you react to it.', 'The secret of getting ahead is getting started.', 'Never give up, for that is just the place and time that the tide will turn.', 'You are never too old to set another goal or to dream a new dream.', 'Remember, today is the tomorrow you worried about yesterday.', 'You miss 100% of the shots you don’t take.', 'The only way to avoid criticism: do nothing, say nothing, and be nothing.'];
  const Funny = ['I love you more than coffee but not always before coffee.', 'I like long romantic walks down every aisle at Kmart.', 'You are only young once, but you can be immature for a lifetime.', 'People say nothing is impossible, but I do nothing every day.', 'If you have friends who are as weird as you, then you have everything.', 'A pessimist is a person who has had to listen to too many optimists.', 'An alcoholic is someone you don’t like who drinks as much as you do.', 'I’ve got all the money I’ll ever need, if I die by four o’clock.', 'If you want your children to listen, try talking softly to someone else.', 'I always arrive late at the office, but I make up for it by leaving early.', 'The worst time to have a heart attack is during a game of charades.', 'Sports are the reason I am out of shape. I watch them all on TV.'];
  const Love = ['I love you because the entire universe conspired to help me find you.', 'I love you more than there are stars in the sky and fish in the sea.', 'Till my last day, I’ll be loving you.', 'If you remember me, then I don’t care if everyone else forgets.', 'Love is an irresistible desire to be irresistibly desired.', 'Never go to bed mad. Stay up and fight.', 'To love and be loved is to feel the sun from both sides.', 'All you need is love. But a little chocolate now and then doesn\'t hurt.', 'A simple I love you means more than money.', 'Life with you makes perfect sense, You\'re my best friend.', 'Two things you will never have to chase: true friends and true love.', 'True love is selfless. It is prepared to sacrifice.'];
  const AtomicHabits = ['Habits are the compound interest of self-improvement.', 'The key to building better habits is to start with a tiny habit.', 'The quality of your life is determined by the quality of your habits.', 'Your outcome is a lagging measure of your habits.', 'An atomic habit is a little habit that is part of a larger system.', 'You do not get what you want. You get what you habitually do.', 'The only way to change your habits is to create a new routine.', 'The goal is not to be perfect. The goal is to be better than yesterday.', 'The only way to make progress is to put in the reps.', 'Habits are the building blocks of mastery.', 'Focus on the process, not the result.', 'Motivation is what gets you started, but habits are what keep you going.', 'Your habits will determine your future, not your past.', 'You are what you repeatedly do. Excellence is not an act, but a habit.', 'Your habits shape your identity and your identity shapes your habits.', 'Success is the product of daily disciplines, multiplied over time.', 'The best way to predict the future is to create it.', 'What you do in the shadows will eventually be brought to the light.', 'The first step in changing your habits is to become aware of them.', 'The difference between who you are and who you want to be is what you do.', 'The goal is not to know what to do. The goal is to know how to do it.', 'The more you do something, the easier it becomes.', 'The only way to make a habit stick is to make it enjoyable.', 'Habits are the compound interest of self-improvement.', 'It\'s easier to maintain a habit than to start a new one.', 'Habits are the key to unlocking your potential.', 'Habits are a double-edged sword. They can work for you or against you.', 'Successful people are simply those with successful habits.', 'To build better habits, design your environment to support them.'];
  const PositiveThinking = ['The only way to do great work is to love what you do.', 'Believe you can and you\'re halfway there.', 'Positive anything is better than negative nothing.', 'A positive attitude can really make dreams come true.', 'The only limit to our realization of tomorrow will be our doubts of today.', 'The only way to have a good life is to have a positive mind.', 'Attitude is a little thing that makes a big difference.', 'Happiness is not something ready made. It comes from your own actions.',
'Success is not the key to happiness. Happiness is the key to success.', 'Your positive action combined with positive thinking results in success.', 'Stay positive, work hard, make it happen.', 'The only way to live a fulfilling life is to live with purpose.', 'Your thoughts become your reality.', 'Positivity is a choice. You can choose to focus on the good or the bad.', 'Stay positive, and the universe will support you.', 'Focus on the good, and the good will grow.', 'A positive attitude can change everything.', 'Don\'t watch the clock; do what it does. Keep going.', 'A positive mind finds opportunity in every difficulty.', 'The power of positive thinking can change your life.', 'Life is too short to be unhappy. Choose happiness always.', 'A positive attitude will lead to positive outcomes.', 'Your attitude determines your altitude.', 'The happiness of your life depends upon the quality of your thoughts.', 'The mind is everything; what you think you become.', 'The only way to do great work is to be inspired by a great purpose.', 'Successful people always have a positive attitude.', 'A positive attitude can really make dreams come true - it did for me.', 'The happiest people are those who are doing the most for others.', 'Every day may not be good, but there\'s something good in every day.', 'The only way to be truly happy is to be grateful for what you have.', 'Positivity is a lifestyle.', 'Choose happiness, it\'s an attitude.', 'Your positive actions will inspire others to be positive as well.', 'Positive thinking opens doors, negativity closes them.'];



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
    } else if (v === 'AtomicHabits' ) {
      setQuoteList([...AtomicHabits])
    } else if (v === 'PositiveThinking' ) {
      setQuoteList([...PositiveThinking])
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
    setCustomBrandText(e)
  }

  function handleCustomQuoteTextChange(e) {
    setQuote(e)
  }
  
  function handleIconChange(i) {
    if (i === 'instagram-icon') {
      setIcon(<FaInstagram  size='1.15rem' />)
    } else if (i === 'facebook-icon') {
      setIcon(<FaFacebookSquare size='1.15rem'  />)
    } else if (i === 'twitter-icon') {
      setIcon(<FaTwitter size='1.15rem' />)
    }else {
      setIcon()
    }
  }


  return (
    <IconContext.Provider value={icon}>
      <TitleBanner />
      <QuoteTypeSelector handleQuoteTypeSelection={handleQuoteTypeSelection} />
      <DisplayBox backgroundColor={backgroundColor} quote={quote} font={font} customBrandText={customBrandText} />
      <EditButtonBox handleColorChange={handleColorChange} handleQuoteChange={handleQuoteChange} handleFontChange={handleFontChange} handleCustomBrandTextChange={handleCustomBrandTextChange} handleCustomQuoteTextChange={handleCustomQuoteTextChange} handleIconChange={handleIconChange} />
      
      <br/><br/><br/>
      <p><h3 className="testing-title-text">TESTING NOTES</h3><br/>
      Lots more Quotes and Catogories will be added<br/> once functionlity has been tested<br/><br/>
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
      --------------------------------------------------------<br/>
      IGNORE TEXT BELOW - DEBUGGING ONLY<br/>
      --------------------------------------------------------<br/>

      console.log(icon = {icon}) <br/>
      console.log(background color = {backgroundColor}) <br />
      console.log(quote = {quote})
      console.log(font = {font})
      console.log(quote list = {quoteList})
      
      
    </IconContext.Provider>
  );
}


export default App;

