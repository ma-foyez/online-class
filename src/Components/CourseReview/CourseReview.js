import React from 'react';
import './CourseReview.css'
import { Button } from 'react-bootstrap';

const CourseReview = (props) => {
    const enroll = props.courseEnroll;

    // total course Fee
    let totalCourseFee = 0;
    for (let i = 0; i < enroll.length; i++) {
        const enrollFee = enroll[i].courseFee;
        totalCourseFee = totalCourseFee + enrollFee;
    }

    // last enroll course details
    let lastEnrolled = "";
    for (let i = 0; i < enroll.length; i++) {
        const lastEnroll = enroll[i];
        lastEnrolled = { name: lastEnroll.name, img: lastEnroll.img, courseFee: lastEnroll.courseFee, instructor: lastEnroll.instructor, enroll: lastEnroll.enroll };
    }
    return (
        <div className="review">
            <h2 className="course-review text-center pt-3">Enroll Riview</h2>
            <div className="total-enroll-course mt-5 m-3">
                <h5> Total Enroll Course : {enroll.length} </h5>
                <h5> Total Course Fee : {totalCourseFee} </h5>
            </div>
            <div className="last-enroll-course m-3 mt-3 p-4">
                <h3 className="p-2 mb-3 last-enroll text-center">Last Enroll</h3>
                <img src={lastEnrolled.img} alt="" className="img-thumbnail w-100 mb-4" />
                <h4 className="text-center pb-3"> {lastEnrolled.name} </h4>
                <h5>Instractor : {lastEnrolled.instructor} </h5>
                <h5> Course Fee : {lastEnrolled.courseFee} Tk </h5>
                <h5> Enroll Students : {lastEnrolled.enroll} </h5>
                <div className="text-center mt-3">
                    <Button className="enroll-confirm">Enroll Confirm</Button>
                </div>
            </div>
        </div>
    );
};

export default CourseReview;