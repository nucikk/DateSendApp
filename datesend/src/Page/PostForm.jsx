import axios from 'axios';
import React, { useState } from 'react'

const PostForm = () => {
  const url = "";
  const [date, setDate] = useState(
    {
      name: "",
      date: "",
      iduser: ""
    }
  )

  function handleChange(e) {
    const newdate = { ...date }
    newdate[e.target.id] = e.target.value
    setDate(newdate)
    console.log(newdate)
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(url, {
      name: date.name,
      date: date.date,
      iduser: date.iduser,
    })
    .then(res => {
      console.log(res.date)
    })
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder='Name'
          id="name"
          value={date.name}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="date"
          placeholder='Date'
          id={date}
          value={date.date}
          onChange={(e) => handleChange(e)}
        />

        <input
          type="number"
          placeholder='Number'
          id="iduser"
          value={date.number}
          onChange={(e) => handleChange(e)}
        />
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default PostForm
