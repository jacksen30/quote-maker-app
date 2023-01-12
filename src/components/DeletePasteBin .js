/*

function App() {
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const divRandomColor = {backgroundColor: backgroundColor};
  
    function handleColorChange() {
        const colorList = ['pink', 'orange', 'orange', 'purple']
        const randomIndex =  Math.floor(Math.random() * colorList.length);
        let BGcolor = (colorList[randomIndex]);
        setBackgroundColor(BGcolor)

