import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TaskDetail from './TaskDetail';


class TaskList extends Component{
    
    state = { tasks: [] };

    componentWillMount(){
        console.log('componetWillMount');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ tasks: response.data }));        
    }

    renderTasks()
    {
        return this.state.tasks.map(task => 
        <TaskDetail  key={task.title} taskProp={task}/>);
    }

    render(){
        console.log(this.state);

        return(
            <ScrollView>
                {this.renderTasks()}
            </ScrollView>        
        );
    }    
};

// const styles = StyleSheet.create({
//     taskTextStyle: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//     },   
//     taskCardStyle:{
//         backgroundColor:'#F8F8F8',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 60,
//         paddingTop: 15,
//         shadowColor: '#000',     
//         shadowOffset: {width: 0, height: 2},
//         elevation: 2,
//         position: 'relative'
//     }
//   });
  
export default TaskList;