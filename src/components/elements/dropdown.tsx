import React, { useState, useRef, useEffect } from 'react';
import { Grid, TextField, Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../../assets/styles/dropdown.css';
import ChipItem from '../interfaces/chipItem';


export default function SplitButton(props: { options: ChipItem[], onSelect: any, onNewOption: any, dispatch: any }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<ChipItem[]>([]);
  const [showAddNewOptions, setShowAddNewOptions] = useState<boolean>(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const queryFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredOptions([...props.options]);
  }, [props.options]);

  useEffect(() => {
    const timeOutId = setTimeout(handleQueryChange, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);


  const handleQueryChange = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length > 0) {
      setOpen(true);
      const updatedList = filteredOptions.filter(item => {
        return item.label ? item.label.toLowerCase().search(trimmedQuery.toLowerCase()) !== -1 : item;
      })
      if (updatedList.length > 0) {
        setFilteredOptions(updatedList);
      } else {
        setShowAddNewOptions(true);
      }
    } else {
      setShowAddNewOptions(false);
      setFilteredOptions([...props.options]);
    }
  };

  const handleMenuItemClick = (index: number) => {
    props.dispatch(props.onSelect(index));
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    const anchorCurrent: any = anchorRef?.current;

    if (anchorCurrent && anchorCurrent.contains(event.target)) {
      return;
    }
    setShowAddNewOptions(false);
    setOpen(false);
  };

  const onAddOptionItemClick = () => {
    props.dispatch(props.onNewOption(query.trim()));
    setOpen(false);
    setShowAddNewOptions(false);
    setQuery("");
  }

  const AddOptionItem = () => (
    <MenuItem
      key={-1}
      onClick={onAddOptionItemClick}
      selected={true}
    >
      {`Add new option: ${query.trim()}`}
    </MenuItem>

  )

  return (
    <Grid item alignItems={"center"}>
      <div className="dropdown-container" ref={anchorRef} aria-label="dropdown">
        <TextField
          ref={queryFieldRef}
          color="primary"
          fullWidth
          placeholder="Search for a tag"
          onChange={event => setQuery(event.target.value)}
          value={query}>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          size="small"
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </div>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal style={{ width: '80%' }} >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper id="menu-list-grow">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList style={{ maxHeight: '110px', overflow: 'auto' }}>
                  {showAddNewOptions ? <AddOptionItem /> : null}
                  {filteredOptions.map((option, index) => (
                    <MenuItem
                      key={option.id}
                      disabled={option.isSelected}
                      onClick={() => handleMenuItemClick(option.id)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Grid>
  );
}