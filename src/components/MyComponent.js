import React, {Fragment} from 'react';
import { Circle, Arrow, Text } from 'react-konva'

export default class MyComponent extends React.Component {

  render() {
    return (
      <Fragment>
        <Circle
          x={50}
          y={50}
          radius={36}
          fill={'red'}
          stroke={'black'}
          strokeWidth={4}
          ref={"circle"}
        />
        <Text
          x={36}
          y={29}
          text={this.props.someNumber.toString()}
          fontSize={48}
          fill={"white"}
          stroke={"black"}
          strokeWidth={2}
          lineJoin={"round"}
          lineCap={"round"}
          ref={"number"}
        />
      </Fragment>
    );
  }
}