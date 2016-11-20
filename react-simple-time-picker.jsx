var DayPicker =  React.createClass({
  getInitialState: function(e){
    return {day: 0};
  },

  onChange: function(e){

    var value = e.target.value;

    if(value >= 0 && value <= this.props.days){
      this.setState({day: e.target.value});

      this.props.updateDate({day: value, hour: 0, minute: 0});
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

      this.props.updateDate({day: 0, hour: value, minute: 0});
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

      this.props.updateDate({day: 0, hour: 0, minute: value});
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
    return {date: '', track: [0, 0, 0]};
  },

  updateDate: function(date){

    var track = this.state.track.slice();

    var day = date.day;
    var hour = date.hour;
    var minute = date.minute;

    if(day > 0) {
      track[0] = day
      this.setState({track: track});

    }

    if(hour > 0){
      track[1] = hour
      this.setState({track: track});

    }

    if(minute > 0){
      track[2] = minute
      this.setState({track: track});
    }

    this.onChange(track);

  },

  onChange: function(date_params){

    //construct new date object
    var now = new Date();
    now.setHours(date_params[0] * 24);
    now.setHours(date_params[1]);
    now.setMinutes(date_params[2]);

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
