import { Fragment } from 'react';

import useCourseStore from '../app/courseStore';

const CourseList = () => {
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourseStatus,
        })
    );

    return (
        <>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <Fragment key={i}>
                            <li
                                className={`course-item`}
                                style={{
                                    backgroundColor: course.completed
                                        ? '#00ff0044'
                                        : 'white',
                                }}
                            >
                                <span className="course-item-col-1">
                                    <input
                                        type="checkbox"
                                        checked={course.completed}
                                        onChange={() => {
                                            toggleCourseStatus(course.id);
                                        }}
                                    />
                                </span>
                                <span>{course?.title}</span>
                                <button
                                    className="delete btn"
                                    onClick={() => {
                                        removeCourse(course.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        </Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default CourseList;
