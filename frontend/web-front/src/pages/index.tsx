import React, {useEffect, useState} from 'react'
import axios, {AxiosInstance} from 'axios'

type Todo = {
  id: string,
  title: string,
  body: string
}


const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const getAPIData = async () => {
    let instance: AxiosInstance

    instance = axios.create({
      baseURL: 'http://localhost:8080'
    })

    try {
      const response = await instance.get('/api/')
      const tododata = response?.data as Todo[]
      setTodos(tododata)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={getAPIData}>click</button>
      {todos.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Index
