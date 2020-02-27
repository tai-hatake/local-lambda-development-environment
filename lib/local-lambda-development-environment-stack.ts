import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from '@aws-cdk/aws-apigateway'

export class LocalLambdaDevelopmentEnvironmentStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambdaの定義
    const LocalLambdaDevelopmentEnvironmentStackFunction = new lambda.Function(this, 'local-lambda-development-environment-function', {
      // 必須の項目
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: lambda.Code.asset('lambda'),
      // オプション項目
      functionName: 'local-lambda-development-environment-function'
    })

    // API Gatewayの定義
    const PaymentApi = new apigateway.RestApi(this, 'local-lambda-development-environment-api', {
      // オプション項目
      restApiName: 'local-lambda-development-environment-api'
    })

    // API gateway→Lambdaの接続定義
    const integration = new apigateway.LambdaIntegration(LocalLambdaDevelopmentEnvironmentStackFunction)
    const payment = PaymentApi.root.addResource('test')
    payment.addMethod('GET', integration)
  }
}
