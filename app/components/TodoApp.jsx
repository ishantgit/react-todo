var React = require('react');
var TodoList = require('TodoList');


var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos:[
        {
          id:1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'Clean the mess'
        },{
          id: 3,
          text: 'Work 3'
        },{
          id: 4,
          text: 'Work 4'
        }
      ]
    };
  },
  render: function(){
    var {todos} = this.state;
    var renderTodos = () => {

    };
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
