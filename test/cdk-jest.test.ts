import { describe, test, expect } from '@jest/globals';

// Import the Template class from the aws-cdk-lib/assertions module
import { Template } from 'aws-cdk-lib/assertions';

// Import all exports from the aws-cdk-lib module
import * as cdk from 'aws-cdk-lib';

// Import all exports from the ../lib/cdk-jest-stack module
import * as cdkdemo from '../lib/cdk-jest-stack';

// Import the SynthUtils class from the @aws-cdk/assert/lib/synth-utils module
import { SynthUtils } from '@aws-cdk/assert/lib/synth-utils';

// Initialize the app object
const app = new cdk.App();

describe('Testing Queue Name', () => {
  // Test to check the queue name
  test('should match the expected queue name', () => {
    // Create a new CdkJestStack object
    const stack = new cdkdemo.CdkJestStack(app, 'Myteststack');
    // Create a new Template object from the stack
    const template = Template.fromStack(stack);
    // assert that the template has the resource properties of a queue named 'cd-demo-queue'
    expect(
      template.hasResourceProperties('AWS::SQS::Queue', {
        QueueName: 'cd-demo-queue',
      })
    );
  });
});

describe('Snapshot testing', () => {
  // Snapshot test to check the stack template
  test('should match the expected snapshot', () => {
    // Create a new CdkJestStack object
    const stack = new cdkdemo.CdkJestStack(app, 'snapshot-test');
    // assert that the stack matches the expected snapshot
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
