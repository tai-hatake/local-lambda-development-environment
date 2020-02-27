#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LocalLambdaDevelopmentEnvironmentStack } from '../lib/local-lambda-development-environment-stack';

const app = new cdk.App();
new LocalLambdaDevelopmentEnvironmentStack(app, 'LocalLambdaDevelopmentEnvironmentStack');
