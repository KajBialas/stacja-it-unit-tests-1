import React from 'react';
import { connect } from 'react-redux';

function Subpage({count}) {
  return (
    <div>
      Counter: {count}

    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.value,
  }
};


export default connect(mapStateToProps)(Subpage);
