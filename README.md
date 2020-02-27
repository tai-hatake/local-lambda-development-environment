# local lambda develop enviroment

- Use aws cdk and sum to maintain local development and deployment of lambda

## procedure

```bash
# global install aws-cdk
npm install -g aws-cdk
cdk --version
## 1.26.0 (build e251651)

cdk init app --language=typescript
npm install @aws-cdk/aws-lambda @aws-cdk/aws-apigateway

# generate cloudformation config by cdk stack
cdk synth --no-staging > template.yml

# install aws-sam assumes MacOS
brew tap aws/tap
brew install aws-sam-cli

sam --version
## SAM CLI, version 0.43.0

# exec api gateway
sam local start-api
## http://127.0.0.1:3000/test
## Hello World on browser
```
