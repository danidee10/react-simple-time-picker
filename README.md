# React Simple Time picker
A Simple time picker for react (No Calendar, Just Days, hours and Minutes)

![picker](/assets/picker.png)

## Installation
```bash
npm install react-simple-time-picker --save
```

## Usage

```javascript
import SimpleTimePicker from 'react-simple-time-picker'

var PollForm = React.createClass({

  getInitialState: function(e){
    return {date: ''};
  },

  onDateChange: function(date){
    /* date is a js Date object */

    //this.setState({date: close_date});
    console.log(date);
  },

  render: function(){

    return (
        <SimpleTimePicker days="7" onChange={this.onDateChange} />
    );
  }
});
```

You can set `days` to any number of days you want.

The returned value is a Javascript Date object.


## Client-side usage
There's also an included webpack bundle for use on the client side, you can use like this:


```javascript
var SimpleTimePicker = ReactSimpleTimePicker.SimpleTimePicker;
```

To rebuild the bundle, install all the dependencies with:

```bash
npm install
```

and run `webpack`
