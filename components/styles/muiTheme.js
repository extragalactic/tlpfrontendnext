import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: '#8f9499',
    primary1Color: '#eee',
    primary2Color: '#f00',
    accent1Color: '#888',
    alternateTextColor: '#1a0000',
  },
  appBar: {
    height: '100%',
  },
  inkBar: {
    backgroundColor: '#8f9499',
  },
  tabs: {
    backgroundColor: '#fff',
    textColor: '#000',
    fontSize: '1.0em',
  },
  raisedButton: {
    primaryTextColor: '#fff',
    secondaryTextColor: '#fff',
    primaryColor: '#a00',
    secondaryColor: '#1DA1F2' /* this is 'Twitter Blue' */,
    color: 'rgba(255, 0, 0, 0.87)',
  },
  dropDownMenu: {
    accentColor: '#000',
  },
});

export default muiTheme;
