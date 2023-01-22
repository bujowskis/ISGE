import {useState} from "react";

export function Display (props) {
  const [scrollableHistory, setScrollableHistory] = useState(['foo', 'foo', 'foo'])
  const ScrollableHistory = () => (
    <div className='display-scrollableHistory'>
      <ul>{scrollableHistory.map((text) => <li>{text}</li>)}</ul>
    </div>
  )
  const [currentText, setCurrentText] = useState([]) // message in array format
  const CurrentText = () => (
    <div className={'display-currentText'}>
      <ul>{currentText.map((text) => <li>{text}</li>)}</ul>
    </div>
  )

  return (
    <div className='Display'>
      <ScrollableHistory />
      <CurrentText />
    </div>
  )
}
