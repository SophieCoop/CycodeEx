import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import ChipItem from '../interfaces/chipItem';
import { useEffect } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
      marginBottom: theme.spacing(4)
    },
    title: {
      fontSize: '20px',
      [theme.breakpoints.down("xs")]: {
        fontSize: '15px'
      }
    },
    chip: {
      size: "medium",
      [theme.breakpoints.down("sm")]: {
        size: "small"
      }
    }
  }),
);


export default function Chips(props: { chipList: ChipItem[], onDelete: any, dispatch: any }) {
  const classes = useStyles();
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (props.chipList.length > 0) {
      setTitle("Selected tags: ");
    }
  }, [props.chipList]);

  const handleDelete = (itemId: number) => {
    props.dispatch(props.onDelete(itemId));
    if (props.chipList.length === 1) {
      setTitle("");
    }
  }

  const renderChips = () => {

    return props.chipList
      .map(chipObj => {
        return (
          <Chip
            key={chipObj.id}
            label={chipObj.label}
            color="primary"
            className={classes.chip}
            onDelete={() => handleDelete(chipObj.id)}
          />
        )
      });
  };

  return (
    <div className={classes.root}>
      <span className={classes.title}>{title}</span>
      {renderChips()}
    </div>
  );
}
