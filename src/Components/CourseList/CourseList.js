import React from 'react';
import './CourseList.css'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faUser, faStar, faKey, faCertificate, faHandsHelping } from '@fortawesome/free-solid-svg-icons'

const CourseList = (props) => {
    // console.log(props.passCourse);
    const { name, img, enroll, instructor, courseFee, access, support, certificate } = props.passCourse;
    return (
        <div className="course mb-3 p-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="course-head text-center">
                        <img className="img-fluid img-thumbnail" src={img} alt="course img" />
                        <div className="top">
                            <ul className="">
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} /></li>
                                <li><FontAwesomeIcon icon={faStar} color="gray" /></li>
                            </ul>

                            <h6 className="enrolled-students mt-3"> <FontAwesomeIcon icon={faUsers} /> {enroll} Students enrolled </h6>
                        </div> <br />
                        <h4 className="course-name mt-2">{name}</h4>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="course-details mt-3">
                        <h1 className="mt-3">{courseFee} Tk</h1>
                        <h4 className="instructor">Instractor : {instructor}</h4> <hr />
                        <h5 className="Opportunity"> <FontAwesomeIcon icon={faKey} className="fontIcon mr-2" /> {access} </h5>
                        <h5 className="Opportunity"><FontAwesomeIcon icon={faHandsHelping} className="fontIcon mr-2" /> {support} </h5>
                        <h5 className="Opportunity"> <FontAwesomeIcon icon={faCertificate} className="fontIcon mr-2" /> {certificate}</h5> <br />
                        <Button className="enroll-button" onClick={() => props.enrollHandler(props.passCourse)}><FontAwesomeIcon icon={faUser} /> Enroll Now</Button>
                    </div>
                </div>
            </div> <br />
        </div>
    );
};

export default CourseList;