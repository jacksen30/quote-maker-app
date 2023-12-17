import React from 'react'

  // const toggleBtn = document.getElementById('toggleBtn');
  // const lightenText = document.getElementById('lightenText');
  // const darkenText = document.getElementById('darkenText');

  // toggleBtn.addEventListener('click', () => {
  //   if (toggleBtn.classList.contains('toggled')) {
  //     toggleBtn.classList.remove('toggled');
  //     lightenText.classList.remove('unselected-toggle-text');
  //     darkenText.classList.add('unselected-toggle-text');
  //   } else {
  //     toggleBtn.classList.add('toggled');
  //     darkenText.classList.remove('unselected-toggle-text');
  //     lightenText.classList.add('unselected-toggle-text');
  //   }
  // });

export default function ToggleSwitch() {
  return (
    <div className='toggle'>
        <p id='lightenText' className='toggle-text'>On</p>
        <div id='toggleBtn' className='toggle-btn toggled'>
            <div className='inner-circle'></div>
        </div>
        <p id="darkenText" className="toggle-text unselected-toggle-text">Off</p>
    </div>
  )
}


