import * as React from 'react'
class TsExample extends React.Component<ITsExampleProps, ITsExampleState> {
  public state = {
    count: 0,
  }
  public plusCount = () => {
    this.setState({
      count: ++this.state.count,
    })
  }
  public render() {
    let { count } = this.state
    console.log(`this?.state?.count${this?.state?.count}`)
    return (
      <div>
        <>
          <div>test: {this.props.name}</div>
          <div>count: {count}</div>
          <button onClick={() => this.plusCount()}>add count</button>
        </>
      </div>
    )
  }
}
export default TsExample
