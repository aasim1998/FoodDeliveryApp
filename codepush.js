import CodePush from 'react-native-code-push';
import React from 'react';
import {Text} from 'react-native';
const CODE_PUSH_OPTIONS = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  checkAdd: CodePush.DeploymentStatus,
};
const withCodePush = WrappedComponent => {
  class WrappedApp extends React.PureComponent {
    componentDidMount() {
      CodePush.sync(
        {updateDialog: 'true', installMode: CodePush.InstallMode.MANUAL},
        this.syncWithCodePush,
      );
    }
    syncWithCodePush = status => {
      console.log(status);
    };
    render() {
      return <WrappedComponent />;
    }
  }
  return CodePush(CODE_PUSH_OPTIONS)(WrappedApp);
};
export default withCodePush;