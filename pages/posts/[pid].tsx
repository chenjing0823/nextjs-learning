/*
 * @Author: your name
 * @Date: 2021-03-30 20:51:03
 * @LastEditTime: 2021-03-30 21:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/pages/posts/[12].js
 */
import { useRouter } from 'next/router'
import * as React from 'react'
interface Props {
  inputRef: React.RefObject<HTMLInputElement>
}
function CustomTextInput(props: Props) {
  return (
    <div>
      <input ref={props.inputRef} />
      <input />
    </div>
  )
}
const RefExample = React.forwardRef((props: React.CSSProperties, ref: React.Ref<HTMLInputElement>) => {
  return <input style={{ ...props }} ref={ref} />
})
class Myapp extends React.Component<any, any> {
  public state = {
    inputElement: React.createRef<HTMLInputElement>(),
    inputRef2: React.createRef<HTMLInputElement>(),
  }
  btnclick1 = () => {
    if (this.state.inputElement) {
      // 注意：这里断言的类型应该是使用 RefObject，因为其里面的具有 current: T | null，
      // 如果使用的是 ReactRef ，这个类型是一个联合类型，里面有可能是 null
      ;((this.state.inputElement as React.RefObject<HTMLInputElement>).current as HTMLInputElement).focus()
    }
  }
  btnclick2 = () => {
    if (this.state.inputRef2) {
      ;((this.state.inputRef2 as React.RefObject<HTMLInputElement>).current as HTMLInputElement).focus()
    }
  }
  render() {
    return (
      <div>
        <CustomTextInput inputRef={this.state.inputElement} />
        <RefExample ref={this.state.inputRef2}></RefExample>
        <button onClick={this.btnclick1}>ref1</button>
        <button onClick={this.btnclick2}>ref2</button>
      </div>
    )
  }
}
const Post = () => {
  const router = useRouter()
  // const { pid } = router.query
  const str: string = JSON.stringify(router.query)

  return (
    <div>
      <Myapp></Myapp>
      <p>Post: {str}</p>
    </div>
  )
}

export default Post
