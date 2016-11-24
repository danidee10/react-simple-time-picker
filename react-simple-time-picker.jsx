var DayPicker =  React.createClass({
  getInitialState: function(e){
    return {day: 0};
  },

  onChange: function(e){

    var value = e.target.value;

    if(value >= 0 && value <= this.props.days){
      this.setState({day: e.target.value});

      this.props.updateDate({day: value});
    }
  },

  render: function(e){
    return (
      <input type="number" name="day" required className="form-control" onChange={this.onChange} value={this.state.day} />
    )
  }
});

var HourPicker =  React.createClass({
  getInitialState: function(e){
    return {hour: 0};
  },

  onChange: function(e){

    var value = e.target.value

    if(value >= 0 && value <= 23){
      this.setState({hour: e.target.value});

      this.props.updateDate({hour: value});
    }
  },

  render: function(){
    return (
      <input type="number" name="hour" required className="form-control" onChange={this.onChange} value={this.state.hour} />
    )
  }
});

var MinutePicker =  React.createClass({
  getInitialState: function(e){
    return {minute: 0};
  },

  onChange: function(e){

    var value = e.target.value

    if(value >= 0 && value <= 59){
      this.setState({minute: e.target.value});

      this.props.updateDate({minute: value});
    }
  },

  render: function(){

    return (
      <input type="number" name="minutes" required className="form-control" onChange={this.onChange} value={this.state.minute} />
    )
  }
});

var SimpleTimePicker =  React.createClass({
  getInitialState: function(e){
    return {date: new Date()};
  },

  updateDate: function(date){

    var day = date.day;
    var hour = date.hour;
    var minute = date.minute;

    if(day > 0) {
      // if it's a day multiply by 24 * 60
      day *= (24 * 60);
      this.onChange(day);

    }

    if(hour > 0){
      // multiply by 60
      hour *= 60;
      this.onChange(hour)

    }

    if(minute > 0){
      this.onChange(minute);
    }

  },

  onChange: function(time_var){

    var now = new Date(this.state.date.getTime() + (time_var * 60000));

    this.setState({date: now})

    this.props.onChange(now);

  },

  render: function(){

    return (
      <div className="input-group">
        <span className="input-group-addon">Day</span>
        <DayPicker days={this.props.days} updateDate={this.updateDate}/>

        <span className="input-group-addon">Hour</span>
        <HourPicker updateDate={this.updateDate} />

        <span className="input-group-addon">Min</span>
        <MinutePicker updateDate={this.updateDate} />

    </div>
    )
  }
});

module.exports = {
    SimpleTimePicker: SimpleTimePicker
}
