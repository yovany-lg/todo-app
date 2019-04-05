import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class NewTodo extends React.Component {
  state = {
    text: '',
  };

  handleSubmit = () => {
    const { text } = this.state;
    const { addTodo } = this.props;
    const trimmed = text.trim();
    if (trimmed !== '') {
      this.setState({ text: '' });
      addTodo(trimmed);
    }
  }
  handleChangeText = (event) => {
    this.setState({ text: event.target.value });
  };
  
  render() {
    return (
      <Grid container spacing={16} justify="center" alignItems="center">
        <Grid item xs={8}>
          <TextField
            id="newTodo"
            fullWidth
            label="Nuevo Todo"
            placeholder="Descripcion"
            value={this.state.text}
            onChange={this.handleChangeText}
            margin="normal"
          />  
        </Grid>
        <Grid item xs={2}>
          <Fab color="primary" size="small" aria-label="Add" onClick={this.handleSubmit}>
            <AddIcon />
          </Fab>      
        </Grid>
      </Grid>
    );
  }
};

export default NewTodo;