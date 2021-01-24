import React from 'react';
import {ScrollView, StyleSheet, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector'
import CourseSelector from './CourseSelector'
import {useState} from 'react';
import {getCourseTerm} from '../utils/course';

  const termMap = {F:'Fall', W: 'Winter', S: 'Spring'};
  const terms = Object.values(termMap);

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  return (
    <View style={styles.container}>
    <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
    <ScrollView contentContainerStyle={styles.courseList}>
		 <CourseSelector courses={termCourses} view={view} />
	  </ScrollView>
    </View>
  )};


const styles = StyleSheet.create({
  courseList: {
  	flex: 1,
  	flexDirection: 'row',
  	flexWrap: 'wrap',
  	alignItems: 'center',
  	justifyContent: 'flex-start',
  },
  container: {
    alignItems: 'center'
  }
});

export default CourseList;