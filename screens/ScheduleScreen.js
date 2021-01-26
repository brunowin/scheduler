import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CourseList from '../components/CourseList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useContext, useState, useEffect} from 'react';
import CourseDetailScreen from './CourseDetailScreen';
import CourseEditScreen from './CourseEditScreen';
import UserContext from '../UserContext';
import {firebase} from '../firebase';



const Banner = ({title}) => (
	<Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
	);

const fixCourses = json => ({
	...json,
	courses: Object.values(json.courses)
});
const ScheduleScreen = ({navigation}) => {
	const user = useContext(UserContext);
	const canEdit = user && user.role === 'admin';
	const [schedule, setSchedule] = useState({title: '', courses: []});

	const view = (course) => {
		navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', {course});
	};
	useEffect( () => {
		const db = firebase.database().ref();
		const handleData = snap => {
			if (snap.val()) setSchedule(fixCourses(snap.val())) ;
		}
			db.on('value', handleData, error => alert(error));
			return () => { db.off('value', handleData); };
		
}, []);
	return (
		<SafeAreaView style={styles.container}>
			<Banner title={schedule.title} />
			<CourseList courses={schedule.courses} view={view} />
		</SafeAreaView>
		);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
  	color: '#888',
  	fontSize: 32,
  }
});
export default ScheduleScreen;
