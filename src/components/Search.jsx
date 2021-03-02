import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    width: '100 %',
  },
  textField: {
    width: '100%',
    marginRight: theme.spacing(4),
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const { onSearch } = props;
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className={classes.root}>
      <div className={classes.textField}>
        <TextField
          label="Buscar por nombre o # de pokemon"
          onChange={onChange}
          variant="outlined"
          fullWidth="true"
        />
      </div>
      <div>
        <Button
          type="button"
          onClick={onClick}
          variant="contained"
          color="secondary"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default Search;
