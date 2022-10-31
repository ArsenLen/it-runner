import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import styles from './lessonpage.module.css'

const getLesson = (id) => {
    return axios.get(`http://localhost:3001/lessons/${id}`)
}

const LessonPage = () => {
    const { id } = useParams()
    const [lesson, setLesson] = useState({})
    console.log(lesson);
    useEffect(() => {
        getLesson(id)
            .then(res => {
                setLesson(res.data)
            })
    }, [])
    return (
        <div className='lesson-wrapper'>
            <h1>{lesson.name}</h1>
            <iframe 
                className={styles.video}
                src={`https://www.youtube-nocookie.com/embed/${lesson?.video_link?.split('/')[3]}`}
                title="IT-RUN Videos" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
            />
            <p>{moment(lesson?.date).format("DD MMMM YYYY")}</p>
        </div>
    );
};

export default LessonPage;