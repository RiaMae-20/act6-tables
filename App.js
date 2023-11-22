import React from 'react';
import { FlatList, StyleSheet, View , ScrollView,} from 'react-native';
import HTML from 'react-native-render-html';


const userData =[
  {
    id:'1',
    firstname: 'Ria Me',
    lastname: 'Angcahan',
    course: 'BSIT',
    yearSection: '3A',
    username: 'riamaeangcahan',
    password: 'Riamie49',
    userType: 'student',
  },
  {
    id:'2',
    firstname: 'Catherine Leah',
    lastname: 'Gabo',
    course: '',
    yearSection: '',
    username: 'guiisme',
    password: 'password@123',
    userType: 'teacher',
  },
  {
    id:'3',
    firstname: 'Sheilo',
    lastname: 'Saraga',
    course: 'BSIT',
    yearSection: '3A',
    username: 'sheiloseller',
    password: 'warrenraakoa',
    userType: 'student',
  },
  {
    id:'4',
    firstname: 'Winzeal',
    lastname: 'Agoc',
    course: '',
    yearSection: '',
    username: 'winagoc',
    password: 'iloveteaching',
    userType: 'teacher',
  },
  {
    id:'5',
    firstname: 'Katherine Mae',
    lastname: 'Ayuban',
    course: 'BSIT',
    yearSection: '3A',
    username: 'katkat',
    password: 'iamcutiepie',
    userType: 'student',
  },

];



export default function App() {
  const scrollView = `
  <table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>COURSE</th>
    <th>YEAR & SECTION</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.firstname} ${user.lastname}</td>
        <td>${user.course}</td>
        <td>${user.yearSection}</td>
      </tr>
    `
  ).join('')}
</table>
`;

const tableHtml = `
<table style="border: 1px solid black; width: 100%">
  <tr>
    <th>ID</th>
    <th>USERNAME</th>
    <th>PASSWORD</th>
    <th>USERTYPE</th>
  </tr>
  ${userData.map(
    (user) => `
      <tr key=${user.id}>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.password}</td>
        <td>${user.userType}</td>
      </tr>
    `
  ).join('')}
</table>
`;

  const studentData = userData.filter((user) => user.userType === 'student');

  
  



  return (
    <View style={styles.container}>
    <View style={styles.plainMap}>
      <HTML source={{ html: tableHtml }} />
      </View>
      <ScrollView style={styles.scroolViu}>
        <HTML source={{html:scrollView}}/>
      </ScrollView>

      <FlatList
  data={studentData}
  keyExtractor={(student) => student.id}
  renderItem={({ item }) => (
    <HTML
      source={{
        html: `
          <table style="border: 1px solid black; width: 100%">
          <tr>
          <th>ID</th>
          <th>FIRSTNAME</th>
          <th>LASTNAME</th>  
          <tr>
              
              <td>${item.id}</td>
              <td>${item.firstname}</td>
              <td>${item.lastname}</td>
            </tr>
          </table>
        `,
      }}
    />
  )}
  style={styles.flatLest}
/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plainMap: {
    width: '95%',
    margin: 10,
  },
  scroolViu: {
    width: '95%',
    margin: 10,
  },
  
  flatLest: {
    width: '95%',
  },
});