MissionTypeSelect = React.createClass({
  propTypes: {
    missions: React.PropTypes.array.isRequired
  },
  renderMissionRadios() {
    return this.props.missions.map((mission) => {
      return <MissionRadioButton key={mission._id} mission={mission} />
    });
  },

  render() {
    return (
        <form action="#">
          {this.renderMissionRadios()}
        </form>
    );
  }
});
