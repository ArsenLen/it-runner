import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import styled from "styled-components";
import styles from './addlessonpage.module.css'
import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddLessonForm = styled.form`
    margin: auto;
`

const AddLessonPage = () => {
  const [age, setAge] = React.useState(""); 
  const {time} = useParams()

  const addLesson = (e) => {
    e.preventDefault()
    const intTime = +time
    axios.post('http://localhost:3001/lessons', {
      date : new Date(intTime),
      group_id : 1,
      name : "HTML Basics",
      students : [],
      video_link : "https://youtu.be/HO7HaYd9l3g",
      homework_id : 1
    }).then(res => console.log(res))
  }

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <h1 style={{'textAlign' : 'center'}}>Создать урок</h1>
      <AddLessonForm style={{'width' : '50%'}} onSubmit={addLesson}> 
        <TextField label="Название урока" variant="outlined" fullWidth className={styles.mb20} />
        <FormControl fullWidth>
          <InputLabel>Группа</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>Ten</MenuItem>
            <MenuItem value={2}>Twenty</MenuItem>
            <MenuItem value={3}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">Отправить </Button>
      </AddLessonForm>
    </div>
  );
};

export default AddLessonPage;
