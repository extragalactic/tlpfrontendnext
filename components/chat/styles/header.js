import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'sc-header': {
    'background': '#7C0F15',
    'minHeight': [{ 'unit': 'px', 'value': 75 }],
    'borderTopLeftRadius': '9px',
    'borderTopRightRadius': '9px',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }],
    'position': 'relative',
    'boxSizing': 'border-box',
    'display': 'flex',
    '<w450': {
      'borderRadius': '0px'
    }
  },
  'sc-header--img': {
    'borderRadius': '50%',
    'alignSelf': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'sc-header--team-name': {
    'alignSelf': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'flex': '1',
    'userSelect': 'none',
    'cursor': 'pointer',
    'borderRadius': '5px'
  },
  'sc-header--team-name:hover': {
    'background': '#4882ed'
  },
  'sc-header--close-button': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'alignSelf': 'center',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'boxSizing': 'border-box',
    'cursor': 'pointer',
    'borderRadius': '5px'
  },
  'sc-header--close-button:hover': {
    'background': '#4882ed'
  },
  'sc-header--close-button img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 13 }],
    'boxSizing': 'border-box'
  }
});
