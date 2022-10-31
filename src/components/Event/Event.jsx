import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './event.module.css'

const getLessons = () => {
    return axios.get('http://localhost:3001/lessons/')
}

const Event = ({event}) => {
    const [lessons, setLessons] = useState([])
    const [existLesson, setExistLesson] = useState()
    
    useEffect(() => {
        getLessons()
            .then(res => {
                setExistLesson(checkExist(res.data))
            })
    }, [])

    const checkExist = (data) => {
        return data.find(lesson => new Date(lesson.date).getTime() === event.start.getTime())
    }
    
    return (
        // допипсать url с id
        <>  
        {existLesson ? (
            <Link to={`/lesson/${existLesson.id}`} className={styles.title}>{event.title}</Link>  
        ) : (
            <Link to={`/add-lesson/${event.start.getTime()}`} className={styles.title}>{event.title}</Link>  
        ) }
        </>
    );
};

export default Event;