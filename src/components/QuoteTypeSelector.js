import React from 'react'

export default function QuoteTypeSelector(props) {
    const { handleQuoteTypeSelection, uniqueId } = props;

  return (
    <div className="quoteTypeSelector">
        <label className='quoteTypeSelector-Label' htmlFor={uniqueId}>What type of Quotes would you like ?</label>
        <select className='quoteTypeSelector-DropDown' name='typeSelector' id={uniqueId} onChange={(e) => handleQuoteTypeSelection(e.target.value)} >
                <option className='quoteTypeSelector-Option' value="Motivational">Motivational</option>
                <option className='quoteTypeSelector-Option' value="AtomicHabits">Atomic Habits</option>
                <option className='quoteTypeSelector-Option' value="Funny">Funny</option>
                <option className='quoteTypeSelector-Option' value="Love">Love</option>
                <option className='quoteTypeSelector-Option' value="PositiveThinking">Positive Thinking</option>
        </select>
    </div>
  )
}
