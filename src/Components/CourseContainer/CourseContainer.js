import React from 'react';
import './CourseContainer.css'
import fakeData from '../../FakeData'
import { useState } from 'react';
import CourseList from '../CourseList/CourseList';
import CourseReview from '../CourseReview/CourseReview';
const CourseContainer = () => {
    // all course pass
    const [course, setCourse] = useState(fakeData)

    // enroll course handler
    const [enroll, setEnroll] = useState([])
    const enrollHandler = (course) => {
        const newEnroll = [...enroll, course];
        setEnroll(newEnroll);
        console.log(enroll)
    }
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="course-review pb-3 mb-3">
                            <CourseReview courseEnroll={enroll}></CourseReview>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="course-list">
                            {
                                course.map(course => <CourseList passCourse={course} id={course.id} enrollHandler={enrollHandler}></CourseList>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;