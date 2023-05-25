import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: "aa",
      password: "bb",
      isAgree: true,
      hobbies: [
        {name: "篮球", isChecked: false},
        {name: "足球", isChecked: false},
      ],
      fruits: ["apple"]
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAgreeChange(e) {
    this.setState({ isAgree: e.target.checked })
  }

  handleHobbiesChange(e, index) {
    console.log(e.target.checked, index)
    const newHobbies = [...this.state.hobbies]
    newHobbies[index].checked = e.target.checked
    this.setState({
      hobbies: newHobbies
    })
  }

  handleFruitChange(e) {
    const values = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({
      fruits: values
    })
  }

  render() {
    const { username, password, isAgree, hobbies, fruits } = this.state

    return (
      <div>
        <form>
          <label htmlFor="username">
            <input 
              id='username'
              type="text"
              name="username"
              value={username} 
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label htmlFor="password">
            <input 
              id='password'
              type="text" 
              name="password"
              value={password} 
              onChange={e => this.handleChange(e)}
            />
          </label>

          <label htmlFor="agree">
            <input id='agree' type="checkbox" checked={isAgree} onChange={e => this.handleAgreeChange(e)}/>同意协议
          </label>

          <div>
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.name} key={item.name}>
                    <input type="checkbox" id={item.name} checked={item.checked ?? true} onChange={e => this.handleHobbiesChange(e, index)}/>
                    <span>{item.name}</span>
                  </label>
                )
              })
            }
          </div>

          <div>
            <select name="fruits" value={fruits} onChange={e => this.handleFruitChange(e)} multiple>
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
            </select>
          </div>
        </form>
      </div>
    )
  }
}

export default App