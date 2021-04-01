type propsType = typeof defaultProps & {
  count: number
}

const defaultProps = {
  name: 'world',
}

const DefaultPrppsExample = (props: propsType) => {
  return (
    <div>
      {props.name}
      {props.count}
    </div>
  )
}

export default DefaultPrppsExample
