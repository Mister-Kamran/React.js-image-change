function Test() {
  const [count, setCount] = useState(0);

  const [data] = useState([

"/static/media/2.0037c26c1032fd5766d4.webp",
"/static/media/3.aeaf79c1f2edd3eec812.webp",
"/static/media/4.899176a2826e0e6e1ca4.webp"

  ]);

  const d = useRef(null);

  const incrementImage = () => {
    
    d.current.src = data[count];
    setCount(count+1)

  if(count===2){

    setCount(0)
  }

  };

  return (
    <div>
      <div className='game_container'></div>
      <button onClick={incrementImage}>Next Image</button>
      {/* eslint-disable jsx-a11y/alt-text */}
      <img ref={d} />
    </div>
  );
}
