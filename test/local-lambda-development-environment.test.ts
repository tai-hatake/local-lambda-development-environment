import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import LocalLambdaDevelopmentEnvironment = require('../lib/local-lambda-development-environment-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LocalLambdaDevelopmentEnvironment.LocalLambdaDevelopmentEnvironmentStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
