import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as cdkdemo from '../lib/cdk-jest-stack';
import { SynthUtils } from '@aws-cdk/assert/lib/synth-utils';

//unit test
const app = new cdk.App();

//fine grained test
test('Testing Queue Name', () => {
  const stack = new cdkdemo.CdkJestStack(app, 'Myteststack');

  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::SQS::Queue', {
    QueueName: 'cd-demo-queue',
  });
});
