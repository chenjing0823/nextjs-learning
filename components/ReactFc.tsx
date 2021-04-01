import * as React from 'react'
const FuncExample: React.FC<IFunExampleProps> = (props: IFunExampleProps) => {
  // useSate
  const [color, setColor] = React.useState('blue')
  const [fontSize, setFontsize] = React.useState('16px')
  // useRef
  const text = React.useRef<HTMLDivElement>(null)
  const changeColor = (color: string, e?: any) => {
    // e.preventDefault()
    setColor(color)
  }

  const changeBgC = () => {
    ;(text.current as HTMLDivElement).style.backgroundColor = '#e9e9e9'
  }
  // useEffect
  React.useEffect(() => {
    setTimeout(() => {
      setFontsize('100px')
    }, 1000)
  })
  return (
    <div ref={text}>
      <div style={{ color, fontSize }}>函数式组件</div>
      <button onClick={() => changeColor('green')}>点击绿色</button>
      <button onClick={() => changeColor('red')}>点击红色</button>
      <button onClick={changeBgC}>更好背景</button>
    </div>
  )
}
export default FuncExample
